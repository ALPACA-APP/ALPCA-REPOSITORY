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
});

export default ProductStyles;
