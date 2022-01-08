import React, { useState } from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { Icon } from 'react-native-elements';
import { useObjState } from '../../hooks';


const SearchInput = () => {    
    const [{inputValue, isFocused}, updateState] = useObjState({
        inputValue: null, 
        isFocused: false
    });
    const setIsFocused = isFocused => {
        updateState({isFocused})
    }
    return (
        <View style={[styles.mainContainer, isFocused && styles.focusedBorder ]}>
            <TextInput
                onFocus={()=>{setIsFocused(true)}}
                onBlur={()=>{setIsFocused(false)}}
                style={styles.textInput}
                onChangeText={value =>{
                    updateState({inputValue: value})
                }}
                value={inputValue}
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