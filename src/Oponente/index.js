import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";

import { AuthContext } from "../Contexts/authContext";
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { api } from "../../api";

export default function Oponente(props) {

  const { loadingOponente, ListVersiculoOponente, versoOponente } = useContext(AuthContext)

  const [versiculo, setVersiculo] = useState([])

  useEffect(() => {
    ListVersiculoOponente()

  }, [])


  return (
    <>

      {loadingOponente ? <ActivityIndicator style={{ flex: 1 }} color={'#222'} size={30} /> :

        <TouchableOpacity
          style={{
            rotation: props.rotacao && 180,
            flex: 1,
            paddingHorizontal: 14,
            alignItems: 'center',
            justifyContent: props.disputa ? 'flex-end' : 'center',
            paddingBottom: props.disputa ? 25 : 0,
          }}
          onPress={() => !loadingOponente && ListVersiculoOponente()}>

          <View style={{
            position: 'absolute',
            top: 1,
            backgroundColor: '#b22',
            width: 100,
            paddingVertical: 8,
            alignItems: 'center',
            borderBottomEndRadius: 20,
            borderBottomLeftRadius: 20,
            elevation: 5
          }}>
            <Text style={{
              color: '#fff'
            }}>Placar</Text>
          </View>

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
                  {versoOponente?.book?.name}
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
                  {versoOponente?.chapter}
                </Text>
              </View>
            </View>


            <View>
              <Text>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                }}>{versoOponente?.number}_
                </Text>
                <Text style={{
                  color: '#555',
                  fontSize: 16
                }}>
                  {versoOponente?.text}
                </Text>
              </Text>
            </View>

          </View>




        </TouchableOpacity>
      }

    </>
  )
}