import { SafeAreaView, Button, Text, ScrollView, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";

export default Product = ({ navigation }) => {

    // in the future change this to a list of products from the database
    // using a useEffect to fetch the data from the server and store it in the products array in a useState
    const [productsList, setProductList] = useState([
        {
            id: 1,
            name: "Product 1",
            brand: "Brand 1",
            expiration: "2021-12-31"
        },
        {
            id: 2,
            name: "Product 2",
            brand: "Brand 2",
            expiration: "2022-01-01"
        },
        {
            id: 3,
            name: "Product 3",
            brand: "Brand 3",
            expiration: "2022-01-02"
        },
        {
            id: 4,
            name: "Product 4",
            brand: "Brand 4",
            expiration: "2022-01-03"
        },
        {
            id: 5,
            name: "Product 5",
            brand: "Brand 5",
            expiration: "2022-01-04"
        },
        {
            id: 6,
            name: "Product 6",
            brand: "Brand 6",
            expiration: "2022-01-05"
        },
        {
            id: 7,
            name: "Product 7",
            brand: "Brand 7",
            expiration: "2022-01-06"
        },
        {
            id: 8,
            name: "Product 8",
            brand: "Brand 8",
            expiration: "2022-01-07"
        },
        {
            id: 9,
            name: "Product 9",
            brand: "Brand 9",
            expiration: "2022-01-08"
        },
        {
            id: 10,
            name: "Product 10",
            brand: "Brand 10",
            expiration: "2022-01-09"
        },
    ]);

    const handleSearch = (text) => {
        
        // in the future change this to a fetch request to the server
        // to get the products that match the search query
        // and update the products array with the new data
        console.log("searching for " + text);
    };


    const TempProduct = ({ item }) => (
        <View style={ProductStyles.productContainer} key={item.id}>
            <Text style={ProductStyles.productText}>{item.name}</Text>
            <Text style={ProductStyles.productText}>{item.brand}</Text>
            <Text style={ProductStyles.productText}>{item.expiration}</Text>
            <Button title="Edit" onPress={() => { console.log("edit item with id " + item.id) }} />
        </View>
    );

    return (
        <SafeAreaView style={ProductStyles.container}>
            <View style={{ height: '20%' }}>
                <Text style={ProductStyles.touchableText}>Simulate header component here</Text>
            </View>

            <SearchBar onChangeText={handleSearch} />

            <ScrollView style={ProductStyles.scrollView}>

                <TouchableOpacity style={ProductStyles.touchable}>
                    <Text style={ProductStyles.touchableText}>+ Add a new product</Text>
                </TouchableOpacity>

                {productsList.map((product) => (
                    TempProduct({ item: product })
                ))}
                <View style={{ marginBottom: '25%' }} />
            </ScrollView>

        </SafeAreaView>
    );
}
