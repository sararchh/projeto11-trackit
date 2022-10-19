import React from 'react';

import { Container } from './styles';

import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import { Link } from 'react-router-dom';

function Footer() {
  const percentage = 66;

  return (
    <Container>
      <Link to='/habitos'>
        <p>Hábitos</p>
      </Link>

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

      <Link to='/historico'>
        <p>Histórico</p>
      </Link>

    </Container>
  )
}

export default Footer;