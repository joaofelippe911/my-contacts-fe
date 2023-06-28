import PropTypes from 'prop-types';

import Spinner from '../Spinner';
import { StyledButton } from './styles';

export default function Button({
  type, isLoading, children, disabled, danger, onClick,
}) {
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
      onClick={onClick}
    >
      {!isLoading && children}
      {isLoading && <Spinner size={16} />}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  isLoading: false,
  disabled: false,
  danger: false,
  onClick: undefined,
};
