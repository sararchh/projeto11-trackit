import React, { useContext, useState } from 'react';

import ButtonDay from '../../atoms/ButtonDay';
import { api } from '../../../services/api';
import { UserContext } from '../../../Contexts/userContext';

import { Container } from './styles';
import { BiTrash } from "react-icons/bi";
import { toast } from 'react-toastify';

import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

import { arrayDays } from '../../../utils/arrays';

function CardHabits({ days, id, name }) {
  // eslint-disable-next-line 
  const [daySelected, setDaySelected] = useState(days);

  const { userLogged, getHabits } = useContext(UserContext);

  const handleConfirmDelete = (idDay) => {
      confirmAlert({
        title: "Deseja excluir o Hábito?",
        message: "",
        buttons: [
          {
            label: "Sim",
            onClick: () => {
              handleRemoveHabits(idDay)
            }
          },
          {
            label: "Não"
          }
        ]
      });

      
  }

  const handleRemoveHabits = async (idDay) => {
    try {
      await api.delete(`/habits/${idDay}`, { headers: { Authorization: `Bearer ${userLogged.token}` } });

      getHabits();
    } catch (error) {
      toast.error('Erro ao Deletar Hábito')
    }
  }

  return (
    <Container>
      <div className='divName'>
        <h1>{name}</h1>

        <button onClick={() => handleConfirmDelete(id)}>
          <BiTrash />
        </button>
      </div>

      <div>
        {Boolean(arrayDays.length) && arrayDays.map((i, index) => (
          <span key={index}>
            <ButtonDay
              day={i}
              daySelected={daySelected.includes(index)}
            />
          </span>
        ))}
      </div>

    </Container>
  )
}

export default CardHabits;