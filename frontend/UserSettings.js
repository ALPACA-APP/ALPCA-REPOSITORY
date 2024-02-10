import { SafeAreaView, Button } from "react-native";

export default UserSettings = () => {
    return (
        <SafeAreaView style={{ height: '100%' }}>
            <Button title="This Settings" onPress={() => { navigation.replace("MainView") }} />
        </SafeAreaView>
    );
}
