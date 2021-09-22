import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';


export default function ListScreen() {
  const arr = [
      { key: '1', name: 'Compra na loja do vizinho 1' },
      { key: '2', name: 'Compra na loja do vizinho 2' },
      { key: '3', name: 'Compra na loja do vizinho 3' },
      { key: '4', name: 'Compra na loja do vizinho 4' },
      { key: '5', name: 'Compra na loja do vizinho 5' },
      { key: '6', name: 'Compra na loja do vizinho 6' },
      { key: '7', name: 'Compra na loja do vizinho 7' },
      { key: '8', name: 'Compra na loja do vizinho 8' },
      { key: '9', name: 'Compra na loja do vizinho 9' },
      { key: '10', name: 'Compra na loja do vizinho 10' },
    ]

  const _renderItem = (element) => {
    const { item } = element;
    return (<Text style={styles.itemList}>
              { item.name }
            </Text>)
  };

  const _keyExtractor = (item) => item.key;

  return <FlatList
          // horizontal - define as horizontal list
          horizontal
          showsHorizontalScrollIndicator={true}
          data={arr}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
          />
}

const styles = StyleSheet.create({
  itemList: {
    width: 50,
    height: 50
  }
})