import React from 'react';
import Header from '../../components/molecules/Header';
import Footer from '../../components/molecules/Footer';

import { Container } from '../../styles/commonStyles';
import { Button } from './styles';
import { useNavigate } from 'react-router-dom';

function UserAccount() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  }

  return (
    <Container>
      <Header />
      <Button onClick={handleLogOut}>DESLOGAR</Button>
      <Footer />
    </Container>
  )
}

export default UserAccount;