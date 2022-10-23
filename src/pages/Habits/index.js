import React, { useContext, useEffect, useState } from 'react';

import ButtonStyled from '../../components/atoms/ButtonStyled';
import Footer from '../../components/molecules/Footer';
import Header from '../../components/molecules/Header';
import CardCreateHabits from '../../components/molecules/CardCreateHabits';

import { IoMdAdd } from "react-icons/io";

import { Container, Title, Text, ContentTitle } from './styles';
import { UserContext } from '../../Contexts/userContext';
import CardHabits from '../../components/molecules/CardHabits';

function Habits() {
  const [openCardCreateHabits, setOpenCardCreateHabits] = useState(false);


  const { getHabits, habitsUser } = useContext(UserContext);

  useEffect(() => {

    getHabits();
    // eslint-disable-next-line
  }, []);


  return (
    <Container>
      <Header />

      <ContentTitle>
        <Title>Meus hábitos</Title>
        <ButtonStyled
          data-identifier="create-habit-btn"
          type='button'
          w='40px'
          h='35px'
          func={() => setOpenCardCreateHabits(true)}
        >
          <IoMdAdd color='white' />
        </ButtonStyled>
      </ContentTitle>

      {openCardCreateHabits && (
        <CardCreateHabits setOpenCardCreateHabits={setOpenCardCreateHabits} data-identifier="create-habit-btn"/>
      )}

      {Boolean(habitsUser.length) ?
        (habitsUser.map((i) => (
          <CardHabits
            key={i.id}
            id={i.id}
            name={i.name}
            days={i.days}
          />
        )))
        :
        (<Text data-identifier="no-habit-message">
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Text>)
      }


      <Footer />
    </Container>
  )
}

export default Habits;