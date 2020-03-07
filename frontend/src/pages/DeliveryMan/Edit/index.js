import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import AvatarInput from './AvatarInput';

import { Container, Header } from './styles';

export default function EditDeliveryMan() {
  function handleSubmit(/* data */) {}

  return (
    <Form onSubmit={handleSubmit}>
      <Header>
        <h1>Edição de entregadores</h1>

        <div>
          <button className="back" type="button">
            <MdChevronLeft size={22} color="#fff" />
            VOLTAR
          </button>
          <button className="save" type="submit">
            <MdCheck size={22} color="#fff" />
            SALVAR
          </button>
        </div>
      </Header>

      <Container>
        <AvatarInput name="avatar_id" />
        <Input name="name" label="Nome" placeholder="Nome completo" />
        <Input
          name="email"
          label="Email"
          type="email"
          placeholder="Seu endereço de e-mail"
        />
      </Container>
    </Form>
  );
}
