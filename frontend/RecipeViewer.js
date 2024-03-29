import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView} from 'react-native';
import Header from "./Header";
import RecipeViewerStyles from './RecipeViewerStyles';
import { ScrollView } from "react-native-gesture-handler";
import { CONSTANTS } from './global.js';

export default RecipeViewer = ({ route, navigation }) => {
    const { recipeId, userObject } = route.params;
    const [recipe, setRecipe] = useState({});

    const apiUrl = CONSTANTS.API_URL;

    const goBack = () => {
        navigation.navigate('Recipes View');
    }

    const getRecipe = async () => {
        try {
            const response = await fetch(apiUrl + 'GetRecipe/' + userObject.uuid + '/' + recipeId);
            const data = await response.json();
            setRecipe(data[0]);
        } catch (error) {
            console.error("[recipe viewer] Error: " + error);
        }
    }

    useEffect(() => {
        if (userObject && userObject.uuid) {
            getRecipe();
        }
    }, [userObject]); // Execute only when userObject changes

    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: 'white' }}>
            <Header isLogout="false" onGoBack={() => { goBack(); }} userObject={userObject} />
            <ScrollView style={RecipeViewerStyles.scrollContainer}>
                <View style={RecipeViewerStyles.titleContainer}>
                    <Text style={RecipeViewerStyles.titleText}>{recipe.title}</Text>
                </View>
                <Text>{recipe.content}</Text>
                <View style={{ marginBottom: '25%' }} />
            </ScrollView>
        </SafeAreaView>
    );
}
