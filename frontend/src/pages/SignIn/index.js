import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { signInRequest } from '~/store/modules/auth/actions';

import { Container } from './styles';

import logo from '~/assets/fastfeet-logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No mínimo 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignIn() {
  // const dispatch = useDispatch();

  const loading = false; // useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    //  dispatch(signInRequest(email, password));
  }

  return (
    <>
      <Container>
        <Form schema={schema} onSubmit={handleSubmit}>
          <img src={logo} alt="Fastfeet" />
          <Input
            name="email"
            label="SEU EMAIL"
            type="email"
            placeholder="Seu e-mail"
          />
          <Input
            name="password"
            label="SUA SENHA"
            type="password"
            placeholder="Sua senha secreta"
          />

          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Container>
    </>
  );
}
