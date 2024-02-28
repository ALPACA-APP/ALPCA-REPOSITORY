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
            image: 'https://source.unsplash.com/random/1280x720?food&product=1',
            name: "Product 1",
            brand: "Brand 1",
            exp_date: "24/02/2024"
        },
        {
            id: 2,
            image: "https://source.unsplash.com/random/1280x720?food&product=2",
            name: "Product 2",
            brand: "Brand 1",
            exp_date: "24/01/2024"
        },
        {
            id: 3,
            image: "https://source.unsplash.com/random/1280x720?food&product=3",
            name: "Product 3",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 4,
            image: "https://source.unsplash.com/random/1280x720?food&product=4",
            name: "Product 4",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 5,
            image: "https://source.unsplash.com/random/1280x720?food&product=5",
            name: "Product 5",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 6,
            image: "https://source.unsplash.com/random/1280x720?food&product=6",
            name: "Product 6",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 7,
            image: "https://source.unsplash.com/random/1280x720?food&product=7",
            name: "Product 7",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 8,
            image: "https://source.unsplash.com/random/1280x720?food&product=8",
            name: "Product 8",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 9,
            image: "https://source.unsplash.com/random/1280x720?food&product=9",
            name: "Product 9",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
        {
            id: 10,
            image: "https://source.unsplash.com/random/1280x720?food&product=10",
            name: "Product 10",
            brand: "Brand 1",
            exp_date: "24/09/2025"
        },
    ]);
    const [filteredProducts, setFilteredProducts] = useState(productsList);

    const handleSearch = (searchText) => {

        const filtered = searchText !== ''
            ? productsList.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
            : productsList;
        //Updating the state triggers a re-render
        setFilteredProducts(filtered);
    };


    //Shows the whole product list when there is no text on the searchbar (without pressing ENTER)
    const handleChange = (searchText) => {

        if (searchText === '') {
            setFilteredProducts(productsList);
        }
    };

    return (
        <SafeAreaView style={ProductStyles.container}>
            <View style={{ height: '20%' }}>
                <Text style={ProductStyles.touchableText}>Simulate header component here</Text>
            </View>

            <SearchBar onSearchSubmit={handleSearch} onChangeText={handleChange} />

            <ScrollView style={ProductStyles.scrollView}>

                {/* <TouchableOpacity style={ProductStyles.touchable}>
                    <Text style={ProductStyles.touchableText}>+ Add a new product</Text>
                </TouchableOpacity> */}
                {/* {errorCode === 0 && <Text style={RegisterStyles.error}>There are empty fields</Text>} */}



                {filteredProducts.map((product) => (
                    <ProductContainer key={product.id} product={product} />
                ))}

                <View style={{ marginBottom: '25%' }} />
            </ScrollView>

        </SafeAreaView>
    );
}
