import React, { useEffect, useState, useRef } from "react";
import { View, SafeAreaView, TextInput, Image, TouchableHighlight, Animated, Text, LayoutAnimation } from 'react-native';
import Header from "./Header";
import RecipeViewerStyles from './RecipeViewerStyles';
import { ScrollView } from "react-native-gesture-handler";
import { CONSTANTS } from './global.js';


import editIcon from "./assets/icons8-editar-512.png";
import saveIcon from "./assets/icons8-guardar-100.png";
import loader from "./assets/SpinLoader.gif";

export default RecipeViewer = ({ route, navigation }) => {
    const { recipeId, userObject } = route.params;
    const [recipe, setRecipe] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [renderIcon, setRenderIcon] = useState(editIcon);
    const [isLoading, setIsLoading] = useState(false);

    const toggleEditSmoothAnim = useRef(new Animated.Value(0)).current;
    const toggleBoxesSmoothAnim = useRef(new Animated.Value(0)).current;

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


    /*
    ? implement accesibility feature here without hardcoding into the array
    ? but rather implemente using a seperate file that contains the accesible styles
    */

    const accesibilitySizesContent = [20, 25, 28];
    const accesibilitySizesTitle = [25, 28, 32];

    const accSizeContent = {
        //* here you can change the font size when the accesibility is implemented
        fontSize: accesibilitySizesContent[0], //* you can change the index based on the response from the db.
    }

    const accSizeTittle = {
        // here you can change the font size when the accesibility is implemented
        fontSize: accesibilitySizesTitle[0], // you can change the index based on the response from the db.
    }

    const animateModeSwitch = async () => {
        const duration = 400;
        Animated.timing(toggleBoxesSmoothAnim, {
            toValue: isEditing ? 1 : 0,
            duration: duration,
            useNativeDriver: false
        }).start();

        if (isEditing) {
            Animated.timing(toggleEditSmoothAnim, {
                toValue: 0.5,
                duration: duration / 2,
                useNativeDriver: false
            }).start(() => {
                setRenderIcon(saveIcon);
                Animated.timing(toggleEditSmoothAnim, {
                    toValue: 1,
                    duration: duration / 2,
                    useNativeDriver: false
                }).start();

            });

        } else {

            await updateRecipe();
            Animated.timing(toggleEditSmoothAnim, {
                toValue: 0.5,
                duration: duration / 2,
                useNativeDriver: false
            }).start(() => {
                setRenderIcon(editIcon);
                Animated.timing(toggleEditSmoothAnim, {
                    toValue: 0,
                    duration: duration / 2,
                    useNativeDriver: false
                }).start();
            });
        }
    }

    const updateRecipe = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(apiUrl + 'UpdateRecipe/' + userObject.uuid + '/' + recipeId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: recipe.title, content: recipe.content })
            });
            if (!response.ok) {
                throw new Error('Error updating recipe');
            }
        } catch (error) {
            console.error("[recipe viewer] Error: " + error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        animateModeSwitch();
    }, [isEditing]);


    const animatedSizedStyle = {
        // animate the scale of the image
        transform: [
            {
                scale: toggleEditSmoothAnim.interpolate({
                    inputRange: [0, 0.1, 0.5, 0.9, 1],
                    outputRange: [1, 1.2, 0, 1.2, 1]
                })
            }
        ]
    }

    const AnimTextInputViewStyle = {
        borderStyle: "dashed",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: toggleBoxesSmoothAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['transparent', '#555f'],
        }),
        backgroundColor: toggleBoxesSmoothAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['transparent', '#eeef']
        }),

    }

    return (
        <View style={{ height: '100%', backgroundColor: 'white' }}>
            <Header isLogout="false" onGoBack={() => { goBack(); }} userObject={userObject} />
            <ScrollView style={RecipeViewerStyles.scrollContainer}>
                <Animated.View style={[RecipeViewerStyles.titleContainer, AnimTextInputViewStyle]}>
                    <TextInput
                        multiline={true}
                        editable={isEditing}
                        style={[RecipeViewerStyles.titleText, accSizeTittle]}
                        onChangeText={(text) => { setRecipe({ ...recipe, title: text }); }}
                    >{recipe.title}</TextInput>
                </Animated.View>
                <Animated.View style={[AnimTextInputViewStyle]}>
                    <TextInput
                        multiline={true}
                        editable={isEditing}
                        style={[RecipeViewerStyles.contentText, accSizeContent]}
                        onChangeText={(text) => { setRecipe({ ...recipe, content: text }); }}
                    >{recipe.content}</TextInput>
                </Animated.View>
                <View style={{ marginBottom: '55%' }} />
            </ScrollView>

            <TouchableHighlight style={RecipeViewerStyles.floatingAcction} onPress={() => { setIsEditing(!isEditing) }}>
                <Animated.Image source={renderIcon} style={[RecipeViewerStyles.floatingAcctionIcon, animatedSizedStyle]} />
            </TouchableHighlight>

            {isLoading && <View style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={loader} style={{ width: 40, height: 40 }} />
                <Text style={{ marginTop: 10, color: 'white', fontSize: 25 }}>saving</Text>
            </View>}
        </View>
    );
}
