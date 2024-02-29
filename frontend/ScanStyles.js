import { StyleSheet } from 'react-native';

const ScanStyles = StyleSheet.create({
    topPart:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    name:{ 
        width: '80%',
        height: 50,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 10,
    },

    calendarWrap:{
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center'

    },
    holePage:{
        width: '100%',
        height: '100%',
        //center elements vertically and horizontally
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,

    },
    calendarIos:{
        center: 'center', 
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        color: 'white',
        padding: 20,
        
    },


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
        borderRadius: 40,
        paddingTop: 30,
    },
    buttonWrapper:{
        
        flexDirection: 'row',
        
        justifyContent: 'center',
        
    },
    buttonBox:{
        margin: 20,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10, 
        borderColor: 'black',
        borderWidth: 1, 
        //when touched the button will change color
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,


    },
    button:{

        justifyContent: 'center',
        alignItems: 'center',
        
    },

    calendarText:{
        width: '40%',
        margin: 20,
        padding: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    
    calendarButton:{
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },


});

export default ScanStyles;