import { createContext, useEffect, useState } from 'react';
import { http } from '../api/server';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userToken = localStorage.getItem('token');
    const usersStorage = localStorage.getItem('user');

    if (userToken && usersStorage) {
      setUser(JSON.parse(usersStorage));
    }
  }, []);

  const signin = async (email, password) => {
    const { data } = await http.post('/auth/sign-in', { email, password });
    if (!data) {
      throw new Error('Erro ao cadastrar');
    }

    setUser({
      id: data.id,
      email: data.email,
      name: data.name,
    });

    localStorage.setItem('token', data.token);
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: data.id,
        email: data.email,
        name: data.name,
      }),
    );
  };

  const signup = async (name, phoneNumber, email, password) => {
    const { data } = await http.post('/auth/sign-up', {
      name,
      phoneNumber,
      email,
      password,
    });
    console.log(data);

    if (!data) {
      throw new Error('Erro ao cadastrar');
    }

    setUser({
      id: data.id,
      email: data.email,
      name: data.name,
    });

    localStorage.setItem('token', data.token);
    localStorage.setItem(
      'user',
      JSON.stringify({
        id: data.id,
        email: data.email,
        name: data.name,
      }),
    );
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
