import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import FavoritesEmptyState from './FavoritesEmptyState'
import Colors from '../../res/colors'
import FavoriteStack from './FavoritesStack';

class FavoritesScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FavoriteStack />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.charade,
        flex: 1,
    }
})

export default FavoritesScreen