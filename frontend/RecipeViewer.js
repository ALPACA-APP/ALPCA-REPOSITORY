import React from 'react';
import { View, Text } from 'react-native';

export default RecipeViewer = ({ route }) => {
    const { recipeId } = route.params;

    return (
        <View>
            <Text>RecipeViewer</Text>
            <Text>Recipe ID: {recipeId}</Text>
        </View>
    );
}