import React, {
  useState,
  useEffect,
  useImperativeHandle,
  Fragment,
} from "react";
import PropTypes from "prop-types";
import { throttle } from "lodash";
const ScrollReveal = React.forwardRef((props, ref) => {
  //const [viewportHeight, setViewportheight] = useState(window.innerHeight);
  //const [revealEl, setRevealel] = useState([]);

  return <Fragment>{props.children()}</Fragment>;
});

ScrollReveal.propTypes = {
  children: PropTypes.func.isRequired,
};

export default ScrollReveal;
