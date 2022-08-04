import React, { createContext, useState, useEffect } from "react";
import { api } from "../../api";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({})

export function AuthProvider({ children }) {

  const [loadingTreino, setLoadingTreino] = useState(false)
  const [loadingOponente, setLoadingOponente] = useState(false)
  const [versoTreino, setVersoTreino] = useState([])
  const [versoOponente, setVersoOponente] = useState([])
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
      })
  }

  async function ListVersiculoTreino() {
    setLoadingTreino(true)
    await api.get('/api/verses/nvi/random', {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    })
      .then((response) => {
        setVersoTreino(response?.data)
        setLoadingTreino(false)
      })
      .catch((err) => {
        setLoadingTreino(false)
      })
  }

  async function ListVersiculoOponente() {
    setLoadingOponente(true)
    await api.get('/api/verses/nvi/random', {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    })
      .then((response) => {
        setVersoOponente(response?.data)
        setLoadingOponente(false)
      })
      .catch((err) => {
        setLoadingOponente(false)
      })
  }


  return (
    <AuthContext.Provider value={{
      user,
      CreateUser,
      loadingTreino,
      loadingOponente,
      ListVersiculoTreino,
      ListVersiculoOponente,
      versoTreino,
      versoOponente
    }}>
      {children}
    </AuthContext.Provider>
  )
}