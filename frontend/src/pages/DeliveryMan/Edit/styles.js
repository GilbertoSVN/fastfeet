import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px 30px;
  margin-top: 10px;
  border-radius: 4px;

  label {
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    background: rgba(255, 255, 255, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #333;
    margin: 0 0 10px;
    border: 1px solid #ddd;

    &::placeholder {
      color: rgba(123, 123, 123, 0.8);
    }
  }

  input + label {
    margin-top: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: 40px auto 0;
  padding: 20px 0;
  font-size: 14px;

  div {
    display: flex;

    button {
      display: flex;
      align-items: center;
      padding: 5px 12px;
      border-radius: 4px;
      border: 0;
      color: #fff;
      font-weight: bold;

      svg {
        margin-right: 4px;
      }
    }

    .back {
      background: #ccc;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#ccc')};
      }

      margin-right: 10px;
    }

    .save {
      background: #7d40e7;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7D40E7')};
      }
    }
  }
`;
