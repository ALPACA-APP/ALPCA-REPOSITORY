import { SafeAreaView, ScrollView, View, Image, Animated, Text, TextInput, Platform} from "react-native";
import React, { useState, useEffect} from "react";
import { useFocusEffect } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import ProductStyles from "./ProductStyles";
import SearchBar from "./SearchBar";
import ProductContainer from "./ProductContainer";
import Header from "./Header";
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

    const apiUrl = 'https://thoughtful-cod-sweatshirt.cyclic.app';
    //const apiUrl = 'http://192.168.1.58:3000';

export default Product = ({ navigation }) => {

    const [productsList, setProductList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [uuid, setUuid] = useState('');
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
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

    //EDIT
    const [animation] = useState(new Animated.Value(0)); // Initialize animated value
    const [productName, setProductName] = useState(''); // Initialize state variable
    const [brand, setBrand] = useState(''); // Initialize state variable
    const [expDate, setExpDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false); // State to manage date picker visibility
    const [modal, setModal] = useState(false);

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
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || expDate;
        setShowPicker(Platform.OS === 'ios'); // Only close if it's iOS platform
        setExpDate(currentDate);
        setShowPicker(!showPicker);
    };
    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const handleEdit = (product) =>{
        console.log(product.exp_date)
        toggleAnimationToHalf();
        setProductName(product.name);
        dateFormat = formatDateString(product.exp_date);
        console.log(dateFormat);
        setExpDate(dateFormat);
        setBrand(product.brand);
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

    return (
        <SafeAreaView style={ProductStyles.container}>
            <Header />

            <SearchBar onChangeText={handleChange} />

            <ScrollView style={ProductStyles.scrollView}>

                {filteredProducts.map((product) => (
                    <ProductContainer key={product.id} product={product} onProductDelete={getProducts} onProductEdit={handleEdit} onGenerateRecipe={goToSelectIngredients } />
                ))}

                <View style={{ marginBottom: '25%' }} />
            </ScrollView>
            {loading && <View style={ProductStyles.loaderWrapper}>
                <Image style={ProductStyles.loader} source={require('./assets/SpinLoader.gif')} />
            </View>}

            { showPicker &&
                <View style={ProductStyles.holePage}>
                <View style={ProductStyles.calendarIos}>
                    <DateTimePicker
                        mode = 'date'
                        display={Platform.OS === 'ios' ? 'inline' : 'default'}
                        value = {expDate}
                        onChange = {onChange}
                    ></DateTimePicker>
                </View> 
                </View>
            }
 
            <Animated.View style={[ProductStyles.ascendingBox, { height: heightInterpolate }, !modal ? {borderWidth: 0} : {borderWidth: 1}]}>
                <Text style={ProductStyles.text}>Product Name</Text>
                <View style={ProductStyles.topPart}>
                <TextInput style={ProductStyles.name} onFocus={() => toggleAnimationFull()} onBlur={() => toggleAnimationToHalf()} onChangeText={(textName) => setProductName(textName)} value={productName}></TextInput>
                <Text style={[ProductStyles.text, {marginTop:10}]}>Product Brand</Text>
                <TextInput style={ProductStyles.name} onFocus={() => toggleAnimationFull()} onBlur={() => toggleAnimationToHalf()} onChangeText={(textBrand) => setBrand(textBrand)} value={brand}></TextInput>
                <Text style={[ProductStyles.text, {marginTop:10}]}>Expiration Date</Text>
                <View style={ProductStyles.calendarWrap}>
                
                    <Text style={ProductStyles.calendarText}>{formatBack(expDate)}</Text>
                    
                    {!showPicker &&
                    <TouchableHighlight style={ProductStyles.calendarButton} onPress={toggleDatePicker}>
                    <Image style={ProductStyles.icon} source={require('./assets/icons8-calendar-plus-100.png')} />
                    </TouchableHighlight>}
                </View>
                </View>

                <View style={ProductStyles.buttonWrapper}> 
                <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ProductStyles.buttonBox, {backgroundColor:'#7cffc0'}]} onPress={() => {/*PUT FUNCTION HERE*/ }}>
                    <Text style={ProductStyles.buttonOption}>Save</Text>
                </TouchableHighlight> 
                <TouchableHighlight underlayColor='rgba(20,20,20,0.25)' style={[ProductStyles.buttonBox, {backgroundColor: '#ff7c7c'}]} onPress={() => {toggleAnimationHide() }}>
                    <Text style={ProductStyles.buttonOption}>Cancel</Text>
                </TouchableHighlight>
                </View>
            </Animated.View>
        </SafeAreaView>
    );
}
