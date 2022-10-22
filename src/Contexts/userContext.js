import React, { useEffect, useState } from "react";
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
      setTimeout(() => { setLoading(false) }, 2000);

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
    listHabitsToday();
  }

  const listHabitsToday = async () => {
    const { data } = await api.get('/habits/today', { headers: { Authorization: `Bearer ${userLogged.token}` } });

    setHabitsToday(data);
  }

  let percentage;
  const calculatePercentage = () => {
    if (habitsToday !== undefined && habitsToday.length > 0) {

      const qtdHabitsToday = habitsToday.length;
      let soma = 0;

      habitsToday.forEach((i) => {
        if (i.done === true) {
          soma += 1;
        }
      })

      percentage = (soma / qtdHabitsToday) * 100;
      percentage = percentage.toFixed(0)
    }
  }

  calculatePercentage();
  //TODO nao posso chamar essa funcao avulsa;
  //Adicionar o token no local storage

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