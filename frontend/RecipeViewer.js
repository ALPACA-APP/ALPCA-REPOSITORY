import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import navigation from '@react-navigation/native';
import Header from "./Header";
import RecipeViewerStyles from './RecipeViewerStyles';

export default RecipeViewer = ({ route, navigation }) => {
    const { recipeId, userObject } = route.params;

    const goBack = () => {
        navigation.navigate('Recipes View');
    }

    return (
        <SafeAreaView style={{ height: '100%',  backgroundColor:'white'}}>
            
            <Header isLogout="false" onGoBack={() => { goBack(); }} userObject={userObject} />
            <View>
                <Text>RecipeViewer</Text>
                <Text>Recipe ID: {recipeId}</Text>
                <Text>User UUID: {userObject.uuid}</Text>
            </View>
            
            
        </SafeAreaView>
    );
}