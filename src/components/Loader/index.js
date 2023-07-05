import PropTypes from 'prop-types';

import { Overlay } from './styles';
import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

export default function Loader({ isLoading }) {
  const { shouldRender, elementRef: overlayRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay ref={overlayRef} isLeaving={!isLoading}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
