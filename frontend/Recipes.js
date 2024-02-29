import { SafeAreaView, Button } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


import Header from "./Header";

const Recipes = () => {

    const [uuid, setUuid] = useState('');

    const getUuid = async () => {
        try {
            const value = await AsyncStorage.getItem('UUID');
            if (value !== null) {
                setUuid("" + value);
            }
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        getUuid();
    }, []);

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Header />
            <Button title="This Recipes" onPress={() => { navigation.replace("MainView") }} />
        </SafeAreaView>
    );
}
export default Recipes;