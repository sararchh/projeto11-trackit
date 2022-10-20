import React, { useContext, useEffect, useState } from 'react';

import ButtonStyled from '../../components/atoms/ButtonStyled';
import Footer from '../../components/molecules/Footer';
import Header from '../../components/molecules/Header';
import CardCreateHabits from '../../components/molecules/CardCreateHabits';

import { api } from '../../services/api';

import { IoMdAdd } from "react-icons/io";

import { Container, Title, Text, ContentTitle } from './styles';
import { UserContext } from '../../Contexts/userContext';

function Habits() {
  const [openCardCreateHabits, setOpenCardCreateHabits] = useState(false);
  const [habitsUser, setHabitsUser] = useState([{}]);

  const { userLogged } = useContext(UserContext);

  useEffect(() => {

    // TODO Ao salvar chamar a funcao
    getHabits();

    // eslint-disable-next-line
  }, []);

  const getHabits = async () => {
    const { data } = await api.get('/habits', { headers: { Authorization: `Bearer ${userLogged.token}` } });

    setHabitsUser(data);
  }
  console.log('habitsUser', habitsUser);

  return (
    <Container>
      <Header />

      <ContentTitle>
        <Title>Meus hábitos</Title>
        <ButtonStyled
          type='button'
          w='40px'
          h='35px'
          func={() => setOpenCardCreateHabits(true)}
        >
          <IoMdAdd color='white' />
        </ButtonStyled>
      </ContentTitle>

      {openCardCreateHabits && (
        <CardCreateHabits setOpenCardCreateHabits={setOpenCardCreateHabits} />
      )}

      {habitsUser.length > 1 ?
        (habitsUser.map((i)=>(
          <p>{i.name}</p>
        )))
        :
        (<Text>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </Text>)
      }


      <Footer />
    </Container>
  )
}

export default Habits;