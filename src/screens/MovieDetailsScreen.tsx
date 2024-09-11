import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../theme/globalstyles';

const MovieDetailsScreen = ({ route, navigation }: any) => {
    const { movieId } = route.params;

    return (
        <View style={globalStyles.container}>
            <Text>Details for movie ID: {movieId}</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default MovieDetailsScreen;
