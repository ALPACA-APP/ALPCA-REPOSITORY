import { StyleSheet } from 'react-native';

const ScanStyles = StyleSheet.create({
    absoluteFillObject: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    ascendingBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        zIndex: 1,
        borderRadius: 40,
    },
    buttonWrapper:{
        
        flexDirection: 'row',
        
        justifyContent: 'center',
        
        backgroundColor: 'black',
    },
    buttonBox:{
       margin: 20,
       width: 100,
       height: 50,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'blue',
    },
    button:{

        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
    }
});

export default ScanStyles;