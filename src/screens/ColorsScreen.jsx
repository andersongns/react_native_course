import React, { useState } from 'react'
import { View, Button, StyleSheet, FlatList } from 'react-native'


export default function ColorsScreen() {
    const [colors, setColor] = useState([])
    const getRandomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const color = `rgb(${red},${green},${blue})`;
        setColor([...colors, color])
    }
    return <View>
        <Button title='Generate Color' onPress={getRandomColor} />

        <FlatList   data={colors}
                    renderItem={({ item }) => { return <View style={{ height: 100, width: '100%', backgroundColor: item }}></View> }}
                    keyExtractor={(item) => item} />

    </View>
}