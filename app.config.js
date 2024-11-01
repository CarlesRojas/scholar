import 'dotenv/config';

export default {
    expo: {
        name: 'scholar',
        slug: 'scholar',
        version: '1.0.0',
        orientation: 'portrait',
        icon: './asset/icon.png',
        userInterfaceStyle: 'automatic',
        scheme: 'scholar',
        splash: {
            image: './asset/splash.png',
            resizeMode: 'contain',
            backgroundColor: '#ffffff'
        },
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.pinyalima.scholar'
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './asset/adaptive-icon.png',
                backgroundColor: '#ffffff'
            },
            package: 'com.pinyalima.scholar'
        },
        web: {
            bundler: 'metro',
            output: 'static',
            favicon: './asset/favicon.png'
        },
        plugins: ['expo-router'],
        experiments: {
            typedRoutes: true
        }
    }
};
