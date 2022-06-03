import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/home'
import Detail from './pages/detail'
import CategoryPosts from './pages/categoryPosts'
import Search from './pages/search'

const Stack = createNativeStackNavigator();


function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    title: 'Detalhes',
                    headerTintColor: '#FFF',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}
            />

            <Stack.Screen
                name="CategoryPosts"
                component={CategoryPosts}
                options={{
                    headerTintColor: '#FFF',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}

            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: "procurando algo?",
                    headerTintColor: '#FFF',
                    headerStyle: {
                        backgroundColor: '#232630'
                    }
                }}
            />

        </Stack.Navigator>
    )
}

export default Routes;