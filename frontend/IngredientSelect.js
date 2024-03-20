import { SafeAreaView, Button, Text, ScrollView, View, TouchableOpacity, Animated, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { useFocusEffect } from '@react-navigation/native';
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";
import Header from "./Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProdSelectContainer from "./ProdSelectContainer";
import { CONSTANTS } from './global.js';

export default IngredientSelect = ({ navigation }) => {


    const apiUrl = CONSTANTS.API_URL;

    const [uuid, setUuid] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([])
    const animated = useRef(new Animated.Value(0)).current;
    const [checkedAtLeastOnce, setCheckedAtLeastOnce] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [userObject, setUserObject] = useState('');
    const [response, setResponse] = useState('');

    // in the future change this to a list of products from the database
    // using a useEffect to fetch the data from the server and store it in the products array in a useState
    const [productsList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(productsList);



    const getUuid = async () => {
        setIsLoading(true);
        try {
            const userStoredString = await AsyncStorage.getItem('user');
            const userStored = JSON.parse(userStoredString);
            if (userStored !== null) {
                setUuid("" + userStored.uuid);
            }

            // fetch the products from the server
            const response = await fetch(apiUrl + 'fetchAllProducts/' + userStored.uuid);
            if (!response.ok) {
                throw new Error('Network request failed');
            }
            const data = await response.json();
            setUserObject(userStored);
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
        setCheckedAtLeastOnce(false);
        Animated.timing(animated, {
            toValue: 0,
            duration: 1,
            useNativeDriver: true
        }).start();
    }, [productsList]);

    useFocusEffect(
        React.useCallback(() => {
            getUuid();
        }, [])
    );

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

    if (isLoading) {
        return (
            <View style={ProductStyles.loaderWrapper}>
                <Image style={ProductStyles.loader} source={require('./assets/SpinLoader.gif')} />
            </View>
        );
    }

    const generateRecipe = () => {
        console.log("generating a reicpe using prodructs with id: " + selectedProducts);
        requestGPT();
    }

    const getProductNames = () => {
        let productNames = [];
        selectedProducts.forEach((productId) => {
            const product = productsList.find((product) => product.product_id === productId);
            productNames.push(product.name);
        });

        return productNames;
    }

    const requestGPT = async () => {
        try {
            const apiKey = 'YOUR_API_KEY';
            const url = 'https://api.openai.com/v1/completions';


            const products = getProductNames();

            const prompt = `
            Can you generate a recipe that uses exclusively the following resources:${products}. Add as optional, common spices that most people have at home. Use the following structure for your response:
            ## Tittle ##

            ## list of must-have ingredients (name this main ingredients) ##
            -

            ## List of optional spices ##
            -

            ## preparation steps ##


            when you respond, try to be token efficient
            (max tokens: 250)`

            console.log(prompt);

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            };

            const data = {
                model: 'text-davinci-003', // or other models you want to use
                prompt: prompt,
                max_tokens: 250,
            };

            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Failed to fetch response');
            }

            const responseData = await response.json();
            setResponse(responseData.choices[0].text);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <SafeAreaView style={ProductStyles.container}>
            <Header isLogout="false" onGoBack={() => { goBack(); }} userObject={userObject} />

            <SearchBar onSearchSubmit={handleSearch} onChangeText={handleChange} />
            {<Animated.View style={animatedYtranslate}>
                <TouchableOpacity style={ProductStyles.button} onPress={() => { generateRecipe(); }}>
                    <Text style={ProductStyles.buttonText}>Generate Recipe</Text>
                </TouchableOpacity>
            </Animated.View>}

            <ScrollView style={ProductStyles.scrollView}>
                {filteredProducts.map((product) => (
                    <ProdSelectContainer key={product.product_id} product={product} onCheckboxChange={onCheckboxChange} userObject={userObject} />
                ))}

                <View style={{ marginBottom: '50%' }} />
            </ScrollView>

        </SafeAreaView>
    );

}