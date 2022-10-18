import React from 'react';

import { Input } from './styles';

function InputStyled({ placeholder, name, value, onChange }) {
  return (
    <Input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      
    />
  );
}

export default InputStyled;