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
import { ThreeDots } from 'react-loader-spinner';

const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

function CardCreateHabits({ setOpenCardCreateHabits }) {

  const [disabledInput, setDisabledInput] = useState(false);
  const [loadingToSave, setLoadingToSave] = useState(false);
  const [daysSelected, setDaysSelected] = useState([]);

  const { userLogged, getHabits, calculatePercentage } = useContext(UserContext);

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
      await api.post('/habits', body, { headers: { Authorization: `Bearer ${userLogged.token}` } });
      
      setLoadingToSave(true);
      setDisabledInput(true)
      setTimeout(() => { setLoadingToSave(false) }, 2000);
      setTimeout(() => { setOpenCardCreateHabits(false) }, 2000);
      getHabits();

    } catch (error) {
      setDisabledInput(false);
      setLoadingToSave(true);
      setTimeout(() => { setLoadingToSave(false) }, 2000);
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
            <span className='marginInput' key={index} >
              <ButtonDay
                day={i}
                func={() => handleClickDay(index)}
                daySelected={daysSelected.includes(index)}
              />
            </span>
          ))}
        </div>

        <div className='buttons'>
          <ButtonCancel type='button' onClick={()=>setOpenCardCreateHabits(false)} >Cancelar</ButtonCancel>
          <ButtonStyled
            w='84px'
            h='35px'
            type='submit'
          >
            {loadingToSave ?
              <ThreeDots
                height="50"
                width="50"
                radius="9"
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
              :
              <p>Salvar</p>
            }
          </ButtonStyled>
        </div>
      </form>
    </Container>
  )
}

export default CardCreateHabits;