import { SafeAreaView, Button } from "react-native";
import Header from "./Header";

const Recipes = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Header />
            <Button title="This Recipes" onPress={() => { navigation.replace("MainView") }} />
        </SafeAreaView>
    );
}
export default Recipes;