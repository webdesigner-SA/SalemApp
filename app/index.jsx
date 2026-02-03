import { Redirect } from 'expo-router';

export default function Index() {
  // When this component renders, it will immediately redirect the user to the "/(tabs)/home" route, which is the Home tab in the tab navigator.
  return <Redirect href="/(tabs)/home" />;
}

