import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
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

export const Header = styled.header`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: center;
  margin-top: 32px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};
  padding-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    transition: all .2s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }

`;

export const ListHeader = styled.header`
  margin-top: 24px;
  margin-bottom: 8px;

  button {
  display: flex;
  align-items: center;
  border: none;
  background: transparent;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      margin-right: 8px;
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: all .2s ease-in;
    }

  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        margin-left: 8px;
        padding: 4px;
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 4px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray['200']};
      margin-top: 4px;
    }
  }



  .actions {
    display: flex;
    align-items: center;

    button {
      background-color: transparent;
      border: none;
      margin-left: 8px;

    }
  }

  & + & {
    margin-top: 16px;
  }

`;

export const ErrorContainer = styled.div`
  color: ${({ theme }) => theme.colors.danger.main};
  display: flex;
  margin-top: 16px;
  align-items: center;

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 24px;
  }

  img {
    width: 84px;
    height: 84px;
  }

  strong {
    font-size: 22px;
  }

  button {
    margin-top: 8px;
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;

  img {
    width: 110px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};
    text-align: center;
    margin-top: 8px;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

`;

export const EmptyListAfterSearch = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: flex-start;

  img {
    width: 50px;
    margin-right: 24px;
  }

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;
