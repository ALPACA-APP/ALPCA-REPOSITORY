import { SafeAreaView, ScrollView, View, Image, Animated, Text, TextInput, Platform } from "react-native";
import React, { useState, useEffect } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";
import ProductContainer from "./ProductContainer";
import Header from "./Header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
import { CONSTANTS } from './global.js';
import loadingSpinner from "./assets/SpinLoader.gif";

const apiUrl = CONSTANTS.API_URL;

export default Product = ({ navigation }) => {

    const [productsList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userObject, setUserObject] = useState('');
    //EDIT
    const [animation] = useState(new Animated.Value(0)); // Initialize animated value
    const [productName, setProductName] = useState(''); // Initialize state variable
    const [brand, setBrand] = useState(''); // Initialize state variable
    const [expDate, setExpDate] = useState(new Date());
    const [id, setId] = useState(0);
    const [productUid, setProductUid] = useState(0);
    const [showPicker, setShowPicker] = useState(false); // State to manage date picker visibility
    const [modal, setModal] = useState(false);

    const getProducts = async () => {
        try {
            const userStoredString = await AsyncStorage.getItem('user');
            const userStored = JSON.parse(userStoredString);

            if (userStored !== null) {

                const response = await fetch(apiUrl + 'fetchAllProducts/' + userStored.uuid);

                if (!response.ok) {
                    throw new Error('Network request failed');
                }

                const data = await response.json();
                setUserObject(userStored);
                setProductList(data);
                setLoading(false);
            }
        } catch (error) {
            console.error(error.message);
            setLoading(false);
        }

    };


    useEffect(() => {
        getProducts();
    }, []);
    useEffect(() => {
        // Update filtered products whenever productsList changes
        setFilteredProducts(productsList);
    }, [productsList]);

    useFocusEffect(
        React.useCallback(() => {
            getProducts();
        }, [])
    );

    //Shows the whole product list when there is no text on the searchbar (without pressing ENTER)
    const handleChange = (searchText) => {

        const filtered = searchText !== ''
            ? productsList.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()))
            : productsList;
        //Updating the state triggers a re-render
        setFilteredProducts(filtered);
    };

    const goToSelectIngredients = () => {
        navigation.navigate('Recipes', { screen: 'Ingredient Select' });
    }

    const toggleAnimationHide = () => {
        setModal(false);
        Animated.timing(animation, {
            toValue: 0, // Toggle between 0 and 1 
            duration: 250, // Animation duration in milliseconds
            useNativeDriver: false, // This is required for layout animations
        }).start();
    };
    const toggleAnimationToHalf = () => {
        setModal(true);
        Animated.timing(animation, {
            toValue: 0.5, // Toggle between 0 and 1
            duration: 250, // Animation duration in milliseconds
            useNativeDriver: false, // This is required for layout animations
        }).start();
    };
    const toggleAnimationFull = () => {
        setModal(true);
        Animated.timing(animation, {
            toValue: 1, // Toggle between 0 and 1
            duration: 500, // Animation duration in milliseconds
            useNativeDriver: false, // This is required for layout animations
        }).start();
    };
    const heightInterpolate = animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: ['0%', '60%', '70%'],
    });

    //! fix marronero for the modal staying visible after closing under the navbar
    const ScaleVertical = animation.interpolate({
        inputRange: [0, 0.1, 0.5, 1],
        outputRange: [0, 1, 1, 1],
    });

    const transformVertical = animation.interpolate({
        inputRange: [0, 0.1,0.5, 1],
        outputRange: [100, 0, 0, 0],
    });

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || expDate;
        setShowPicker(Platform.OS === 'ios'); // Only close if it's iOS platform
        setExpDate(currentDate);
        setShowPicker(!showPicker);
    };
    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const handleEdit = (product) => {
        toggleAnimationToHalf();
        setProductName(product.name);
        dateFormat = formatDateString(product.exp_date);
        setExpDate(dateFormat);
        setBrand(product.brand);
        setId(product.product_id);
        setProductUid(product.uuid);
    };
    const formatDateString = (inputDate) => {
        const [day, month, year] = inputDate.split('/');
        const formattedDate = new Date(`${year}-${month}-${day}`);
        return formattedDate;
    };
    const formatBack = (inputDate) => {
        const formattedDate = inputDate.toLocaleDateString('en-GB');
        return formattedDate;
    };
    const updateProducts = async () => {
        const newId = id;
        const newUuid = productUid;
        const newName = productName;
        const newBrand = brand;
        const newDate = formatBack(expDate);

        const response = await fetch(apiUrl + 'updateProducts', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                uuid: newUuid,
                product_id: newId,
                name: newName,
                brand: newBrand,
                exp_date: newDate,
            }),
        })

        toggleAnimationHide();
        getProducts();

    };

    const setGreen = (colourBlind) => {
        if (colourBlind === 0) {
            return '#7cffc0';
        } else if (colourBlind === 1) {
            return '#ffdfd2';
        } else if (colourBlind === 2) {
            return '#b0f0ff';
        }
    };
    const setRed = (colourBlind) => {
        if (colourBlind === 0) {
            return '#ff7c7c';
        } else if (colourBlind === 1) {
            return '#c39b73';
        } else if (colourBlind === 2) {
            return '#ff7a83';
        }
    };

    if (loading) {
        return (
            <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>
                <Header userObject={userObject} navigation={navigation} />
                <SearchBar onChangeText={handleChange} />
                <ScrollView style={ProductStyles.scrollView}>
                    <Image source={loadingSpinner} style={{ width: 40, height: 40, alignSelf: 'center', marginTop: '50%' }} />
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={ProductStyles.container}>
            <Header userObject={userObject} navigation={navigation} />
            <SearchBar onChangeText={handleChange} />
            <ScrollView style={ProductStyles.scrollView}>

                {filteredProducts.map((product) => (
                    <ProductContainer key={product.id} product={product} onProductDelete={getProducts} onProductEdit={handleEdit} onGenerateRecipe={goToSelectIngredients} userObject={userObject} />
                ))}

                <View style={{ marginBottom: '40%' }} />
            </ScrollView>

            {showPicker &&
                <View style={ProductStyles.holePage}>
                    <View style={ProductStyles.calendarIos}>
                        <DateTimePicker
                            mode='date'
                            display={Platform.OS === 'ios' ? 'inline' : 'default'}
                            value={expDate}
                            onChange={onChange}
                        ></DateTimePicker>
                    </View>
                </View>
            }

            <Animated.View style={[ProductStyles.ascendingBox, { height: heightInterpolate, transform: [{translateY: transformVertical}]}, !modal ? { borderWidth: 0 } : { borderWidth: 1 }]}>
                <Text style={ProductStyles.text}>Product Name</Text>
                <View style={ProductStyles.topPart}>
                    <TextInput style={ProductStyles.name} onFocus={() => toggleAnimationFull()} onBlur={() => toggleAnimationToHalf()} onChangeText={(textName) => setProductName(textName)} value={productName}></TextInput>
                    <Text style={[ProductStyles.text, { marginTop: 10 }]}>Product Brand</Text>
                    <TextInput style={ProductStyles.name} onFocus={() => toggleAnimationFull()} onBlur={() => toggleAnimationToHalf()} onChangeText={(textBrand) => setBrand(textBrand)} value={brand}></TextInput>
                    <Text style={[ProductStyles.text, { marginTop: 10 }]}>Expiration Date</Text>
                    <View style={ProductStyles.calendarWrap}>

                        <Text style={ProductStyles.calendarText}>{formatBack(expDate)}</Text>

                        {!showPicker &&
                            <TouchableHighlight style={ProductStyles.calendarButton} onPress={toggleDatePicker}>
                                <Image style={ProductStyles.icon} source={require('./assets/icons8-calendar-plus-100.png')} />
                            </TouchableHighlight>}
                    </View>
                </View>

                <View style={ProductStyles.buttonWrapper}>
                    <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ProductStyles.buttonBox, { backgroundColor: setGreen(userObject.colourBlind) }]} onPress={() => { updateProducts() }}>
                        <Text>Save</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ProductStyles.buttonBox, { backgroundColor: setRed(userObject.colourBlind) }]} onPress={() => { toggleAnimationHide() }}>
                        <Text>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
}
