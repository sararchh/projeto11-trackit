import React, { useContext, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { api } from '../../../services/api';
import { UserContext } from '../../../Contexts/userContext';

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";

import { Container } from './styles';

function Footer() {
  const { listHabitsToday, habitsToday } = useContext(UserContext);

  useEffect(() => {
    listHabitsToday();
    // eslint-disable-next-line
  }, []);

  const percentage = 66;

  return (
    <Container>
      <Link to='/habitos'>
        <p>Hábitos</p>
      </Link>

      <Link to='/hoje'>
        <CircularProgressbar
          value={percentage}
          text='Hoje'
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
          })}
        />
      </Link>

      <Link to='/historico'>
        <p>Histórico</p>
      </Link>

    </Container>
  )
}

export default Footer;