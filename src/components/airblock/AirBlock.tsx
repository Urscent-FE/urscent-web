import React from 'react';

interface IAirBoxProps {
  height: number;
}

export const AirBlock: React.FC<IAirBoxProps> = ({ height }) => {
  const tempStyle = {
    width: '100%',
    height: `${height}rem`,
    backgroundColor: 'transparent',
    flexShrink: 0,
  };
  return <div style={tempStyle} />;
};
