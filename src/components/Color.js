import React from 'react';

const hexFromColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const hexFromRGB = (rgb) => {
  return `#${hexFromColor(rgb.red)}${hexFromColor(rgb.green)}${hexFromColor(rgb.blue)}`;
};

export default function Color() {
  const name = 'Red';
  const rgb = {
    red: 255,
    green: 0,
    blue: 0
  };
  const hex = hexFromRGB(rgb);
  
  const style = {
    backgroundColor: hex,
    display: 'inline-block',
    width: '5px',
    height: '5px'
  };

  return (
    <dl style={style}>
      <dt>Name:</dt>
      <dd>{name}</dd>

      <dt>Hex:</dt>
      <dd>{hex}</dd>

      <dt>RGB:</dt>
      <dd>
        <p>Red - {rgb.red}</p>
        <p>Green - {rgb.green}</p>
        <p>Blue - {rgb.blue}</p>
      </dd>
    </dl>
  );
}
