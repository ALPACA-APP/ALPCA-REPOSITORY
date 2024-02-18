import { StyleSheet } from 'react-native';

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050505',
        paddingTop: 10,
    },
    header: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backIcon: {
        width: 35,
        height: 35,
    },
    backIconWrapper: {
        position: 'absolute',
        left: '10%',
    },
    textStyle: {
        color: '#fff',
        fontSize: 36,
        fontFamily: 'lexend-regular',
    },
    textStyleBold: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        textShadowColor: '#fff',
        textShadowRadius: 15,
        fontFamily: 'lexend-bold',
    },
    textWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '20em',
    },
    front: {
        height: '85%',
        borderTopStartRadius: 100,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },
    version: {
        color: '#aaa',
        alignSelf: 'flex-end',
        paddingRight: 30,
        paddingTop: 50,
        position: 'absolute',
        fontFamily: 'lexend-light',
    },
    labelInput: {
        color: '#000',
        fontFamily: 'lexend-bold', // esto hay que cambiarlo a la fuente correcta, que seria Inter-bold.
        fontSize: 20,
        marginBottom: 10,
        marginLeft: 20,
    },
    inputView: {
        marginTop: 60,
        width: '70%',
        justifyContent: 'center',
        verticalAlign: 'center',
    },
    inputViewFocus: {
        marginTop: 80,
        width: '70%',
        justifyContent: 'center',
        verticalAlign: 'center',
        //animation to go up
    },
    textInput: {
        height: 70,
        marginBottom: 10,
        textAlign: 'left',
        fontFamily: 'lexend-light',
        fontSize: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderColor: '#9992',
        borderWidth: 1,
        borderRadius: 30,
        borderRightColor: 'transparent',
        width: '90%',


    },
    innerShadow: {
        width: '100%',
        height: 70,
        borderRadius: 30,
        right: false,
        borderBottomWidth: 0.1,
        marginBottom: 30,
        borderColor: '#9997',
        borderWidth: 1,
        flexDirection: 'row',
    },
    brand: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'lexend-extra-light',
        position: 'absolute',
        alignSelf: 'center',
        bottom: 35,
    },
    button: {
        backgroundColor: '#000',
        width: '100%',
        height: 70,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 30,
        fontFamily: 'lexend-regular',
    },
    eyeIcon: {
        width: 25,
        height: 25,
    },
    eyeIconWrapper: {
        justifyContent: 'center',
        left: -15,
    },
    error: {
        color: 'red',
        fontFamily: 'lexend-light',
        fontSize: 16,
        textAlign: 'center',
    },
    loader: {
        width: 50,
        height: 50,
    },
    loaderWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
});

export default RegisterStyles;