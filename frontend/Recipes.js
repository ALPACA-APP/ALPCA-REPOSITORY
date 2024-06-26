import {
    SafeAreaView,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    TouchableHighlight,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { CONSTANTS } from './global.js';
import { useFocusEffect } from '@react-navigation/native';


import Header from "./Header";
import SearchBar from "./SearchBar";
import arrow from "./assets/icons8-right-arrow-100.png";
import trashCan from "./assets/icons8-basura-512.png";
import loadingSpinner from "./assets/SpinLoader.gif";

const Recipes = ({ navigation }) => {

    const apiUrl = CONSTANTS.API_URL;

    const endpoint = "GetRecipes/";

    const [uuid, setUuid] = useState('');
    const [searchText, setSearchText] = useState('');
    const [loading, setLoading] = useState(true);
    const [userObject, setUserObject] = useState('');

    const [showConfirmDelete, setShowConfirmDelete] = useState(false);
    const [currentPendingDelete, setCurrentPendingDelete] = useState('');
    const [recipeIdToDelete, setRecipeIdToDelete] = useState(0);

    const [recipes, setRecipes] = useState([
        {
            "uuid": "72165bb3-14e1-4b5e-9dbf-4316d26a9941",
            "recipe_id": 0,
            "title": "Chicken and Egg Fried Rice",
            "content": "Chicken and Egg Fried Rice\n\nIngredients:\n\n2 chicken breasts, diced\n3 eggs, beaten\n2 cups cooked rice (preferably day-old)\n2 tablespoons vegetable oil\n1 onion, diced\n2 cloves garlic, minced\n1 cup mixed vegetables (such as peas, carrots, and bell peppers)\nSoy sauce, to taste\nSalt and pepper, to taste\nOptional seasonings: ginger powder, chili flakes, green onions for garnish\nInstructions:\n\nPrep Ingredients:\n\nDice the chicken breasts into small cubes.\nBeat the eggs in a bowl and set aside.\nDice the onion, mince the garlic, and prepare any additional vegetables.\nCook Chicken:\n\nHeat 1 tablespoon of vegetable oil in a large skillet or wok over medium-high heat.\nAdd the diced chicken to the skillet and season with salt, pepper, and any optional seasonings like ginger powder or chili flakes.\nCook the chicken until it's browned and cooked through, then remove it from the skillet and set it aside.\nScramble Eggs:\n\nIn the same skillet, add a little more oil if needed.\nPour the beaten eggs into the skillet and scramble them until they are fully cooked.\nRemove the scrambled eggs from the skillet and set them aside with the cooked chicken.\nPrepare Rice:\n\nIf the rice is not already cooked, cook it according to package instructions. For best results, use day-old rice as it fries up better.\nOnce the rice is ready, add it to the skillet and break up any clumps with a spatula.\nCombine Ingredients:\n\nAdd the diced onion and minced garlic to the skillet with the rice. Cook until the onions are translucent and fragrant.\nStir in the mixed vegetables and cook until they are tender.\nAdd Chicken and Eggs:\n\nReturn the cooked chicken and scrambled eggs to the skillet with the rice and vegetables.\nDrizzle soy sauce over the mixture, starting with a few tablespoons and adjusting to taste.\nStir well to combine all the ingredients evenly and heat through.\nFinal Touches:\n\nTaste and adjust seasoning with additional salt, pepper, or soy sauce if needed.\nGarnish with sliced green onions if desired.\nServe:\n\nTransfer the chicken and egg fried rice to serving plates or bowls.\nEnjoy your delicious homemade meal!"
        },
        {
            "uuid": "72165bb3-14e1-4b5e-9dbf-4316d26a9941",
            "recipe_id": 1,
            "title": "Spaghetti Carbonara",
            "content": "Spaghetti Carbonara\n\nIngredients:\n\n8 ounces spaghetti\n2 large eggs\n1 cup grated Pecorino Romano cheese\n4 slices pancetta, chopped\n2 cloves garlic, minced\nSalt and pepper, to taste\nOptional: chopped parsley for garnish\nInstructions:\n\nCook Pasta:\n\nBring a large pot of salted water to a boil. Add the spaghetti and cook according to package instructions until al dente.\nWhile the pasta is cooking, prepare the sauce.\nPrepare Sauce:\n\nIn a bowl, whisk together the eggs, grated Pecorino Romano cheese, and a generous pinch of black pepper. Set aside.\nCook Pancetta:\n\nIn a large skillet, cook the chopped pancetta over medium heat until it's browned and crispy.\nAdd the minced garlic to the skillet with the pancetta and cook for an additional 1-2 minutes until fragrant.\nCombine Ingredients:\n\nOnce the pasta is cooked, reserve 1 cup of the pasta water and drain the spaghetti.\nAdd the drained spaghetti to the skillet with the pancetta and garlic. Toss to combine.\nAdd the egg and cheese mixture to the skillet with the spaghetti and toss to coat the pasta evenly.\nIf the sauce seems too thick, add a little of the reserved pasta water to thin it out.\nFinal Touches:\n\nTaste and adjust seasoning with salt and pepper as needed.\nGarnish with chopped parsley if desired.\nServe:\n\nTransfer the spaghetti carbonara to serving plates or bowls.\nEnjoy your delicious homemade meal!"
        },
        {
            "uuid": "72165bb3-14e1-4b5e-9dbf-4316d26a9941",
            "recipe_id": 2,
            "title": "Chicken and Egg Fried Rice",
            "content": "Chicken and Egg Fried Rice\n\nIngredients:\n\n2 chicken breasts, diced\n3 eggs, beaten\n2 cups cooked rice (preferably day-old)\n2 tablespoons vegetable oil\n1 onion, diced\n2 cloves garlic, minced\n1 cup mixed vegetables (such as peas, carrots, and bell peppers)\nSoy sauce, to taste\nSalt and pepper, to taste\nOptional seasonings: ginger powder, chili flakes, green onions for garnish\nInstructions:\n\nPrep Ingredients:\n\nDice the chicken breasts into small cubes.\nBeat the eggs in a bowl and set aside.\nDice the onion, mince the garlic, and prepare any additional vegetables.\nCook Chicken:\n\nHeat 1 tablespoon of vegetable oil in a large skillet or wok over medium-high heat.\nAdd the diced chicken to the skillet and season with salt, pepper, and any optional seasonings like ginger powder or chili flakes.\nCook the chicken until it's browned and cooked through, then remove it from the skillet and set it aside.\nScramble Eggs:\n\nIn the same skillet, add a little more oil if needed.\nPour the beaten eggs into the skillet and scramble them until they are fully cooked.\nRemove the scrambled eggs from the skillet and set them aside with the cooked chicken.\nPrepare Rice:\n\nIf the rice is not already cooked, cook it according to package instructions. For best results, use day-old rice as it fries up better.\nOnce the rice is ready, add it to the skillet and break up any clumps with a spatula.\nCombine Ingredients:\n\nAdd the diced onion and minced garlic to the skillet with the rice. Cook until the onions are translucent and fragrant.\nStir in the mixed vegetables and cook until they are tender.\nAdd Chicken and Eggs:\n\nReturn the cooked chicken and scrambled eggs to the skillet with the rice and vegetables.\nDrizzle soy sauce over the mixture, starting with a few tablespoons and adjusting to taste.\nStir well to combine all the ingredients evenly and heat through.\nFinal Touches:\n\nTaste and adjust seasoning with additional salt, pepper, or soy sauce if needed.\nGarnish with sliced green onions if desired.\nServe:\n\nTransfer the chicken and egg fried rice to serving plates or bowls.\nEnjoy your delicious homemade meal!"
        }
    ]);

    const [searchResults, setSearchResults] = useState(recipes);

    const InitView = async () => {
        setLoading(true);
        let userStored;
        try {
            const userStoredString = await AsyncStorage.getItem('user');
            userStored = JSON.parse(userStoredString);
            if (userStored.uuid !== null) {
                setUuid("" + userStored.uuid);
                setUserObject(userStored);
            }
        } catch (e) {
            console.log(e);
        }

        //fetch all the recipes
        try {
            const response = await fetch(apiUrl + endpoint + userStored.uuid);
            const data = await response.json();
            setRecipes(data);
            setSearchResults(data);
        } catch (error) {
            console.log("[VIEW RECIPE]:" + error);
        }


        setLoading(false);
    }


    useEffect(() => {
        InitView();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            InitView();
        }, [])
    );



    const searchSubmit = (text) => {
        const results = recipes.filter((recipe) => {
            return recipe.title.toLowerCase().includes(text.toLowerCase());
        });
        setSearchResults(results);
    }

    const setText = (text) => {
        setSearchText(text);
        searchSubmit(text);
    }

    const openRecipe = (id) => {
        console.log("opening recipe with id: " + id);
        navigation.navigate('Recipe Viewer', { recipeId: id, userObject: userObject });
    }

    const deleteRecipe = async (id) => {
        
        try {
            const response = await fetch(apiUrl + 'DeleteRecipe/' + userObject.uuid + '/' + id, {
                method: 'DELETE',
            });
            setShowConfirmDelete(false);
            InitView();
        } catch (error) {
            console.log("[VIEW RECIPE]:" + error);
        }
    }

    const limitDisplayChars = (text, limit) => {
        if (text.length > limit) {
            return text.substring(0, limit) + "...";
        }
        return text;
    }

    const RecipeContainer = (props) => {
        return (
            <TouchableOpacity style={RecipeStyles.recipe} activeOpacity={0.3} onPress={() => { openRecipe(props.id) }}>
                <Image source={arrow} style={{ width: 30, height: 30 }} />
                <Text style={RecipeStyles.BoldInteract}>{limitDisplayChars(props.title, 20)}</Text>
                <TouchableOpacity activeOpacity={0.2} onPress={() => { showDeleteRecipeModal(props.id, props.title) }}>
                    <Image source={trashCan} style={RecipeStyles.trashCan} />
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }

    const generateRecipe = () => {
        navigation.navigate('Ingredient Select');
    }

    if (loading) {
        return (
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <Header userObject={userObject} navigation={navigation} />
                <SearchBar onSearchSubmit={searchSubmit} onChangeText={setText} />
                <ScrollView style={RecipeStyles.scrollView}>
                    <Image source={loadingSpinner} style={{ width: 40, height: 40, alignSelf: 'center', marginTop: '50%' }} />
                </ScrollView>
            </View>
        );
    }

    const showDeleteRecipeModal = (id, title) => {
        setCurrentPendingDelete(title);
        setRecipeIdToDelete(id);
        setShowConfirmDelete(true);
    }


    return (

        <>
            {showConfirmDelete &&
                <TouchableHighlight activeOpacity={1} underlayColor={'rgba(0,0,0,0.6)'} style={RecipeStyles.darkBackground} onPress={() => { setShowConfirmDelete(false) }}>
                    <View style={RecipeStyles.confirmBox}>
                        <Text style={RecipeStyles.logoutText}>Are you sure you want to delete: {currentPendingDelete}?</Text>
                        <View style={RecipeStyles.buttonsWrapper}>
                            <TouchableHighlight style={RecipeStyles.confirmButton} onPress={() => { deleteRecipe(recipeIdToDelete) }}>
                                <Text style={RecipeStyles.confirmText}>Delete</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={RecipeStyles.cancelButton} onPress={() => { setShowConfirmDelete(false) }}>
                                <Text style={RecipeStyles.cancelText}>Cancel</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </TouchableHighlight>
            }

            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <Header userObject={userObject} navigation={navigation} />
                <SearchBar onSearchSubmit={searchSubmit} onChangeText={setText} />
                <ScrollView style={RecipeStyles.scrollView}>
                    <TouchableOpacity style={RecipeStyles.AddButton} onPress={() => { generateRecipe(); }}>
                        <Text style={RecipeStyles.BoldInteract}>+ Create new recipe</Text>
                    </TouchableOpacity>
                    {searchResults.map((recipe) => {
                        return (
                            <RecipeContainer key={recipe.recipe_id} id={recipe.recipe_id} title={recipe.title} />
                        );
                    })}
                    <View style={{ marginBottom: '25%' }} />
                </ScrollView>

            </View >
        </>
    );
}

const RecipeStyles = StyleSheet.create({
    BoldInteract: {
        fontSize: 20,
        textAlign: 'center', // Center the text horizontally
        flex: 1, // Take up all available space
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        textAlignVertical: 'center', // Center vertically
        fontFamily: "lexend-bold",
    },
    AddButton: {
        backgroundColor: "transparent",
        borderWidth: 2,
        flexDirection: "row",
        borderColor: "#000",
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        borderStyle: "dashed",
        height: 80,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    scrollView: {
        width: "100%",
        height: "90%",
        padding: 10,
    },
    recipe: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: 20,
        borderColor: "#848484",
        borderWidth: 2,
        padding: 10,
        marginBottom: 10,
        width: "100%", // Set the width to take up all of the available screen width
        height: 100,

        // drop shadow IOS
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // drop shadow Android
        elevation: 5,
    },
    trashCan: {
        width: 35,
        height: 35,
        tintColor: "black"
    },

    darkBackground: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 20,
    },
    confirmBox: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        paddingBottom: 30,
        paddingTop: 30,
        width: '80%',
        position: 'absolute',
        zIndex: 30,
    },
    logoutText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonsWrapper: {
        marginTop: 20,
        flexDirection: 'column',
    },
    confirmButton: {
        color: '#000',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        alignItems: 'center',
    },
    confirmText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cancelButton: {
        backgroundColor: 'black',
        color: '#fff',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center',
    },
    cancelText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

});


export default Recipes;