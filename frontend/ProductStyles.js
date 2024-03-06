import { StyleSheet } from "react-native";

const ProductStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
    },
    scrollView: {
        width: "100%",
        height: "90%",
        paddingBottom: 10,
    },
    productContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: "100%", // Set the width to take up all of the available screen width
        height: 100,
    },
    productText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    touchable: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        borderStyle: "dashed",
        height: 80,
    },
    touchableText: {
        fontSize: 20,
        textAlign: 'center', // Center the text horizontally
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        textAlignVertical: 'center', // Center vertically
        fontFamily: "lexend-bold",
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
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: "lexend-regular",

    },
    button: {
        backgroundColor: '#0075FF',
        borderRadius: 25,
        padding: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
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
    ascendingBox: {
        position: 'absolute',
        width: '90%', // Adjust the width as needed
        alignSelf: 'center', // Center horizontally
        bottom: '15%', // Adjust the positioning as needed
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'black',
        zIndex: 1,
    },
    text:{
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        fontSize: 15,
        color: 'black',
    },
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
    calendarWrap:{
        flexDirection: 'row', 
        alignItems: 'center',
        alignContent: 'center',
        verticalAlign: 'center',
        marginLeft: 50,
        marginRight: 50,
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
    icon:{
        height: 40,
        width: 40, 
    },
    buttonWrapper:{
        
        flexDirection: 'row',
        
        justifyContent: 'center',
        marginRight: 50,  
        marginLeft: 50,
        marginTop: 20,
        
    },
    buttonOption:{

        justifyContent: 'center',
        alignItems: 'center',
        
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
});

export default ProductStyles;
