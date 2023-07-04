import styled from 'styled-components';

export const Container = styled.div`
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
