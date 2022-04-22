import React, {useState} from 'react';
import {Button, Keyboard, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as moviesAction from '../features/movies/actions';
import ListView from "../components/ListView";
import {getMoviesSelector} from "../features/movies/selectors";

export default function SearchScreen() {
    const dispatch = useDispatch();
    const {data, isLoading} = useSelector(getMoviesSelector);
    const state = useSelector((state) => state);
    const [searchText, setSearchText] = useState('');


    const getMovies = () => {
        if (searchText) {
            dispatch(moviesAction.getMovies(searchText));
            Keyboard.dismiss()
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchInputWrapper}>
                <TextInput
                    placeholder={'Start typing something'}
                    style={styles.textInput}
                    value={searchText}
                    onChangeText={setSearchText}
                    returnKeyType='search'
                    onSubmitEditing={getMovies}
                    autoFocus={true}
                />
                <View><Button title={"Search"} onPress={getMovies} color={"#105067"} /></View>
            </View>

            <ListView data={data}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    textInput: {
        fontSize: 15
    },
    searchInputWrapper: {
        width: '100%',
        position: "relative",
        height: 50,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#105067',
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    flatListContent: {
        marginTop: 20,
    }
});
