import React from 'react';

import { Button } from './styles';

function ButtonDay({ day, handleClickDay, daySelected }) {

  return (
    <Button
      type='button'
      onClick={handleClickDay}
      daySelected={daySelected}
    >

      {day}
    </Button>
  )
}

export default ButtonDay;