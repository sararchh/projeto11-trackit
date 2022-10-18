import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonStyled from "../../components/atoms/ButtonStyled";
import InputStyled from "../../components/atoms/InputStyled";

import { Container } from '../../styles/commonStyles';
import { Form, ButtonAccount } from './styles'

function Home() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Container>
      <img src="./assets/logo.svg" alt="logo" />

      <Form>
        <InputStyled
          name='email'
          placeholder='email'
          onChange={value => setEmail(value)}
          value={email}
        />

        <InputStyled
          name='password'
          placeholder='senha'
          onChange={value => setPassword(value)}
          value={password}
        />

        <ButtonStyled text='Entrar' />

      </Form>

      <Link to='/cadastro'>
        <ButtonAccount>Não tem uma conta? Cadastre-se!</ButtonAccount>
      </Link>
    </Container>
  );
}

export default Home;
