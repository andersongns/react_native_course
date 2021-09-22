import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ExComponentScreen() {
  const name = 'Anderson'
  return  <View>
            <Text style={style.title}>Getting started with react native!</Text>
            <Text style={style.subTitle}>My name is {name}</Text>
          </View>
}

const style = StyleSheet.create({
  title: {
    fontSize: 45
  },
  subTitle: {
    fontSize: 20
  }
})