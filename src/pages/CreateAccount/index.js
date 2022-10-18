import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonStyled from "../../components/atoms/ButtonStyled";
import InputStyled from "../../components/atoms/InputStyled";

import { Container } from '../../styles/commonStyles';
import { Form, ButtonAccount } from './styles'

function CreateAccount() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [photograph, setPhotograph] = useState();

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

        <InputStyled
          name='nome'
          placeholder='name'
          onChange={value => setName(value)}
          value={name}
        />

        <InputStyled
          name='photograph'
          placeholder='foto'
          onChange={value => setPhotograph(value)}
          value={photograph}
        />

        <ButtonStyled text='Cadastrar' />

      </Form>

      <Link to='/'>
        <ButtonAccount>Já tem uma conta? Faça login!</ButtonAccount>
      </Link>

    </Container>
  );
}

export default CreateAccount;
