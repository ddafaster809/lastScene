import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import Header from '../../components/UI/Header';


const Series = ({ navigation }) => {
    const [text, onChangeText] = useState("Useless Text");
    const [focus, setFocus] = useState(false)
    
    return (
        <>
            <Header navigation={navigation} title="Series" />
            <View style={{ paddingHorizontal: 13 }}>
                
            </View>

        </>
    )
}

export default Series
