import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: #fff;
  padding: 0 16px;
  font-weight: bold;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  height: 52px;
  text-align: center;
  border: none;
  font-size: 16px;
  transition: background .2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #CCC !important;
    cursor: default !important;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};
    color: #fff;

    &:hover {
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.dark};
    }
  `}
`;
