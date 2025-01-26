import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { IconSymbol } from '@/components/ui/IconSymbol.ios';
import IconButton from '@/components/ui/iconButton';
import { StyleSheet, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.container}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{
            headerShown: false
          }} />
          <Stack.Screen name="create" options={{
            // headerShown: true
            headerTitle: 'New Task',
            headerTitleAlign: 'center',
            headerRight: () => null,
            headerLeft: ({ tintColor }) => (
              <IconButton
                icon="close-outline" // 아이콘 이름
                color={tintColor}
                size={24}
                onPress={() => router.back()} // 여기에서 경로를 지정
              />
            ),
          }} />
          <Stack.Screen name="terms" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </View>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // 화면 크기를 채우도록 설정
  },
  background: {
    flex: 1, // 전체 화면을 채우도록 설정
    resizeMode: 'cover', // 배경 이미지가 화면 크기에 맞게 조정됨
  }
});