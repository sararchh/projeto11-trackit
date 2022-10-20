import React from 'react';

import { Button } from './styles';

function ButtonStyled({ children, w = '303px', h = '45px', func }) {
  return (
    <Button
      w={w}
      h={h}
      type='submit'
      onClick={func}
    >
      {children}
    </Button>
  )
}

export default ButtonStyled;