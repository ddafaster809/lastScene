import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { useObjState } from '../../hooks';

const SearchInput = () => {    
    const [focus, setFocus] = useState(false);            
    return (
        <View style={[styles.mainContainer, focus && focusedBorder ]}>
            <TextInput
                onFocus={()=>{setFocus(true)}}
                onBlur={()=>{setFocus(false)}}
                style={styles.textInput}
                onChangeText={onChangeText}
                value={text}
            />
            <View style={styles.iconContainer}>
            <Icon      
            size={16}              
            name='search'
            type='font-awesome-5'
            color='#707070'            
        />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        borderRadius: 22,
        borderWidth: 1,
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: '#F5F5F5',
    },
    focusedBorder: {
        borderColor: '#FEBFD5'
    },
    textInput: {
        height: '100%',
        width: '100%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 13,
        paddingHorizontal: 20,
        color: '#0D0D0D',
        paddingVertical: 0,
        paddingTop: 2.6
    },
    iconContainer:{
        position: 'absolute',
        right: 12
    }
});

export default SearchInput