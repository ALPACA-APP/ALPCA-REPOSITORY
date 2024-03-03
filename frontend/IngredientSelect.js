import { SafeAreaView, Button, Text, ScrollView, View, TouchableOpacity, Animated } from "react-native";

import { useState, useEffect, useRef } from "react";
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";
import Header from "./Header";
import AsyncStorage from '@react-native-async-storage/async-storage';

import ProdSelectContainer from "./ProdSelectContainer";


export default IngredientSelect = ({ navigation }) => {

    const [uuid, setUuid] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([])
    const animated = useRef(new Animated.Value(0)).current;
    const [checkedAtLeastOnce, setCheckedAtLeastOnce] = useState(false);

    const getUuid = async () => {
        try {
            const value = await AsyncStorage.getItem('UUID');
            if (value !== null) {
                setUuid("" + value);
            }
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getUuid();
    }, []);


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

        handleSearch(searchText);
    };

    const goBack = () => {
        navigation.goBack();
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