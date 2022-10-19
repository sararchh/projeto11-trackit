import React from 'react';

import Footer from '../../components/molecules/Footer';
import Header from '../../components/molecules/Header';

import { Title, Text, Container } from './styles';

function Historic() {
  return (
    <Container>
      <Header />

      <Title>
        Histórico
      </Title>

      <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>

      <Footer />
    </Container>
  )
}

export default Historic;