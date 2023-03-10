import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from '../assets'
import { Image } from 'react-native'

const Discover = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


    return (
        <SafeAreaView className="flex-1 mt-6 bg-white relative">

            <View className="flex-row items-center justify-between px-5">
                <View>
                    <Text className="text-[#00BCB9] text-4xl font-semibold">Discover</Text>
                    <Text className="text-gray-700 text-2xl font-semibold">the beauty today</Text>
                </View>
                <View className="h-12 w-12 shadow-lg flex justify-center items-center">
                    <Image source={Avatar} className="h-full w-full rounded-md object-cover" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Discover