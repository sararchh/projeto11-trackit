import React, { useState } from "react";
import { createContext } from "react";

import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { api } from "../services/api";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  const [progressbar, setProgressbar] = useState();
  const [habitsUser, setHabitsUser] = useState([]);
  const [habitsToday, setHabitsToday] = useState();

  let percentage;
  const createAccountWithMail = async (values) => {
    try {
      const obj = {
        email: values.email,
        name: values.name,
        image: values.image,
        password: values.password
      }

      await api.post('/auth/sign-up', obj);

      setLoading(true);
      setDisabledInput(true);
      setTimeout(() => { setLoading(false) }, 2000);
      setTimeout(() => { setDisabledInput(false) }, 2000);
      setTimeout(() => { navigate('/'); }, 2000);

    } catch (error) {
      setLoading(true);
      toast.error('Erro ao criar conta');
      setTimeout(() => { setLoading(false) }, 2000)
      setDisabledInput(false);
    }
  }

  const signInWithMail = async (values) => {
    try {
      const { data } = await api.post('/auth/login', values);
      setUserLogged(data);

      setLoading(true);
      setDisabledInput(true);
      setTimeout(() => { navigate('hoje'); }, 2000);

    } catch (error) {
      setLoading(true);
      toast.error('Erro ao logar');
      setTimeout(() => { setLoading(false) }, 2000)
      setDisabledInput(false);
    }
  }

  const getHabits = async () => {
    const { data } = await api.get('/habits', { headers: { Authorization: `Bearer ${userLogged.token}` } });

    setHabitsUser(data);
  }

  const listHabitsToday = async () => {
    const { data } = await api.get('/habits/today', { headers: { Authorization: `Bearer ${userLogged.token}` } });

    setHabitsToday(data);
  }

  const calculatePercentage = () => {
    if (habitsToday !== undefined) {

      const qtdHabitsToday = habitsToday.length;
      let soma = 0;

      habitsToday.forEach((i) => {
        if (i.done === true) {
          soma += 1;
        }
      })

      percentage = (soma / qtdHabitsToday) * 100;
    }
  }

  calculatePercentage();
  //TODO chamar funcao em um useffect toda vez que criar um habito novo e no momento de excluir um habito

  return (
    <UserContext.Provider
      value={{
        signInWithMail,
        createAccountWithMail,
        loading,
        userLogged,
        disabledInput,
        progressbar,
        setProgressbar,
        getHabits,
        habitsUser,
        listHabitsToday,
        habitsToday,
        calculatePercentage,
        percentage
      }}>

      {children}
    </UserContext.Provider>
  );
}