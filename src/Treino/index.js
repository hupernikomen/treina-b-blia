import React, { useEffect, useState, useContext } from "react";

import { AuthContext } from "../Contexts/authContext";

import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

import { api } from "../../api";

export default function Treino(props) {

  const navigation = useNavigation()
  const { user } = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  const [versiculo, setVersiculo] = useState([])

  const [time, setTime] = useState(0)
  const [times, setTimes] = useState([])


  useEffect(() => {
    ListVersiculo()

    // const interval = setInterval(() => {
    //   setTime(time => time + 1)
    // }, 1000);

    // return () => clearInterval(interval);

  }, [])



  function Loading() {
    return (
      <View style={{
        rotation: props.rotacao && 180,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>


        <ActivityIndicator color={'#b22'} size={30} />

        <Text style={{
          marginTop: 20,
          fontSize: 20,
          fontWeight: 'bold'
        }}>Abra sua bíblia em...</Text>

      </View>
    )
  }

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => {
        try {
          return (

            <Text>
              {(times.reduce((soma, valor) => {
                return ((soma += valor) / (times.length - 1))
              })
              )}
            </Text>
          )
        } catch (error) {
          return (

            <Text>
              0
            </Text>
          )

        }
      }
    })

  }, [times])


  async function ListVersiculo() {
    setLoading(true)
    await api.get('/api/verses/nvi/random', {
      headers: {
        Authorization: `Bearer ${user?.token}`
      }
    })
      .then((response) => {

        setVersiculo(response?.data)
        setLoading(false)
      })
      .catch((err) => {
      })
  }



  function RegisterMedia(time) {

    setTimes([...times, time])
    setTime(0)

  }


  return (
    <>
      <StatusBar backgroundColor={'#b22'} barStyle='light-content' hidden={props.disputa} />

      {loading ? <Loading /> :

        <TouchableOpacity
          style={{
            rotation: props.rotacao && 180,
            flex: 1,
            padding: 14,
            alignItems: 'center',
            justifyContent: props.disputa ? 'flex-end' : 'center',
            paddingBottom: props.disputa ? 25 : 0,
          }}
          onPress={() => {
            !loading && ListVersiculo()
          }}>


          <View style={{
            width: '95%',
          }}>


            <View style={{
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: 20
            }}>


              <View style={{
                alignItems: 'flex-start',
              }}>

                <Text style={{ color: '#777' }}>
                  livro
                </Text>

                <Text style={{ fontSize: 28, fontWeight: '800', }}>
                  {versiculo?.book?.name}
                </Text>
              </View>

              <View style={{ alignItems: 'flex-end', }}>
                <Text style={{
                  color: '#777'
                }}>
                  capitulo
                </Text>

                <Text style={{
                  fontSize: 28, fontWeight: '800',
                }}>
                  {versiculo?.chapter}
                </Text>
              </View>
            </View>


            <View>
              <Text>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>{versiculo?.number}_
                </Text>
                <Text style={{
                  color: '#777'
                }}>
                  {versiculo?.text}
                </Text>
              </Text>
            </View>

          </View>




        </TouchableOpacity>
      }
    </>
  )
}