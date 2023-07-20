import React from 'react';
import { View, Text } from 'react-native';
import { useScreenGuard } from '../hooks/useScreenGuard';

const ScreenB: React.FC = () => {

  useScreenGuard('screenB')

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{fontSize: 32}}
        >TELA B</Text>
    </View>
  );
}

export default ScreenB;