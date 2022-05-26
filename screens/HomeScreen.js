import { StyleSheet, Text, View, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{width: '100%', height: '100%'}}>
            <ImageBackground 
            resizeMode='cover'
            style={{width: '100%', height: '100%'}}
            source={require('../assets/alphabg.png')}
            >   
                <Text style={tw`mt-8 text-lg text-white p-2`}>Alpha Lite</Text>
                <TouchableOpacity style={tw`h-full`}
                    onPress={() => navigation.navigate("MainScreen")}
                >
                    <Text style={[tw`text-lg text-white p-2 font-bold`, {fontSize: 30, top:500, textAlign: 'center',}]}>Start</Text>

                </TouchableOpacity>
            </ImageBackground>
            {/* <NavOptions/> */}
        </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({})