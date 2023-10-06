import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions'
import { MAPBOX_ACCESS_TOKEN } from "@env";
import MapboxPlacesAutocomplete from "react-native-mapbox-places-autocomplete";
import { Config } from "react-native-config";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <View style={tw`p-5`}>
        <Image
        style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
        }}
        source={{
            uri: "https://links.papareact.com/gzs",
        }}
        />
        <MapboxPlacesAutocomplete
        id="origin"
        placeholder="Where to mate?"
        debounce={400}
        accessToken={Config.MAPBOX_PUBLIC_TOKEN} // MAPBOX_ACCESS_TOKEN is stored in .env root project folder
        onPlaceSelect={(data) => {
          dispatch(setOrigin(data));
          dispatch(setDestination(null));
        }}
        onClearInput={({ id }) => {
          id === "origin" && dispatch(setOrigin(null));
        }}
        countryId="id"
        containerStyle={{
          marginBottom: 12,
          flex: 0,
        }}
      // placeholder="Where to mate?"
      // //accessToken={Config.MAPBOX_PUBLIC_TOKEN} // MAPBOX_ACCESS_TOKEN is stored in .env root project folder
      // styles={{
      //   container: {
      //     flex: 0,
      //   },
      //   textInput: {
      //     fontSize: 18,
      //   },
      // }}
      // query={{
      //   key: Config.MAPBOX_PUBLIC_TOKEN,
      // }}

    />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue",

    },
});