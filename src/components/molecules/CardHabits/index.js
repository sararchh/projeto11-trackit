import React, { useContext, useState } from 'react';
import InputStyled from '../../atoms/InputStyled';

import { useForm } from 'react-hook-form'; //gerencia formulario
import { yupResolver } from '@hookform/resolvers/yup'; //validador para Yup
import * as Yup from 'yup'; //valida os campos e seu tipos

import ButtonStyled from '../../atoms/ButtonStyled';
import ButtonDay from '../../atoms/ButtonDay';

import { Container, ButtonCancel } from './styles';
import { api } from '../../../services/api';
import { UserContext } from '../../../Contexts/userContext';
import { toast } from 'react-toastify';

const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

function CardHabits() {
  const [disabledInput, setDisabledInput] = useState(false);
  const [daysSelected, setDaysSelected] = useState([]);

  const { userLogged } = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Nome obrigatório'),
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleCreateHabits = async () => {
    const values = getValues();

    const body = {
      name: values.name,
      days: daysSelected
    }

    try {
      const response = await api.post('/habits', body,  { headers: { Authorization: `Bearer ${userLogged.token}` } });
      console.log('response', response.data);

    } catch (error) {
      toast.error('Erro ao criar hábito');
    }
  }

  const handleClickDay = (index) => {

    const newArray = [...daysSelected, index];
    setDaysSelected(newArray);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleCreateHabits)}>
        <div>
          <InputStyled
            name='habits'
            placeholder='nome do hábito'
            onChange={value => setValue('name', value)}
            messageError={errors?.name?.message}
            disabled={disabledInput}
          />
        </div>

        <div>
          {days.map((i, index) => (
            <span className='marginInput'>
              <ButtonDay
                day={i}
                handleClickDay={() => handleClickDay(index)}
                daySelected={daysSelected.includes(index)}
              />
            </span>
          ))}
        </div>

        <div className='buttons'>
          <ButtonCancel>Cancelar</ButtonCancel>
          <ButtonStyled w='84px' h='35px' type='submit'>Salvar</ButtonStyled>
        </div>
      </form>
    </Container>
  )
}

export default CardHabits;