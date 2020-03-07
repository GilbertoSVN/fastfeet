import React, { useState } from 'react';

import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import Avatar from 'react-avatar';
import {
  Container,
  Commands,
  Input,
  Table,
  Courier,
  Status,
  ToggleMore,
  Options,
} from './styles';

export default function Packages() {
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
      <header>Gerenciando encomendas</header>

      <Commands>
        <Input>
          <MdSearch size={20} color="#ddd" />
          <input type="text" placeholder="Buscar por encomendas" />
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
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <Courier>
                <Avatar name="John Doe" unstyled />
                <p>John Doe</p>
              </Courier>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status>
                <svg />
                Entregue
              </Status>
            </td>
            <td>
              <ToggleMore>
                <buton type="button" onClick={() => handleVisible(1)}>
                  <MdMoreHoriz size={20} color="#666" />
                </buton>
                <Options visible={visible === 1}>
                  <div>
                    <button type="button">
                      <MdVisibility size={14} color="#8E5BE8" />
                      Visualizar
                    </button>
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
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>
              <Courier>
                <Avatar name="John Doe" unstyled />
                <p>John Doe</p>
              </Courier>
            </td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>
              <Status>
                <svg />
                Entregue
              </Status>
            </td>
            <td>
              <ToggleMore>
                <buton type="button" onClick={() => handleVisible(2)}>
                  <MdMoreHoriz size={20} color="#666" />
                </buton>
                <Options visible={visible === 2}>
                  <div>
                    <button type="button">
                      <MdVisibility size={14} color="#8E5BE8" />
                      Visualizar
                    </button>
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
