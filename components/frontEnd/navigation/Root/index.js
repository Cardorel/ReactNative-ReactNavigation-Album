import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../album/Home';
import Profil from '../../album/Profil';

const root = createStackNavigator();

export default function Root() {
    return (
        <root.Navigator>
            <root.Screen
                name="Album"
                component={Home}
                options={
                    {
                        headerStyle: {
                            backgroundColor: "#ddd",
                        }
                    }
                }
            />
            <root.Screen
                name="Profil"
                component={Profil}
            />
        </root.Navigator>
    )
}
