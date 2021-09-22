import React from 'react'
import { Text, FlatList, View, StyleSheet } from 'react-native'

export default function ExListScreen () {
  
  const games = [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
    return { name: `Street Fighter ${index+1}`, age: index+1 }
  })

  const _renderItem = (element) => {
    const { item } = element
    return (<View style={style.itemContainer}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>)
  }
  
  const _keyExtractor = (item) => item.name

  return <FlatList  data={games} renderItem={_renderItem} keyExtractor={_keyExtractor} />
}

const style = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1
  }
})