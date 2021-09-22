import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';


export default function ImageDetail (props){
    const { title, score, imageSource } = props
    return (<View style={style.container}>
        <Image source={imageSource}/>
        <View>
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    </View>)
}


const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 150,
        alignItems: 'center',
        justifyContent: 'space-evenly'
        
    }
})