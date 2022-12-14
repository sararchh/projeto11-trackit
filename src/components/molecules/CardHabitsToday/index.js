import React, { useContext, useEffect, useState } from 'react';

import { BsCheckLg } from "react-icons/bs";
import { UserContext } from '../../../Contexts/userContext';
import api from '../../../services/api';

import { Container, Text, ButtonConfirm } from './styles';

function CardHabitsToday({ name, id, highestSequence, currentSequence, done }) {
  const [confirmHabit, setConfirmHabit] = useState();
  const [currentAndHighSequence, setCurrentAndHighSequence] = useState(false);

  const { listHabitsToday } = useContext(UserContext);

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
    await api.post(`/habits/${idHabit}/check`, null);
    listHabitsToday();
  }

  const handleUnCheckfHabit = async (idHabit) => {
    await api.post(`/habits/${idHabit}/uncheck`, null);
    listHabitsToday();
  };

  return (
    <Container data-identifier="today-infos">
      <div>
        <h1>{name}</h1>
        <div className='cardInfo'>
          <Text currentAndHighSequence={currentSequence === highestSequence}>Sequência atual: <span> {currentSequence} dias</span></Text>
          <Text currentAndHighSequence={currentSequence === highestSequence}>Seu recorde: <span>{highestSequence} dias</span></Text>
        </div>
      </div>

      <div>
        <ButtonConfirm
          data-identifier="done-habit-btn"
          type='button'
          onClick={() => setConfirmHabit(!confirmHabit)}
          confirmHabit={confirmHabit || done}
        >
          <BsCheckLg />
        </ButtonConfirm>
      </div>
    </Container>
  )
}

export default CardHabitsToday;