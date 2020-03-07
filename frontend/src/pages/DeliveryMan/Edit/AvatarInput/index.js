import React from 'react';

import { Container } from './styles';

export default function AvatarInput() {
  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src="https://api.adorable.io/avatars/100/abott@adorable.png"
          alt=""
        />

        <input type="file" name="" id="avatar" accept="image/*" />
      </label>
    </Container>
  );
}
