import { StyleSheet } from 'react-native';

const ScanStyles = StyleSheet.create({
    topPart:{
        width: '100%',
    },
    name:{ 
        height: 50,
        marginLeft: 50,
        marginTop: 10,
        marginBottom: 20,
        marginRight: 50,
        padding: 10,
        borderColor: 'black',
        borderWidth: 1, 
        borderRadius: 10,
    },

    text:{
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        fontSize: 15,
        color: 'black',
    }, 

    calendarWrap:{
        flexDirection: 'row', 
        alignItems: 'center',
        alignContent: 'center',
        verticalAlign: 'center',
        marginLeft: 50,
        marginRight: 50,
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
        width: '100%', // Adjust the width as needed
        bottom: 0,
        backgroundColor: 'white',
        borderRadius: 40,
        borderColor: 'black',
    },
    buttonWrapper:{
        
        flexDirection: 'row',
        justifyContent: 'center',
        marginRight: 50,  
        marginLeft: 50,
        marginTop: 20,
        
    },
    icon:{
        height: 40,
        width: 40, 
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
        width: '50%',
        marginTop: 10,
        marginRight: 50,
        padding: 15,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
    },
    
    calendarButton:{
        width: '100%',
        marginTop: 10,
    },


});

export default ScanStyles;