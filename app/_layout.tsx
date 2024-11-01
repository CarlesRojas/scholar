import {
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    useFonts
} from '@expo-google-fonts/montserrat';
import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import './global.css';

SplashScreen.preventAutoHideAsync();
const queryConfig: QueryClientConfig = { defaultOptions: { queries: { retry: false } } };

export default function RootLayout() {
    const [queryClient] = useState(() => new QueryClient(queryConfig));

    const [fontsLoaded, fontError] = useFonts({
        'm-thin': Montserrat_100Thin,
        'm-extra-light': Montserrat_200ExtraLight,
        'm-light': Montserrat_300Light,
        'm-regular': Montserrat_400Regular,
        'm-medium': Montserrat_500Medium,
        'm-semi-bold': Montserrat_600SemiBold,
        'm-bold': Montserrat_700Bold,
        'm-extra-bold': Montserrat_800ExtraBold,
        'm-black': Montserrat_900Black
    });

    useEffect(() => {
        if (fontsLoaded || fontError) SplashScreen.hideAsync();
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) return null;

    return (
        <QueryClientProvider client={queryClient}>
            {/* <GestureHandlerRootView className="bg-red-200">
                <SafeAreaProvider> */}
            <Stack>
                <Stack.Screen name="(tab)" options={{ headerShown: false }} />
                <Stack.Screen name="+not-found" />
            </Stack>
            {/* </SafeAreaProvider>
            </GestureHandlerRootView> */}
        </QueryClientProvider>
    );
}
