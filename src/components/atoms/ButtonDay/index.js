import React from 'react';

import { Button } from './styles';

function ButtonDay({ day, func, daySelected }) {

  return (
    <Button
    data-identifier="week-day-btn"
      type='button'
      onClick={func}
      daySelected={daySelected}
    >

      {day}
    </Button>
  )
}

export default ButtonDay;