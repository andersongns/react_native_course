import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'
import ComponentScreen from './src/screens/ComponentScreen'
import ExComponentScreen from './src/screens/ExComponentScreen'
import ExListScreen from './src/screens/ExListScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }} />
        <Stack.Screen name="ComponentScreen" component={ComponentScreen} options={{ title: 'Component Screen'}} />
        <Stack.Screen name="ExComponentScreen" component={ExComponentScreen} options={{ title: 'ExComponent Screen'}} />
        <Stack.Screen name="ExListScreen" component={ExListScreen} options={{ title: 'ExList Screen'}} />
        <Stack.Screen name="ListScreen" component={ListScreen} options={{ title: 'List Screen'}} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} options={{ title: 'Image Screen'}} />
        <Stack.Screen name="CounterScreen" component={CounterScreen} options={{ title: 'Counter Screen' }} />
        <Stack.Screen name="ColorsScreen" component={ColorsScreen} options={{ title: 'Colors Screen' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;