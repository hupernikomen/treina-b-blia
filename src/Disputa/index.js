import React from 'react';
import { View, Text } from 'react-native';
import Treino from '../Treino';

export default function Disputa() {

  return (
    <View style={{
      flex: 1
    }}>

      <Treino rotacao={true} disputa={true} />

      <View style={{
        backgroundColor: '#aaa',
        height: .5
      }} />

      <Treino  disputa={true}/>

    </View>
  );
}