import React, { useState } from 'react';

import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import {
  Container,
  Commands,
  Input,
  Table,
  ToggleMore,
  Options,
} from './styles';

export default function Recipients() {
  const [visible, setVisible] = useState(null);

  function handleVisible(id) {
    if (id === visible) {
      setVisible(null);
    } else {
      setVisible(id);
    }
  }

  return (
    <Container>
      <header>Gerenciando destinatários</header>

      <Commands>
        <Input>
          <MdSearch size={20} color="#ddd" />
          <input type="text" placeholder="Buscar por destinatários" />
        </Input>
        <button type="button">
          <MdAdd size={20} color="#fff" />
          CADASTRAR
        </button>
      </Commands>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>John Doe</td>
            <td>Rua Treze da Rua Doze</td>
            <td>
              <ToggleMore>
                <buton type="button" onClick={() => handleVisible(1)}>
                  <MdMoreHoriz size={20} color="#666" />
                </buton>
                <Options visible={visible === 1}>
                  <div>
                    <button type="button">
                      <MdModeEdit size={14} color="#4D85EE" />
                      Editar
                    </button>
                    <button type="button">
                      <MdDeleteForever size={14} color="#DE3B3B" />
                      Excluir
                    </button>
                  </div>
                </Options>
              </ToggleMore>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>John Doe</td>
            <td>Rua Treze da Rua Doze</td>
            <td>
              <ToggleMore>
                <buton type="button" onClick={() => handleVisible(2)}>
                  <MdMoreHoriz size={20} color="#666" />
                </buton>
                <Options visible={visible === 2}>
                  <div>
                    <button type="button">
                      <MdModeEdit size={14} color="#4D85EE" />
                      Editar
                    </button>
                    <button type="button">
                      <MdDeleteForever size={14} color="#DE3B3B" />
                      Excluir
                    </button>
                  </div>
                </Options>
              </ToggleMore>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
