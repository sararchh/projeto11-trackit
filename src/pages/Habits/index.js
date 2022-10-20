import React from 'react';
import ButtonStyled from '../../components/atoms/ButtonStyled';
import Footer from '../../components/molecules/Footer';
import Header from '../../components/molecules/Header';

import { IoMdAdd } from "react-icons/io";

import { Container, Title, Text, ContentTitle } from './styles';
import CardHabits from '../../components/molecules/CardHabits';

function Habits() {
  return (
    <Container>
      <Header />

      <ContentTitle>
        <Title>Meus hábitos</Title>
        <ButtonStyled w='40px' h='35px'><IoMdAdd color='white' /></ButtonStyled>
      </ContentTitle>
      
      <CardHabits />

      <Text>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </Text>
      <Footer />
    </Container>
  )
}

export default Habits;