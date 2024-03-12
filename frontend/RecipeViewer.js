import React from 'react';
import { View, Text } from 'react-native';
import RecipeViewerStyles from './RecipeViewerStyles';

export default RecipeViewer = ({ route }) => {
    const { recipeId, userObject } = route.params;

    return (
        <View>
            <Text>RecipeViewer</Text>
            <Text>Recipe ID: {recipeId}</Text>
            <Text>User UUID: {userObject.uuid}</Text>
            
        </View>
    );
}