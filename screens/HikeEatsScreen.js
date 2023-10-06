import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const HikeEatsScreen = () => {
  return (
    <SafeAreaView style={tw`h-full`}>
    <View style={tw`p-10`}>
      <Text>HIKE EATS COMING SOON STAY TUNED . . .</Text>
    </View>
    </SafeAreaView>
  )
}

export default HikeEatsScreen

const styles = StyleSheet.create({})