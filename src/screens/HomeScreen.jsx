import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen(props) {
  const { navigate } = props.navigation
  console.log(navigate)
  return (
    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
      <Button title='Go to Components Demo'
              accessibilityLabel='Button Go To Componens Screen'
              color='red'
              onPress={() => navigate('ComponentScreen')} />
      <Button title='Go to Exercise Components Demo'
              accessibilityLabel='Button Go To Exercise Componens Screen'
              color='green'
              onPress={() => navigate('ExComponentScreen')} />
      <Button title='Go to List Demo'
              accessibilityLabel='Button Go To List Screen'
              color='blue'
              onPress={() => navigate('ListScreen')} />
      <Button title='Go to Image Demo'
              accessibilityLabel='Button Go To Image Screen'
              color='pink'
              onPress={() => navigate('ImageScreen')} />
      <Button title='Go to Counter Demo'
              accessibilityLabel='Button Go To Counter Screen'
              color='brown'
              onPress={() => navigate('CounterScreen')} />
      <Button title='Go to Colors Demo'
              accessibilityLabel='Button Go To Colors Screen'
              color='orange'
              onPress={() => navigate('ColorsScreen')} />
      <TouchableOpacity onPress={() => navigate('ExListScreen')} style={style.button}>
        <Text>Go to Exercise List Screen</Text>
      </TouchableOpacity>
    </View>
  );
}


const style = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center'
  }
})