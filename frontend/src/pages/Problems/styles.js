import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  padding: 40px 80px;
  margin: 0 auto;
  flex-direction: column;

  header {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;

export const Commands = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 20px;

  button {
    display: flex;
    align-items: center;
    background: #7d40e7;
    border: 0;
    border-radius: 4px;
    padding: 5px 10px;
    color: #fff;
    font-weight: bold;
    font-size: 14px;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  align-items: center;

  input {
    border: 1px solid #ddd;
    padding: 5px 10px 5px 25px;
    font-size: 12px;
    line-height: 20px;
    transition: border 0.2s;

    &:focus {
      border: 1px solid ${darken(0.08, '#ddd')};
    }
  }

  svg {
    position: absolute;
    margin-left: 5px;
  }
`;

export const Table = styled.table`
  text-align: left;
  border-collapse: separate;
  border-spacing: 0 20px;

  th {
    padding: 0 20px;
  }

  th:last-child {
    text-align: right;
  }

  td {
    border-radius: 4px;
    height: 58px;
    padding: 10px 20px;
    background: #fff;
    border: 0;
    color: #666;
  }

  td:last-child {
    text-align: right;
  }
`;

export const Courier = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    margin-left: 8px;
  }

  img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
  }

  div {
    height: 36px;
    width: 36px;
    border-radius: 100%;

    > div {
      background: #7159c1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #eee;
    }
  }
`;

export const ToggleMore = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 180px;
  top: calc(100% + 4px);
  left: calc(100% - 92px);
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${props => (props.visible ? 'block' : 'none')};
  border: 1px solid #ddd;
  z-index: 99;

  &::before {
    content: '';
    position: absolute;
    left: 68px;
    top: -12px;
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid rgba(221, 221, 221, 0.6);
  }

  &::after {
    content: '';
    position: absolute;
    left: 70px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }

  > div {
    display: flex;
    flex-direction: column;

    button {
      display: flex;
      background: none;
      border: 0;
      margin: 0 8px;
      color: #666;
      align-items: center;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.16, '#666')};
      }

      svg {
        margin-right: 4px;
      }
    }

    button + button {
      padding-top: 6px;
    }

    button:not(:last-child) {
      border-bottom: 1px solid #ddd;
      margin-bottom: 4px;
      padding-bottom: 6px;
    }
  }
`;
