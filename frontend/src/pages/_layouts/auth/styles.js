import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 380px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    img {
      margin-bottom: 40px;
      align-self: center;
    }

    label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      align-self: flex-start;
    }

    input {
      background: #fff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #000;
      margin: 0 0 20px;

      &::placeholder {
        color: #666;
      }

      &:focus {
        border: 1px solid #999;
      }
    }

    button {
      margin: 5px o o;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }
  }
`;
