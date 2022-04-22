import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

type ItemProps = {
    imageURL: string
}

const Item: React.FC<ItemProps> = (({imageURL}) => {
    return <View style={styles.itemWrapper}>
        <Image source={{uri: imageURL}} style={styles.image}/>
    </View>;
});

export default Item;
