import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import the pages
import Recipes from './Recipes';
import IngredientSelect from './IngredientSelect';
import RecipeViewer from './RecipeViewer';

const Stack = createStackNavigator();

export default function RecipeStack() {
    return (
        <Stack.Navigator initialRouteName="Recipes View">
            <Stack.Screen options={{ headerShown: false }} name="Recipes View" component={Recipes} />
            <Stack.Screen options={{ headerShown: false }} name="Ingredient Select" component={IngredientSelect} />
            <Stack.Screen options={{ headerShown: false }} name="Recipe Viewer" component={RecipeViewer} />
        </Stack.Navigator>
    );
}