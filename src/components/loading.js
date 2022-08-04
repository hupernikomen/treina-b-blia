import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function Loading() {
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
  );
}