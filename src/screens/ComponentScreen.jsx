import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function ComponentScreen () {
  const greeting = 'Humam'
  return  <View>
            <Text style={{ textAlign: 'center' }}>Component Screen</Text>
            <Text style={styles.textStyle}>This is the components screen</Text>
            <Text>Hi there! {greeting}</Text>
          </View>
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'red'
  }
})
