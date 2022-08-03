import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/authContext";

import { View, Text, TextInput, Pressable, Linking, ActivityIndicator, StatusBar } from 'react-native'

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {

  const navigation = useNavigation()

  const { CreateUser, user } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isFilled, setIsFilled] = useState(false)

  useEffect(() => {

    email && password ? setIsFilled(true) : setIsFilled(false)
  }, [email, password])

  async function logar() {
    // await signIn({ email, password })
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

      <StatusBar backgroundColor={'#fff'} barStyle='dark-content' translucent={false} />

      {!user &&
        <TextInput
          onChangeText={setName}
          value={name}
          placeholder="Seu Nome"
          placeholderTextColor={'#222'}
          style={{
            color: '#222',
            height: 45,
            borderRadius: 45 / 2,
            margin: 4,
            width: '85%',
            backgroundColor: '#fff',
            paddingHorizontal: 20
          }} />
      }

      <TextInput
        onChangeText={setEmail}
        value={email}
        keyboardType='email-address'
        placeholder="E-mail"
        placeholderTextColor={'#222'}
        style={{
          color: '#222',
          height: 45,
          borderRadius: 45 / 2,
          margin: 4,
          width: '85%',
          backgroundColor: '#fff',
          paddingHorizontal: 20
        }} />

      <TextInput
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Senha"
        placeholderTextColor={'#222'}
        style={{
          color: '#222',
          height: 45,
          borderRadius: 45 / 2,
          margin: 4,
          width: '85%',
          backgroundColor: '#fff',
          paddingHorizontal: 20
        }} />
      <View
        style={{
          flexDirection: 'row',
          width: '85%'
        }}>

        <Pressable
          onPress={() => CreateUser(name, email, password)}
          style={{
            height: 45,
            flex: 1,
            borderRadius: 45 / 2,
            marginTop: 4,
            marginRight: 4,
            backgroundColor: isFilled ? '#222' : '#fff',
            justifyContent: 'center',
            flexDirection: 'row',
            elevation: isFilled ? 5 : 0
          }}>


          <Text style={{
            color: isFilled ? '#fff' : '#222',
            alignSelf: 'center'
          }}>
            Criar Conta
          </Text>

        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: 45,
            paddingHorizontal: 30,
            borderRadius: 45 / 2,
            marginTop: 4,
            marginLeft: 4,
            backgroundColor: '#792a2a',
            justifyContent: 'center',
            flexDirection: 'row',
            elevation: 5
          }}>

          <Text style={{
            color: '#fff',
            alignSelf: 'center'
          }}>
            Sair
          </Text>

        </Pressable>
      </View>


    </View>
  )
}