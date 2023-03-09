import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <SafeAreaView className="flex-1 mt-5 relative">
            <View className="flex-row px-5 mt-5 items-center space-x-2">
                <View className="h-12 w-12 bg-black rounded-full justify-center items-center">
                    <Text className="text-[#00BCB9] text-xl font-semibold">Go</Text>
                </View>
                <Text className="text-xl font-semibold">Travel</Text>
            </View>
            <View className="px-5 mt-5 space-y-3">
                <Text className="text-3xl font-semibold">Find your best tour with us</Text>
                <Text className="text-2xl font-semibold text-[#00BCB9] ">Enjoy every single moments</Text>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, ex?</Text>
            </View>
            <View className="h-[350px] w-[350px] bg-[#00BCB9] rounded-full absolute bottom-16 -right-36"></View>
            <View className="h-[350px] w-[350px] bg-[#E99265] rounded-full absolute -bottom-36 -left-36"></View>
        </SafeAreaView>

    )
}

export default Home