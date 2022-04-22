import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    itemText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    itemWrapper: {
        width: '100%',
        height:100,
        backgroundColor: '#f6f6f6',
        marginBottom: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width:'100%',
        height: 100,
        resizeMode:'cover'
    }
});

export default styles;
