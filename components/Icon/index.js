import React from 'react';

const Icon = ({ src = '', size = '25px' }) => (
  <img
    style={{
      height: size,
    }}
    className="icon-component"
    src={src}
  />
);

export default Icon;
