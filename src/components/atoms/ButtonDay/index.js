import React from 'react';

import { Button } from './styles';

function ButtonDay({ day, func, daySelected }) {

  return (
    <Button
      type='button'
      onClick={func}
      daySelected={daySelected}
    >

      {day}
    </Button>
  )
}

export default ButtonDay;