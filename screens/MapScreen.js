import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'tailwind-react-native-classnames';
import Map from "../components/Map";
import MapView from 'react-native-maps';
// import { mapboxgl } from "@react-native-mapbox-gl/maps";
// mapboxgl.accessToken = 'pk.eyJ1IjoiM3gzZTEiLCJhIjoiY2xuY3Y4aG9pMG10djJubHEyNjVyeWJhcCJ9.xiZLMHQgiodm7F9m5k-itQ';

const MapScreen = () => {
  return (
    <View style={tw`p-10`}>
      <Text>here is the google MapScreen</Text>

      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}></View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({})
