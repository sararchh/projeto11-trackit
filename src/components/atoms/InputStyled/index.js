import React from 'react';

import { Input, Container } from './styles';

function InputStyled({ placeholder, name, value, onChange, messageError, disabled, w = '303px', h = '45px' }) {
  return (
    <Container>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
        w={w}
        h={h}
      />

      {messageError && (
        <span>{messageError}</span>
      )}

    </Container>
  );
}

export default InputStyled;