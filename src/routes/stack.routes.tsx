import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

import { Home } from "../Home"; 
import { Details } from "../Details";

export function StackRoutes(){
    return(
        <Navigator>

            <Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Screen
                name='Details'
                component={Details}
            />

        </Navigator>
    );
};