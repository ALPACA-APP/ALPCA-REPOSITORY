import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import the pages
import RecipeStack from './RecipeStack';
import Products from './Products';
import ProductSelect from './ProductSelect';
import ReciperViewer from './RecipeViewer';
import AddProduct from './AddProduct';
import UserSettings from './UserSettings';
import MainView from './MainView';
import { Animated, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';


const screens = [
    {
        name: 'Scan',
        component: AddProduct,
        icon: require('./assets/icons8-barcode-64.png'),
    },
    {
        name: 'Products',
        component: Products,
        icon: require('./assets/icons8-rice-bowl-filled-100.png'),
    },
    {
        name: 'Recipes',
        component: RecipeStack,
        icon: require('./assets/icons8-cookbook-filled-96.png'),
    },
    {
        name: 'UserSettings',
        component: UserSettings,
        icon: require('./assets/icons8-settings-filled-100.png'),
    },
];


const bottomTabs = createBottomTabNavigator();




export default function MainNavigation() {

    const selectedColor = 'white';
    const unselectedColor = 'black';


    let TabIconStyles = (isFocused, Icon) => (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isFocused ? '#000' : '#fff',
            borderRadius: 100,
            padding: 12,
            flexDirection:'column'

        }}>
            <Animated.View style={{
                backgroundColor: isFocused ? '#000' : 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
                bottom: "-60%",
                position: 'absolute',
                width: "70%",
                height: 5,
                borderRadius: 10,
            }} />

            <Image
                source={Icon}
                style={{
                    width: 35,
                    height: 35,
                    tintColor: isFocused ? selectedColor : unselectedColor,
                    backgroundColor: 'transparent',
                }}
            />
        </View>

    );

    const screenOptionStyle = {
        tabBarStyle: [{
            height: '10%',
            width: '90%',
            marginLeft: '5%',
            backgroundColor: '#fff',
            borderRadius: 20,
            paddingRight: 10,
            paddingLeft: 10,
            position: 'absolute',
            bottom: 15,
            justifyContent: 'space-between',

            // IOS shadow 
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,

            // Android shadow
            elevation: 5,


        }],
    };

    return (

        <bottomTabs.Navigator
            screenOptions={screenOptionStyle}
            options={{
                tabBarShowLabel: false,
                headerShown: false,
            }} initialRouteName="Products">
            {screens.map((screen, index) => (
                <bottomTabs.Screen
                    name={screen.name}
                    component={screen.component}
                    options={{
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({ focused }) => TabIconStyles(focused, screen.icon),
                        tabBarButton: (props) => (
                            <TouchableOpacity
                                activeOpacity={0.5}
                                {...props}
                                onPress={() => {
                                    props.onPress();
                                }}
                            />
                        ),
                    }}
                    key={index}
                />
            ))}

        </bottomTabs.Navigator>

    );



}