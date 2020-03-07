import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { Container, Header, TwoColumns } from './styles';

export default function EditPackages() {
  function handleSubmit(/* data */) {}

  return (
    <Form onSubmit={handleSubmit}>
      <Header>
        <h1>Edição de encomendas</h1>

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
        <TwoColumns>
          <div>
            <Input
              name="recipient"
              label="Destinatário"
              placeholder="Digite o destinatário"
            />
          </div>
          <div>
            <Input
              name="deliveryman"
              label="Entregador"
              placeholder="Digite o entregador"
            />
          </div>
        </TwoColumns>
        <Input name="product" label="Produto" placeholder="Digite o produto" />
      </Container>
    </Form>
  );
}
