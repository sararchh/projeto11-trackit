import React from 'react';

import { Button } from './styles';

function ButtonStyled({ text, w = '303px', h = '45px' }) {
  return (
    <Button w={w} h={h} type='submit'>{text}</Button>
  )
}

export default ButtonStyled;