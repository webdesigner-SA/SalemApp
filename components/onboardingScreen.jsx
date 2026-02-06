import React, { useState } from 'react'; // Import useState for state management
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // for navigation

// Array of onboarding screens data (image, title, subtitle)
const onboardingData = [
  {
    image: require('../assets/img/onboarding1.png'), // First screen image
    title: 'سالم... شريكك في طريق آمن', // First screen title
    subtitle: 'تعرف على أماكن الحفر قبل توصلها.', // First screen subtitle
  },
  {
    image: require('../assets/img/Splash3.png'), // Second screen image
    title: 'خريطتك الأذكى تكشف المخاطر في وقتها', // Second screen title
    subtitle: '', // Second screen subtitle (empty)
  },
  {
    image: require('../assets/img/Splash2.png'), // Third screen image
    title: 'تنبيهات فورية قبل ما توصل الحفرة', // Third screen title
    subtitle: 'نخلي قيادتك أسهل، وأمانك أولوية', // Third screen subtitle
  },
];

// Onboarding component
export default function Onboarding() {

  // State to track which onboarding screen is shown
  const [index, setIndex] = useState(0);
  // Get router object for navigation
  const router = useRouter();

  // Go to next onboarding screen or home if it's a last screen
const handleNext = () => {
  if (index < onboardingData.length - 1) {  // If not last screen
    setIndex(index + 1); // Go to next screen
  } else {
    // If it's the last screen, go to home
    router.replace('/(tabs)/home'); // Navigate to home screen
  }
};

  // Skip all and go to home
  const handleSkip = () => {
    router.replace('/(tabs)/home'); // Navigate to home screen
  };

  return (
    <View style={styles.container}> 

      <Image
      source={onboardingData[index].image} // Show current screen's image
      style={styles.image}
      resizeMode="contain"
      />

      <Text style={styles.title}>{onboardingData[index].title}</Text>

      {onboardingData[index].subtitle ? ( // If subtitle exists, show it
        <Text style={styles.subtitle}>{onboardingData[index].subtitle}</Text>
      ) : null}
      
      <View style={styles.dotsContainer}>
        {onboardingData.map((_, i) => (

          <View
            key={i} // Give each dot a unique key based on its index.
            style={[
              styles.dot,
              // If this dot's index matches the current onboarding screen index,
              // color it red. Otherwise, color it gray.
              { backgroundColor: i === index ? '#CE3756' : '#E0E0E0' },
            ]}
          />
        ))}
      </View>


      <View style={styles.bottomRow}>
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Ionicons name="arrow-forward" size={24} color="#CE3756" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>تخطي</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles for the onboarding screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 250,
    height: 250,
    marginBottom: 30, // Space below image
  },
  
  title: {
    fontSize: 22,
    color: '#4B217F',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8, // Space below title
  },

  subtitle: {
    fontSize: 15,
    color: '#4B217F',
    textAlign: 'center',
    marginBottom: 30, // Space below subtitle
  },

  dotsContainer: {
    flexDirection: 'row', // Arrange dots in a row
    justifyContent: 'center',
    marginBottom: 30, // Space below dots
    marginTop: 30
  },

  dot: {
    width: 30,
    height: 12,
    borderRadius: 7,
    marginHorizontal: 4, // Space between dots
  },

  bottomRow: {
    flexDirection: 'row', // Arrange controls in a row
    justifyContent: 'space-between', // Space between controls button
    width: '90%', // Row width
    position: 'absolute',
    bottom: 30,  // Distance from bottom
    left: 16,
    right: 0,
    alignItems: 'center',
  },

  arrowButton: {
    padding: 12, // Padding for arrow button
    borderRadius: 20,
  },

  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 16,
    backgroundColor: '#4B217F',
  },

  skipText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});