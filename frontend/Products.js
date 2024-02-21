import { SafeAreaView, Button, Text, ScrollView, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";
import ProductContainer from "./ProductContainer";

export default Product = ({ navigation }) => {

    // in the future change this to a list of products from the database
    // using a useEffect to fetch the data from the server and store it in the products array in a useState
    const [productsList, setProductList] = useState([
        {
            id: 1,
            image: 'https://m.media-amazon.com/images/I/61jEAGLViDL.jpg',
            name: "Product 1",
            brand: "Brand 1",
            exp_date: "24/02/2024"
        },
        {
            id: 2,
            image: "https://m.media-amazon.com/images/I/61jEAGLViDL.jpg",
            name: "Product 2",
            brand: "Brand 1",
            exp_date: "24/01/2024"
        },
        {
            id: 3,
            image: "./assets/splash.png",
            name: "Product 3",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 4,
            image: "./assets/splash.png",
            name: "Product 4",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 5,
            image: "./assets/splash.png",
            name: "Product 5",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 6,
            image: "./assets/splash.png",
            name: "Product 6",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 7,
            image: "./assets/splash.png",
            name: "Product 7",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 8,
            image: "./assets/splash.png",
            name: "Product 8",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 9,
            image: "./assets/splash.png",
            name: "Product 9",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 10,
            image: "./assets/splash.png",
            name: "Product 10",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
    ]);

    const handleSearch = (text) => {
        
        // in the future change this to a fetch request to the server
        // to get the products that match the search query
        // and update the products array with the new data
        console.log("searching for " + text);
    };

    return (
        <SafeAreaView style={ProductStyles.container}>
            <View style={{ height: '20%' }}>
                <Text style={ProductStyles.touchableText}>Simulate header component here</Text>
            </View>

            <SearchBar onChangeText={handleSearch} />

            <ScrollView style={ProductStyles.scrollView}>

                {/* <TouchableOpacity style={ProductStyles.touchable}>
                    <Text style={ProductStyles.touchableText}>+ Add a new product</Text>
                </TouchableOpacity> */}

                {productsList.map((product) => (
                <ProductContainer key={product.id} product={product} />
                ))}

                <View style={{ marginBottom: '25%' }} />
            </ScrollView>

        </SafeAreaView>
    );
}
