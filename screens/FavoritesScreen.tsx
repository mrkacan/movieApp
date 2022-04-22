import {SafeAreaView, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {RootTabScreenProps} from '../types';
import React, {useEffect} from "react";
import * as movieAction from '../features/movies/actions';
import {getFavoriteItems} from "../features/userData/selectors";
import ListView from "../components/ListView";

export default function FavoritesScreen({navigation}: RootTabScreenProps<'Favorites'>) {
    const dispatch = useDispatch();
    const data = useSelector(getFavoriteItems);

    useEffect(() => {
        dispatch(movieAction.getMovies("harry"))
    }, [])

    return (<SafeAreaView style={styles.container}>
        <ListView data={data}/>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
