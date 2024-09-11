// screens/MovieListScreen.tsx
import React from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../theme/globalstyles';

const MOVIES = [
    { id: '1', title: 'Movie 1' },
    { id: '2', title: 'Movie 2' },
    { id: '3', title: 'Movie 3' },
    // Agrega más películas aquí
];

const MovieListScreen = ({ navigation }: any) => {
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={MOVIES}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
                    >
                        <View>
                            <Text>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default MovieListScreen;
