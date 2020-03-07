import React, { useState } from 'react';

import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdVisibility,
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

export default function Problems() {
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
      <header>Problemas na entrega</header>

      <Commands>
        <Input>
          <MdSearch size={20} color="#ddd" />
          <input type="text" placeholder="Buscar por entregadores" />
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
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Deu ruim na entrega patrão</td>
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
                      <MdDeleteForever size={14} color="#DE3B3B" />
                      Cancelar encomenda
                    </button>
                  </div>
                </Options>
              </ToggleMore>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Deu ruim na entrega patrão</td>
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
                      <MdDeleteForever size={14} color="#DE3B3B" />
                      Cancelar encomenda
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
