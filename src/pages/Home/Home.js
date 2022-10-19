import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ButtonStyled from "../../components/atoms/ButtonStyled";
import InputStyled from "../../components/atoms/InputStyled";

import { Container } from '../../styles/commonStyles';
import { Form, ButtonAccount } from './styles';

import { useForm } from 'react-hook-form'; //gerencia formulario
import { yupResolver } from '@hookform/resolvers/yup'; //validador para Yup
import * as Yup from 'yup'; //valida os campos e seu tipos
import { UserContext } from "../../Contexts/userContext";
import { ThreeDots } from "react-loader-spinner";

function Home() {

  const { signInWithMail, loading, disabledInput } = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Digite e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').required('Senha obrigatório')
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleLogin = () => {
    
    const values = getValues();

    signInWithMail(values);
  }

  return (
    <Container>
      <img src="./assets/logo.svg" alt="logo" />

      <Form onSubmit={handleSubmit(handleLogin)}>
        <InputStyled
          name='email'
          placeholder='email'
          onChange={value => setValue('email', value)}
          messageError={errors?.email?.message}
          disabled={disabledInput}
        />

        <InputStyled
          name='password'
          placeholder='senha'
          onChange={value => setValue('password', value)}
          messageError={errors?.password?.message}
          disabled={disabledInput}
        />

        <ButtonStyled >
          {loading ?
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
            :
            <p>Entrar</p>
          }
        </ButtonStyled>

      </Form>

      <Link to='/cadastro'>
        <ButtonAccount>Não tem uma conta? Cadastre-se!</ButtonAccount>
      </Link>
    </Container>
  );
}

export default Home;
