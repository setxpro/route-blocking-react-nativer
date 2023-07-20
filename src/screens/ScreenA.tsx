import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Button } from 'react-native';

const ScreensA: React.FC = () => {

    const { navigate } = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button title='IR PARA TELA B' onPress={() => navigate('screenB')}/>
    </View>
  );
}

export default ScreensA;