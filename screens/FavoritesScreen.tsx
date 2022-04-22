import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import {useEffect} from "react";
import * as movieAction from '../features/movies/actions';

export default function FavoritesScreen({ navigation }: RootTabScreenProps<'Favorites'>) {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(movieAction.getMovies("harry"))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/FavoritesScreen.tsx" />
    </View>
  );
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
