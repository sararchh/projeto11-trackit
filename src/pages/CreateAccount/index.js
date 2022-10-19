import React, { useContext } from "react";
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

function CreateAccount() {

  const { createAccountWithMail, disabledInput, loading } = useContext(UserContext);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Digite e-mail válido').required('O e-mail é obrigatório'),
    password: Yup.string().min(6, 'Minimo 6 caracteres').required('Senha obrigatório'),
    name: Yup.string().required('Nome obrigatório'),
    image: Yup.string().required('Foto obrigatório')
  });

  const formOptions = { resolver: yupResolver(validationSchema) }

  const { handleSubmit, setValue, getValues, formState } = useForm(formOptions);
  const { errors } = formState;

  const handleCreateAccount = () => {
    const values = getValues();

    createAccountWithMail(values);
    // setError('email', { type: 'manual', message: 'Email erro' })
  }

  return (
    <Container>
      <img src="./assets/logo.svg" alt="logo" />

      <Form onSubmit={handleSubmit(handleCreateAccount)}>
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

        <InputStyled
          name='name'
          placeholder='name'
          onChange={value => setValue('name', value)}
          messageError={errors?.name?.message}
          disabled={disabledInput}
        />

        <InputStyled
          name='image'
          placeholder='foto'
          onChange={value => setValue('image', value)}
          messageError={errors?.image?.message}
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
            <p>Cadastrar</p>
          }
        </ButtonStyled>

      </Form>

      <Link to='/'>
        <ButtonAccount>Já tem uma conta? Faça login!</ButtonAccount>
      </Link>

    </Container>
  );
}

export default CreateAccount;
