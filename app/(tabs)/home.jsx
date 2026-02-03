import React, { useRef } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { markers } from '../../pointer/markers';
import BottomSheet from 'react-native-simple-bottom-sheet';

export default function Home() {

  // Defining the initial region for the map, centered on Jeddah. Mean when app is open the center will be Jeddah
  const initialRegion = {
    latitude: 21.4858, // Latitude for Jeddah
    longitude: 39.1925, // Longitude for Jeddah
    latitudeDelta: 0.1, // Controls the zoom level vertically
    longitudeDelta: 0.1, // Controls the zoom level horizontally
  };

   // Create a ref to control the BottomSheet
  const bottomSheetRef = useRef();

  return (
    // A container view to hold the map
    <View style={styles.container}>

      {/* MapView component to display the map */}  
      <MapView
        provider={PROVIDER_GOOGLE} // to look like google map style
        showsMyLocationButton // Displays a button to center the map on the user's location
        showsUserLocation // Displays the user's current location on the map
        style={styles.map}
        initialRegion={initialRegion} // Sets the initial region of the map
      >

        {/* Loop through the markers array and render a Marker for each item */}
        {markers.map((marker, index) => (
          <Marker
            key={index} // Unique key for each marker
            title={marker.name} // Title to show when the marker is tapped
            coordinate={marker} // The latitude and longitude for the marker
            pinColor="#8F6BDA" // Marker/pointer color
          />
        ))}
      </MapView>

      {/* BottomSheet component */}
      <BottomSheet ref={bottomSheetRef}>
        <View style={{ height: 200, justifyContent: 'center' }}>
         {/* Text in the bottom sheet */}
          <Text style={styles.bottomSheetText}>جاهز لبدء تجربتك مع سالم؟</Text>
          {/* Button in the bottom sheet */}
          <TouchableOpacity style={styles.bottomSheetButton}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
              إبدأ الآن
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </View>
  );
}

// Defining styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
  },
  map: {
    width: '100%', // Makes the map take up the full width of the screen
    height: '100%',  // Makes the map take up the full height of the screen
  },
  bottomSheetText: {
    fontSize: 23,
    color: '#4B217F',
    marginBottom: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomSheetButton: {
    backgroundColor: '#4B217F',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 105,
    marginBottom: 30,
    marginTop: -5,
    alignItems: 'center',
    alignSelf: 'center',
  },
});
