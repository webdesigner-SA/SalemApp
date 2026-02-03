import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    // The Tabs component
    <Tabs>
      <Tabs.Screen name="account" options={{ title: 'الحساب' }} />
      <Tabs.Screen name="home" options={{ title: 'الرئيسية', headerShown: false }} />
      <Tabs.Screen name="settings" options={{ title: 'الإعدادات' }} />
    </Tabs>
  );
}
