import { SafeAreaView, Button } from "react-native";


export default Product = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Button title="Log Out" onPress={() => { navigation.replace("MainView")}} />
        </SafeAreaView>
    );
}
