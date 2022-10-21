import React, { useContext, useEffect, useState } from 'react';

import { BsCheckLg } from "react-icons/bs";
import { UserContext } from '../../../Contexts/userContext';
import { api } from '../../../services/api';

import { Container, Text, ButtonConfirm } from './styles';

function CardHabitsToday({ name, id, highestSequence, currentSequence, done }) {
  const [confirmHabit, setConfirmHabit] = useState(false);
  const [currentAndHighSequence, setCurrentAndHighSequence] = useState(false);

  const { userLogged, listHabitsToday } = useContext(UserContext);

  useEffect(() => {
    handleSelectHabit(id);

    if (highestSequence === currentSequence) {
      setCurrentAndHighSequence(true);
    }

    // eslint-disable-next-line
  }, [confirmHabit, currentAndHighSequence])

  const handleSelectHabit = (idHabit) => {
    if (confirmHabit === true) {
      handleCheckHabit(idHabit);
    } else if (confirmHabit === false && done === true) {
      handleUnCheckfHabit(idHabit)
    }
  }

  const handleCheckHabit = async (idHabit) => {
    await api.post(`/habits/${idHabit}/check`, null, { headers: { Authorization: `Bearer ${userLogged.token}` } });
    listHabitsToday();
  }

  const handleUnCheckfHabit = async (idHabit) => {
    await api.post(`/habits/${idHabit}/uncheck`, null, { headers: { Authorization: `Bearer ${userLogged.token}` } });
    listHabitsToday();
  };

  return (
    <Container>
      <div>
        <h1>{name}</h1>
        <div className='cardInfo'>
          <Text currentAndHighSequence={currentSequence === highestSequence}>Sequência atual: <span> {currentSequence} dias</span></Text>
          <Text currentAndHighSequence={currentSequence === highestSequence}>Seu recorde: <span>{highestSequence} dias</span></Text>
        </div>
      </div>

      <div>
        <ButtonConfirm
          type='button'
          onClick={() => setConfirmHabit(!confirmHabit)}
          confirmHabit={confirmHabit}
        >
          <BsCheckLg />
        </ButtonConfirm>
      </div>
    </Container>
  )
}

export default CardHabitsToday;