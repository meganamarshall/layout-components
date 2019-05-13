import React from 'react';

export default function Color() {
  const color = {
    name: 'red',
    hex: 'F00',
    rgb: '255,0,0'
  };

  return (
    <dl>
      <dt>Name:</dt>
      <dd>{color.name}</dd>

      <dt>Hex:</dt>
      <dd>{color.hex}</dd>

      <dt>RGB:</dt>
      <dd>{color.rgb}</dd>
    </dl>
  );
}
