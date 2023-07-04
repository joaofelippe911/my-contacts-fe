import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  input {
    width: 100%;
    border: 2px solid #fff;
    background-color: #fff;
    border-radius: 25px;
    height: 50px;
    font-size: 16px;
    padding: 0 16px;
    outline: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    transition: border-color .2s ease-in;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray['200']};
    }

    :focus {
      border-color: ${({ theme }) => theme.colors.primary.main};
    }

  }
`;
