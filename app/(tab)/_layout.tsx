import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Catálogo',
                    tabBarIcon: ({ color, size }) => <Ionicons name="bicycle" size={size} color={color} />
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
