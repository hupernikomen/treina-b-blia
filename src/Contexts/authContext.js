import React, { createContext, useState, useEffect } from "react";
import { api } from "../../api";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

  const [user, setUser] = useState({})

  useEffect(() => {
    HandleUser()
  }, [])


  async function CreateUser(name, email, password) {
    await api.post('/api/users',
      {
        name,
        email,
        password,
        "notifications": false // receive update emails from www.abibliadigital.com.br
      },
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    )
  }

 // esses dados tem que vir do Async Storage
  async function HandleUser() {
    await api.put('/api/users/token',
      {
        email: "hupcontato@gmail.com",
        password: "hpB422354"
      }
    )
    .then((response) => {
      setUser(response.data);
    })
    .catch((err) => {
      console.log('erro');
      setUser(false)
    })
  }


  return (
    <AuthContext.Provider value={{
      user,
      CreateUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}