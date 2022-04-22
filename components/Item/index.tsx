import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {MovieItem} from "../../features/movies/types";
import {FontAwesome} from "@expo/vector-icons";

export interface ItemProps extends MovieItem {
    onHidePress: () => void;
    onFavoritePress: () => void;
    isFavorite: boolean;
}

const Item: React.FC<ItemProps> = (({
                                        Title,
                                        Poster,
                                        Year,
                                        imdbRating,
                                        onHidePress,
                                        onFavoritePress,
                                        isFavorite,
                                    }) => {
    return <View style={styles.itemWrapper}>
        <Image source={{uri: Poster}} style={styles.image}/>
        <View style={styles.rightWrapper}>
            <Text style={styles.title}>{`${Title} - ${Year}`}</Text>
            <Text>{`IMDB: ${imdbRating}`}</Text>
            <View style={{alignSelf: "flex-end"}}>
                <View style={styles.buttonWrapper}>
                    <Pressable
                        onPress={onHidePress}
                        style={styles.button}>
                        <FontAwesome
                            name="ban"
                            size={20}
                            color={"#FFF"}
                        />
                    </Pressable>
                    <Pressable
                        onPress={onFavoritePress}
                        style={[styles.leftMargin, styles.button]}>
                        <FontAwesome
                            name="star"
                            size={20}
                            color={isFavorite ? "#97e4ff" : "#FFF"}
                        />
                    </Pressable>
                </View>
            </View>
        </View>
    </View>;
});

export default Item;
