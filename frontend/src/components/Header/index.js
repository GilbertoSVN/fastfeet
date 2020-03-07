import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/dashboard">ENCOMENDAS</Link>
          <Link to="/dashboard">ENTREGADORES</Link>
          <Link to="/dashboard">DESTINATÁRIOS</Link>
          <Link to="/dashboard">PROBLEMAS</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Admin FastFeet</strong>
              <Link to="/profile">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
