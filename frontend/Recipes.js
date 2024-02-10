import { SafeAreaView, Button } from "react-native";

const Recipes = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Button title="This Recipes" onPress={() => { navigation.replace("MainView") }} />
        </SafeAreaView>
    );
}
export default Recipes;