import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


const CustomButton = (props) => {

    const _style = StyleSheet.create({
        button: {
            width: '80%',
            backgroundColor: '#337EEE',
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            marginBottom: 20,
            borderColor: 'blue',
            borderWidth: 1
        }, buttonText: {
            color: 'white',
            fontSize: 20,
        },
    })

    const { name, onPress } = props
    return (
    <TouchableOpacity style={_style.button} onPress={onPress}>
        <Text style={_style.buttonText}>{name}</Text>
    </TouchableOpacity>)
}

export default function CounterScreen() {
    
    const [counter, setCounter] = useState(0)
    
    const handleIncreaseCounter = () => { setCounter(counter + 1) }
    const handleDecreaseCounter = () => { setCounter(counter - 1) }

    return (
        <View style={style.container}>
            <CustomButton name='Increase' onPress={handleIncreaseCounter} />
            <CustomButton name='Decrease' onPress={handleDecreaseCounter} />
            <Text style={style.text}>Current</Text>
            <Text style={style.text}>Count : {counter}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container: {
        paddingTop: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20
    },
})