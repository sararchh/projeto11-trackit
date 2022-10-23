import React, { useContext, useEffect } from 'react';
import CardHabitsToday from '../../components/molecules/CardHabitsToday';
import Footer from '../../components/molecules/Footer';
import Header from '../../components/molecules/Header';
import { UserContext } from '../../Contexts/userContext';
import { daysWeek } from '../../utils/arrays';

import { ContentTitle, Container, Title } from './styles';

function CurrentDay() {

  const { listHabitsToday, habitsToday, percentage } = useContext(UserContext);

  useEffect(() => {

    listHabitsToday();
    // eslint-disable-next-line
  }, []);

  const date = new Intl.DateTimeFormat(['ban', 'id']).format(new Date());
  const today = date.split('/');

  const weekday = new Intl.DateTimeFormat([], { timezone: 'America/Sao_Paulo', weekday: 'short' }).format(new Date());

  return (
    <Container>
      <Header />

      <ContentTitle>
        <Title data-identifier="today-infos">{daysWeek[weekday]}, {today[0]}/{today[1]}</Title>

        {percentage == 0 || percentage === undefined ?
          <p> Nenhum hábito concluído ainda</p>
          :
          <p className='colorTextPercentage' data-identifier="today-infos"> {percentage}% dos hábitos concluídos</p>
        }
      </ContentTitle>

      <div>
        {habitsToday !== undefined && habitsToday.map((i) => (
          <CardHabitsToday
            key={i.id}
            currentSequence={i.currentSequence}
            done={i.done}
            highestSequence={i.highestSequence}
            id={i.id}
            name={i.name}
          />
        ))}
      </div>

      <Footer />
    </Container>
  )
}

export default CurrentDay;