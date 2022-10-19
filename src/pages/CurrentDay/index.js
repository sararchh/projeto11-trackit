import React from 'react';
import Footer from '../../components/molecules/Footer';
import Header from '../../components/molecules/Header';

import { Container } from '../../styles/commonStyles';

// import { Container } from './styles';

function CurrentDay() {
  return (
    <Container>
      <Header />
      <Footer/>
    </Container>
  )
}

export default CurrentDay;