import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className='flex-1 justify-center items-center' >
        <Text className="text-red-500">Hello Najmul</Text>
        <StatusBar style="auto" />
      </SafeAreaView >
    </TailwindProvider>
  );
}
