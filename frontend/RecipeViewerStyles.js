import { StyleSheet } from 'react-native';

const RecipeViewerStyles = StyleSheet.create({

    scrollContainer: {
        padding: 10,
        marginBottom: '15%',
    },

    titleContainer: {
        marginBottom: 20,
        marginLeft: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },

    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        padding: 10,
    },
    contentText: {
        color: 'black',
        width: '100%',
        paddingHorizontal: 30, 
        borderStyle: 'dashed',
        paddingBottom: '100%',
    },
    floatingAcction: {
        position: 'absolute',
        bottom: "15%",
        right: 25,
        width: 60,
        height: 60,
        justifyContent: "center",
        backgroundColor: "#000",
        borderRadius: 1000,
        borderWidth: 2,
        borderColor: "#000",

        elevation: 5, //android shadow

        // IOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,

    },

    floatingAcctionIcon: {
        width: "50%",
        height: "50%",
        alignSelf: 'center'
    },


});

export default RecipeViewerStyles;