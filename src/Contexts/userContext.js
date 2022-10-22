import React, { useEffect, useState } from "react";
import { createContext } from "react";

import { useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import api  from "../services/api";
import { authRoutes } from "../utils/arrays";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [fallBackLoading, setFallBackLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [disabledInput, setDisabledInput] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  const [habitsUser, setHabitsUser] = useState([]);
  const [habitsToday, setHabitsToday] = useState();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    calculatePercentage();
    // eslint-disable-next-line
  }, [habitsToday]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && authRoutes.includes(location.pathname)) {
      navigate('/', { replace: true });
    }
    setTimeout(() => { setFallBackLoading(false) }, 800);
    // eslint-disable-next-line
  }, [])

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
      localStorage.setItem("token", data.token);
      localStorage.setItem("image", data.image);

      setLoading(true);
      setDisabledInput(true);
      setTimeout(() => { navigate('hoje'); }, 2000);
      setTimeout(() => { setLoading(false) }, 2000);
      setDisabledInput(false);

    } catch (error) {
      setLoading(true);
      toast.error('Erro ao logar');
      setTimeout(() => { setLoading(false) }, 2000)
      setDisabledInput(false);
    }
  }

  const getHabits = async () => {
    const { data } = await api.get('/habits');

    setHabitsUser(data);
    listHabitsToday();
  }

  const listHabitsToday = async () => {
    const { data } = await api.get('/habits/today');

    setHabitsToday(data);
  }

  const calculatePercentage = () => {
    if (habitsToday !== undefined && habitsToday.length > 0) {

      const qtdHabitsToday = habitsToday.length;
      let soma = 0;

      habitsToday.forEach((i) => {
        if (i.done === true) {
          soma += 1;
        }
      })

      let percent = ((soma / qtdHabitsToday) * 100).toFixed(0);
      setPercentage(percent);
    }
  }

  return (
    <UserContext.Provider
      value={{
        signInWithMail,
        createAccountWithMail,
        loading,
        userLogged,
        disabledInput,
        getHabits,
        habitsUser,
        listHabitsToday,
        habitsToday,
        calculatePercentage,
        percentage
      }}>
      {fallBackLoading && <div />}
      {!fallBackLoading && children}
    </UserContext.Provider>
  );
}