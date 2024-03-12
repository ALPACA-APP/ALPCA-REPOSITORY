import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView} from 'react-native';
import Header from "./Header";
import RecipeViewerStyles from './RecipeViewerStyles';

export default RecipeViewer = ({ route, navigation }) => {
    const { recipeId, userObject } = route.params;
    const [recipe, setRecipe] = useState({});

    //const apiUrl = "https://thoughtful-cod-sweatshirt.cyclic.app/api/"
    const apiUrl = "http://10.90.1.133:3000/api/";

    const goBack = () => {
        navigation.navigate('Recipes View');
    }

    const getRecipe = async () => {
        try {
            const response = await fetch(apiUrl + 'GetRecipe/' + userObject.uuid + '/' + recipeId);
            const data = await response.json();
            setRecipe(data[0]);
        } catch (error) {
            console.error(error);
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
            <View>
                <Text>RecipeViewer</Text>
                <Text>Recipe ID: {recipeId}</Text>
                <Text>User UUID: {userObject.uuid}</Text>
                <Text>Recipe Name: {recipe.title}</Text>
                <Text>Recipe Content: {recipe.content}</Text>
            </View>
        </SafeAreaView>
    );
}
