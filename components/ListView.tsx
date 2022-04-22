import React, {useEffect} from "react";
import {
    ActivityIndicator,
    FlatList,
    LayoutAnimation,
    StyleSheet,
    UIManager,
    View
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {MovieItem} from '../features/movies/types';
import Item from "../components/Item";
import {getMoviesSelector} from "../features/movies/selectors";
import * as favoritesAction from "../features/userData/actions";
import {getFavoriteItems} from "../features/userData/selectors";

const INITIAL_LOAD = 10;

type ListViewProps = {
    data: MovieItem[];
}

const ListView: React.FC<ListViewProps> = ({data}) => {
    const dispatch = useDispatch();
    const {isLoading, error} = useSelector(getMoviesSelector);
    const favoriteItemsData = useSelector(getFavoriteItems);

    const setAnimation = () => {
        LayoutAnimation.configureNext({
            duration: 700,
            update: {
                type: LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.opacity,
                springDamping: 0.7,
            },
        });
        LayoutAnimation.configureNext({
            duration: 500,
            create: {
                type: LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.opacity,
                springDamping: 0.7,
            },
        });
        LayoutAnimation.configureNext({
            duration: 500,
            delete: {
                type: LayoutAnimation.Types.easeOut,
                property: LayoutAnimation.Properties.opacity,
                springDamping: 0.7,
            },
        });
    };

    useEffect(() => {
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }, [])

    const onHidePress = (item: MovieItem) => {
        setAnimation()
        dispatch(favoritesAction.toggleHide(item));
    }
    const onFavoritePress = (item: MovieItem) => {
        setAnimation()
        dispatch(favoritesAction.toggleFavorite(item));
    }


    return (
        <>
            {
                isLoading ? <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator color={"#00a5e0"}/>
                </View> : null
            }
            <FlatList
                data={data}
                keyExtractor={item => `infinite_scroll_item_${item.imdbID}`}
                initialNumToRender={INITIAL_LOAD}
                renderItem={({item}) => {
                    return <Item {...item}
                                 isFavorite={favoriteItemsData.findIndex(favoriteItem => favoriteItem.imdbID === item.imdbID) >= 0}
                                 onHidePress={() => onHidePress(item)}
                                 onFavoritePress={() => onFavoritePress(item)}
                    />
                }}
                contentContainerStyle={styles.flatListContent}
            />
        </>
    );
}

const styles = StyleSheet.create({
    activityIndicatorWrapper: {
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255,255,255,.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    flatListContent: {
        marginTop: 20,
    }
});

export default ListView
