import styled from 'styled-components';

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
