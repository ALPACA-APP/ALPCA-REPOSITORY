import { StyleSheet } from "react-native";

const ProductStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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
        zIndex: 10,
        position: 'absolute',
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
    buttonBox: {
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    
    darkBackground: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
    },
    confirmBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        paddingBottom: 30,
        paddingTop: 30,
        width: '80%',
        position: 'absolute',
        zIndex: 30,
    },
    logoutText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonsWrapper: {
        marginTop: 20,
        flexDirection: 'column',
    },
    confirmButton: {
        color: '#000',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        alignItems: 'center',
    },
    confirmText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: 'black',
        color: '#fff',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
    },
    cancelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: '#EBEBEB',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        marginTop: 20,
        height: '14%',
    },
    leftContent: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    rightContent: {
        marginTop: 10,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    sideImage: {
        width: 40,
        height: 40,
        alignSelf: 'center',
        tintColor: '#000000',
    },
    sideText: {
        fontSize: 15,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontFamily: 'lexend-bold',
    },
    logoImage: {
        width: 80,
        height: 80,
    }
});

export default ProductStyles;
