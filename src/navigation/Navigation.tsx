import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieListScreen from '../screens/MovieListScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="MovieList">
                <Stack.Screen name="MovieList" component={MovieListScreen} options={{ title: 'Movies' }} />
                <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} options={{ title: 'Movie Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
