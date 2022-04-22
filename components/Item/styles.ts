import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const CARD_WIDTH = windowWidth - 20;
const IMAGE_WIDTH = 100
const styles = StyleSheet.create({
    itemText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    itemWrapper: {
        width: CARD_WIDTH,
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        flexDirection: "row",
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    rightWrapper: {
      width: CARD_WIDTH - IMAGE_WIDTH - 20
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        marginRight: 10
    },
    title: {
        fontSize: 15,
        width: '80%',
        fontWeight: '600',
        marginBottom: 8
    },
    button: {
        width:40,
        height:30,
        backgroundColor: "#105269",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonWrapper: {
        flexDirection: "row",
        marginTop: 20,
        marginRight: 10
    },
    leftMargin: {
        marginLeft: 10
    },
});

export default styles;
