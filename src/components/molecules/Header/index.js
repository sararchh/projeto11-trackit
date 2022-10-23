import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  const [userImage, setUserImage] = useState();

  useEffect(() => {
    const image = localStorage.getItem("image");
    setUserImage(image);
  }, [])

  return (
    <Container>
      <h1>TrackIt</h1>
      <Link to='/conta' >
        <img src={userImage} alt='imagem do usuario' data-identifier="habit-page-action"/>
      </Link>
    </Container>
  );
}

export default Header;