import React from 'react';

import { Input } from './styles';

function InputStyled({ placeholder, name, value, onChange, messageError, disabled }) {
  return (
    <>
      <Input
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      />

      {messageError && (
        <span>{messageError}</span>
      )}

    </>
  );
}

export default InputStyled;