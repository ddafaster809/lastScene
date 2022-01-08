import React from 'react'
import { View } from 'react-native';
import Header from '../../components/UI/Header';
import SearchInput from '../../components/UI/SearchInput';


const Series = ({ navigation }) => {
    return (
        <>
            <Header navigation={navigation} title="Series" />
            <View style={{ paddingHorizontal: 13 }}>
                <SearchInput />
            </View>

        </>
    )
}

export default Series
