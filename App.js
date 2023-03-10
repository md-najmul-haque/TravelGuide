
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Discover from './screens/Discover';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Discover" component={Discover} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
