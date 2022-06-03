import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'

export default function FavoritePost({data}) {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <ImageBackground
                source={{ uri: `http://192.168.0.228:1337${data?.attributes?.cover?.data?.attributes?.url}` }}
                style={styles.cover}
                resizeMode="cover"
            >

            </ImageBackground>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 8,
    },
    cover:{
        borderRadius: 4,
        width: 200,
        Height: 100,
    }
})