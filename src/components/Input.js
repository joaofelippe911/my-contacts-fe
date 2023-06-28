import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  padding: 0 16px;
  height: 52px;
  font-size: 16px;
  border: 2px solid #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  transition: border-color .2s ease-in;
  appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray['200']};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main} !important;
    color: ${theme.colors.danger.main};
  `}

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
