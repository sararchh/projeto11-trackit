import React, { useContext } from 'react';
import { UserContext } from '../../../Contexts/userContext';

import { Container } from './styles';

function Header() {
  const { userLogged } = useContext(UserContext);

  return (
    <Container>
      <h1>TrackIt</h1>
      <img src={userLogged.image} alt='imagem do usuario' />
    </Container>
  );
}

export default Header;