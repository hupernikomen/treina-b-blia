import React, { useEffect, useContext } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { AuthContext } from "../Contexts/authContext";
import { useNavigation } from '@react-navigation/native'


export default function Home() {

  const { CreateUser, user } = useContext(AuthContext)
  const navigation = useNavigation()

  useEffect(() => {
    
  },[])

  return (
    <>
      <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={{
          width: '75%',
          alignItems: 'center',
        }}>

          <Text style={{
            fontSize: 30,
            fontWeight: '800',
            marginBottom: 20
          }}>
            "Ache o Texto"
          </Text>

          <Text style={{
            alignItems: 'center',
            fontSize: 14,
            textAlign: 'center'
          }}>
            Ganhe habilidades em encontrar versiculos bíblicos com mais rapidez.

          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Treino')
          }}
          style={{
            marginTop: 40,
            backgroundColor: '#b22',
            paddingVertical: 15,
            paddingHorizontal: 35,
            borderRadius: 6,
            elevation: 5
          }}>
          <Text style={{
            color: '#fff'
          }}>
            Treinar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Disputa')}
          style={{
            marginTop: 20,
            backgroundColor: '#b22',
            paddingVertical: 15,
            paddingHorizontal: 35,
            borderRadius: 6,
            elevation: 5
          }}>
          <Text style={{
            color: '#fff'
          }}>
            Disputa
          </Text>
        </TouchableOpacity>


      </View>
    </>
  );
}