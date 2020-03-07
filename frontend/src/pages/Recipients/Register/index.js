import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { Container, Header, TwoColumns, ThreeColumns } from './styles';

export default function RegisterRecipients() {
  function handleSubmit(/* data */) {}

  return (
    <Form onSubmit={handleSubmit}>
      <Header>
        <h1>Cadastro de destinatário</h1>

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
        <Input name="name" label="Nome" placeholder="Digite o nome" />
        <TwoColumns>
          <div>
            <Input name="street" label="Rua" placeholder="Digite a rua" />
          </div>
          <div>
            <TwoColumns>
              <div>
                <Input
                  name="number"
                  label="Número"
                  placeholder="Digite o número"
                />
              </div>
              <div>
                <Input
                  name="complement"
                  label="Complemento"
                  placeholder="Digite o complemento"
                />
              </div>
            </TwoColumns>
          </div>
        </TwoColumns>
        <ThreeColumns>
          <div>
            <Input name="city" label="Cidade" placeholder="Digite a cidade" />
          </div>
          <div>
            <Input name="state" label="Estado" placeholder="Digite o estado" />
          </div>
          <div>
            <Input name="zipcode" label="CEP" placeholder="Digite o CEP" />
          </div>
        </ThreeColumns>
      </Container>
    </Form>
  );
}
