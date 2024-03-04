import { SafeAreaView, Button, Text, ScrollView, View, TouchableOpacity, Animated, Image } from "react-native";

import { useState, useEffect, useRef } from "react";
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";
import Header from "./Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProdSelectContainer from "./ProdSelectContainer";


export default IngredientSelect = ({ navigation }) => {

    //const apiUrl = 'http://IP:3000/api/';
    const apiUrl = "https://thoughtful-cod-sweatshirt.cyclic.app/api/";

    const [uuid, setUuid] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([])
    const animated = useRef(new Animated.Value(0)).current;
    const [checkedAtLeastOnce, setCheckedAtLeastOnce] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // in the future change this to a list of products from the database
    // using a useEffect to fetch the data from the server and store it in the products array in a useState
    const [productsList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(productsList);



    const getUuid = async () => {
        setIsLoading(true);
        try {
            const value = await AsyncStorage.getItem('UUID');
            if (value !== null) {
                setUuid("" + value);
            }

            // fetch the products from the server
            const response = await fetch(apiUrl + 'fetchAllProducts/' + value);
            if (!response.ok) {
                throw new Error('Network request failed');
            }
            const data = await response.json();
            console.log(data);
            setProductList(data);
        } catch (e) {
            console.log(e);
        }

        setIsLoading(false);
    }


    useEffect(() => {
        getUuid();
    }, []);

    useEffect(() => {
        // Update filtered products whenever productsList changes
        setFilteredProducts(productsList);
    }, [productsList]);

    const handleSearch = (searchText) => {

        const filtered = searchText !== ''
            ? productsList.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
            : productsList;
        //Updating the state triggers a re-render
        setFilteredProducts(filtered);
    };



    //Shows the whole product list when there is no text on the searchbar (without pressing ENTER)
    const handleChange = (searchText) => {

        handleSearch(searchText);
    };

    const goBack = () => {
        navigation.navigate('Recipes View');
    }

    const onCheckboxChange = (id, checked) => {
        setCheckedAtLeastOnce(true);

        let lengthOfSelected = selectedProducts.length;
        if (checked) {
            setSelectedProducts([...selectedProducts, id]);
            lengthOfSelected++;
        } else {
            setSelectedProducts(selectedProducts.filter((productId) => productId !== id));
            lengthOfSelected--;
        }

        if (lengthOfSelected > 0) {
            Animated.timing(animated, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(animated, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start();
        }
    }



    const animatedYtranslate = {
        transform: [
            {
                translateY: animated.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0]
                })
            }
        ],
        opacity: animated.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),

        position: 'absolute',
        bottom: '12%',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 10,
        height: 'auto',
        zIndex: 100,
        borderRadius: 25,
    }

    if(isLoading){
        return (
            <View style={ProductStyles.loaderWrapper}>
                <Image style={ProductStyles.loader} source={require('./assets/SpinLoader.gif')} />
            </View>
        );
    }

    return (
        <SafeAreaView style={ProductStyles.container}>
            <Header isLogout="false" onGoBack={() => { goBack(); }} />

            <SearchBar onSearchSubmit={handleSearch} onChangeText={handleChange} />
            {<Animated.View style={animatedYtranslate}>
                <TouchableOpacity style={ProductStyles.button} onPress={() => { console.log("generating a reicpe using prodructs with id: " + selectedProducts); }}>
                    <Text style={ProductStyles.buttonText}>Generate Recipe</Text>
                </TouchableOpacity>
            </Animated.View>}

            <ScrollView style={ProductStyles.scrollView}>
                {filteredProducts.map((product) => (
                    <ProdSelectContainer key={product.id} product={product} onCheckboxChange={onCheckboxChange} />
                ))}

                <View style={{ marginBottom: '50%' }} />
            </ScrollView>

        </SafeAreaView>
    );

}