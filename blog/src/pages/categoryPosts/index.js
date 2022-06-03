import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryPosts() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>posts de uma categoria</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
    }
})