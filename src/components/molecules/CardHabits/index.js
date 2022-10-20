import React, { useContext, useState } from 'react';

import { Container } from './styles';

import { BiTrash } from "react-icons/bi";
import ButtonDay from '../../atoms/ButtonDay';
import { api } from '../../../services/api';
import { UserContext } from '../../../Contexts/userContext';

const arrayDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

function CardHabits({ days, id, name }) {
  // eslint-disable-next-line 
  const [daySelected, setDaySelected] = useState(days);

  const { userLogged, getHabits } = useContext(UserContext);

  const handleRemoveHabits = async (idDay) => {
    const response =  await api.delete(`/habits/${idDay}`, { headers: { Authorization: `Bearer ${userLogged.token}` } });

    getHabits();
    console.log('response', response);
  }

  return (
    <Container>
      <div className='divName'>
        <h1>{name}</h1>

        <button onClick={() => handleRemoveHabits(id)}>
          <BiTrash />
        </button>
      </div>

      <div>
        {arrayDays.map((i, index) => (
          <span>
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