import React, {useContext} from 'react';
import { View, Text, ActivityIndicator, StatusBar } from 'react-native';
import Treino from '../Treino';
import Oponente from '../Oponente';

import { AuthContext } from '../Contexts/authContext';

export default function Disputa() {

  const { user, setLoading, loadingTreino, loadingOponente, versoTreino} = useContext(AuthContext)

  return (
    <View style={{
      flex: 1
    }}>

      <StatusBar hidden={true}/>
      <Oponente rotacao={true}/>

      <View style={{ backgroundColor: '#aaa', flex: .01 }} />

     <Treino/>
      

    </View>
  );
}