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

    // const getUuid = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('UUID');
    //         if (value !== null) {
    //             console.log(value);
    //             setUuid(""+value);
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }

    //     const response = await fetch(apiUrl + '/api/fetchAllProducts/' + uuid);
    //     const data = await response.json();
  
    //     let prodList = []; //Empty array for loading the products in it
    //     for (let i = 0; i < data.length; i++) {
    //       prodList[i] = data[i];
    //     }
    //     setProductList(prodList);
    // }

    const getUuid = async () => {
        try {
            const value = await AsyncStorage.getItem('UUID');
            if (value !== null) {
                console.log(value);
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
            <Header />

            <SearchBar onSearchSubmit={handleSearch} onChangeText={handleChange} />

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
