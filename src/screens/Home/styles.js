import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safeAreaView: {
        width: '100%',
        flex: 1
    },
    tabLabel: {
        fontSize: 13,
        fontFamily: 'Poppins-Medium',
        color: '#141414',

    },
    tabIndicator: {
        backgroundColor: '#EB2F71',
        top: 0,
    },
    tabBar: {
        backgroundColor: '#FFFFFF',
        elevation: 0,
        shadowOffset: {
            width: 0,
            height: 0,
        },
    },
    unFocusTitleColor: {
        color: '#8D8D8D',
    },
    unFocusIconColor: {
        color: '#8D8D8D'
    },
    tabView: {
        backgroundColor: '#FFFFFF'
    }
});

export default styles;