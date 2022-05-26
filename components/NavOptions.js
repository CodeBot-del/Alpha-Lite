import {FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {useNavigation} from "@react-navigation/native";


const data = [
    {
        id: "123",
        title: "Start",
        image: "",
        screen: "MainScreen",
    },
    {
        id: "456",
        title: "Donate to the Project",
        image: "",
        screen: "DonateScreen",
    },
]

const NavOptions = () => {
    const navigation = useNavigation();
  return (
    <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
            <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)}
                style={tw`pl-6`}
            >
                <View>
                    <Text style={tw`p-5 m-2 text-lg font-semibold`}>{item.title}</Text>
                </View>
                
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions
