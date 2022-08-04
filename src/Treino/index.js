import React, { useEffect, useState, useContext } from "react";
import { View, Text, TouchableOpacity, StatusBar, ActivityIndicator } from "react-native";

import { AuthContext } from "../Contexts/authContext";
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { api } from "../../api";

export default function Treino() {

  const { loadingTreino, ListVersiculoTreino, versoTreino} = useContext(AuthContext)

  useEffect(() => {
    ListVersiculoTreino()

  }, [])

  return (
    <>
      <StatusBar backgroundColor={'#b22'} barStyle='light-content' />

      {loadingTreino ? <ActivityIndicator  style={{ flex: 1}} color={'#222'} size={30}/> : 

      <TouchableOpacity
        style={{
          flex: 1,
          paddingHorizontal: 14,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => !loadingTreino && ListVersiculoTreino()
        }>

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
                {versoTreino?.book?.name}
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
                {versoTreino?.chapter}
              </Text>
            </View>
          </View>


          <View>
            <Text>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}>{versoTreino?.number}_
              </Text>
              <Text style={{
                color: '#555',
                fontSize: 16
              }}>
                {versoTreino?.text}
              </Text>
            </Text>
          </View>

        </View>




      </TouchableOpacity>
      }

    </>
  )
}