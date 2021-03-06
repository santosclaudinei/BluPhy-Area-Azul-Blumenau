import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default {
    colors: {
        backgroundColor: '#f4f4f4',
        mainColor: '#1a73e9',
        textColor: '#0a51ad',
    },
    screenOptionsLayout : {
        headerStyle: {
            backgroundColor: 'white',
        },
        headerTintColor: '#0a51ad',
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25,
        },
        headerTitleAlign: 'center' ,
        headerLeft: props => (
            <TouchableOpacity
                {...props}
            >
                <Icon 						
                    name='angle-left' 
                    size={45}  
                    color='#084cad'
                    style={{marginLeft: 30}}						
                />
            </TouchableOpacity>
        )
    },
}