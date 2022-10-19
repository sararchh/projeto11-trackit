import React from 'react';

import { Button } from './styles';

function ButtonStyled({ children, w = '303px', h = '45px' }) {
  return (
    <Button w={w} h={h} type='submit'>
      {children}
    </Button>
  )
}

export default ButtonStyled;