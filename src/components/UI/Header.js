import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';

const Header = ({ title, navigation }) => {
    return (
        <View style={styles.mainContainer}>
            {navigation && (
            <View style={styles.iconContainer} >
                <Icon      
                    size={18}              
                    name='arrow-left'
                    type='font-awesome-5'
                    color='#0B0B0B'
                    onPress={()=>{
                        navigation.goBack();
                    }}
                />
            </View>
            )}
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        minHeight: 46,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: '#0B0B0B'

    },
    iconContainer:{
        position: 'absolute',
        left: 16,         
    }
})

export default Header
