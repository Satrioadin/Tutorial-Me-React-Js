import React from "react";
import PropsTypes from "prop-types";

const Link = ({ target, navigate, children }) => {
  return (
    <a
      href={target}
      onClick={(event) => {
        event.preventDefault();
        navigate(target);
      }}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  target: PropsTypes.string.isRequired,
  navigate: PropsTypes.func.isRequired,
  children: PropsTypes.object.isRequired,
};

export default Link;
