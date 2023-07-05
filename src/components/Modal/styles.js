import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3.5px);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} .3s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${fadeOut} .2s forwards;
  `}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 24px;
  animation: ${scaleIn} .3s;

  ${({ isLeaving }) => isLeaving && css`
    animation: ${scaleOut} .2s forwards;
  `}

  > h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
  }

  .cancel-button {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.gray['200']};
    cursor: pointer;
    margin-right: 24px;
    font-size: 16px;

    &[disabled] {
      cursor: default;
    }
  }

  .modal-body {
    margin-top: 32px;
  }
`;

export const Footer = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
