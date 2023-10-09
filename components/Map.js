import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import MapboxGL from '@react-native-mapbox-gl/maps';


mapboxgl.accessToken = 'pk.eyJ1IjoiM3gzZTEiLCJhIjoiY2xuY3Y4aG9pMG10djJubHEyNjVyeWJhcCJ9.xiZLMHQgiodm7F9m5k-itQ';
// const Map = () => {
// //   return (
// //     <MapView
// //         style={tw`flex-1`}
// //         initialRegion={{
// //             latitude: 37.78825,
// //             longitude: -122.4324,
// //             latitudeDelta: 0.0922,
// //             longitudeDelta: 0.0421,
// //     }}
// //   />
// //   );

// export default Map;

// // const styles = StyleSheet.create({});
const Map = () => {
    return (
      <View style={tw`flex-1`}>
        <MapboxGL.MapView
          styleURL={MapboxGL.StyleURL.Street}
          zoomLevel={15}
          centerCoordinate={[12.554729, 55.70651]}
          style={styles.map}
        >
          {/* Add map features, markers, etc. here */}
        </MapboxGL.MapView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    map: {
      flex: 1,
    },
  });
  
  export default Map;
  