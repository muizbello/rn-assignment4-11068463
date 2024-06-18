import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function MainInterface({ navigation }){
    const route = useRoute();
    const {name , email} = route.params;
     return(
            <View>
        <Text> {name} </Text>
        <Text>{email}</Text>
        </View>
     )     
}