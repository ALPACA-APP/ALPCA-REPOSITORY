import { SafeAreaView, Button, Text, ScrollView, View, TouchableOpacity, Image} from "react-native";
import { useState, useEffect } from "react";
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";
import ProductContainer from "./ProductContainer";
import Header from "./Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

// const apiUrl = 'https://thoughtful-cod-sweatshirt.cyclic.app';
const apiUrl = 'http://192.168.1.58:3000';

export default Product = ({ navigation }) => {

    const [productsList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [uuid, setUuid] = useState('');
    const [loading, setLoading] = useState(true);

    const getUuid = async () => {
        try {
            const value = await AsyncStorage.getItem('UUID');
            if (value !== null) {
                setUuid("" + value);
    
                const response = await fetch(apiUrl + '/api/fetchAllProducts/' + value);
    
                if (!response.ok) {
                    throw new Error('Network request failed');
                }
    
                const data = await response.json();
                setProductList(data);
                setLoading(false);
            }
        } catch (error) {
            console.error(error.message);
            setLoading(false);
        }
    };
    


    useEffect(() => {
        getUuid();
    }, []);
    useEffect(() => {
        // Update filtered products whenever productsList changes
        setFilteredProducts(productsList);
    }, [productsList]);


    //Shows the whole product list when there is no text on the searchbar (without pressing ENTER)
    const handleChange = (searchText) => {

        const filtered = searchText !== ''
            ? productsList.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
            : productsList;
        //Updating the state triggers a re-render
        setFilteredProducts(filtered);
    };

    return (
        <SafeAreaView style={ProductStyles.container}>
            <Header />

            <SearchBar onChangeText={handleChange} />

            <ScrollView style={ProductStyles.scrollView}>

                {filteredProducts.map((product) => (
                    <ProductContainer key={product.id} product={product} />
                ))}

                <View style={{ marginBottom: '25%' }} />
            </ScrollView>
            {loading && <View style={ProductStyles.loaderWrapper}>
                <Image style={ProductStyles.loader} source={require('./assets/SpinLoader.gif')} />
            </View>}
        </SafeAreaView>
    );
}
