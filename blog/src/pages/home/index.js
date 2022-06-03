import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';

import CategoryItem from '../../components/categoryItem'
import { getFavorite, setFavorite } from '../../services/favorite'
import FavoritePost from '../../components/favoritePost'

export default function Home() {

    const navigation = useNavigation();
    const [categories, setCategories] = useState([])
    const [favCategory, setFavCategory] = useState([])

    // Get em categoria 
    useEffect(() => { // inicia a aplicação buscando categorias
        async function loadData() {
            const category = await api.get("/api/categories?populate=icon");
            setCategories(category.data.data); // enviando dados para o estado
        }

        loadData();

    }, [])

    useEffect(() => { // inicia aplicação buscando se possui categorias favoritadas
        async function favorite() {
            const response = await getFavorite();
            setFavCategory(response);
        }

        favorite();

    }, [])


    // Favoritando Categoria
    async function handleFavorite(id) {
        const response = await setFavorite(id)

        // setFavCategory(response);
        console.log(response)
        alert("categoria favoritada!")
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>DevBlog</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                    <Feather name='search' size={25} color='#FFF' />
                </TouchableOpacity>
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{ paddingRight: 12 }}
                style={styles.categories}
                data={categories} // dados da função loadData
                keyExtractor={(item) => String(item.id)} // percorrendo informção as chaves sempre são string
                renderItem={({ item }) => (
                    <CategoryItem
                        data={item} // Passando dados para o componente 
                        favorite={() => handleFavorite(item.id)} // mandando id para ser favoritado
                    />
                )}
            />

            <View style={styles.main}>

                {favCategory.length !== 0 && ( // comparacao para saber se há algum  favoritado.
                    <FlatList
                        style={{ marginTop: 50, maxHeight: 100, paddingStart: 18, }}
                        data={favCategory}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => <FavoritePost data={item}/> }
                    />
                )}

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232630'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 18,
        marginBottom: 24
    },
    name: {
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold'
    },
    categories: {
        maxHeight: 115,
        backgroundColor: '#EFEFEF',
        marginHorizontal: 18,
        borderRadius: 8,
        zIndex: 9
    }
})