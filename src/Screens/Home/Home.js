import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Button,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

import {useDispatch, useSelector} from 'react-redux';
import {actionUpdateProfile, actionGetListMovie} from './ActionHome';

const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [value, setValue] = React.useState({
    name: '',
    job: 'zion resident',
  });

  useEffect(() => {
    const filter = {
      page: 3,
    };
    dispatch(actionGetListMovie(filter));
  }, []);

  const dataMovie = useSelector(state => state.Home);
  const dataProfile = dataMovie?.moviesData?.data;

  const doUpdate = async () => {
    try {
      await dispatch(actionUpdateProfile(value));
      const filter = {
        page: 3,
      };
      dispatch(actionGetListMovie(filter));
    } catch (error) {
      console.log(error);
    }
  };
  // optional chaining

  useEffect(() => {
    if (dataProfile) {
      setValue({
        ...value,
        name: dataProfile?.first_name,
      });
      setName(dataProfile?.first_name);
    }
  }, [dataProfile]);
  // const submitMovie = () => {
  //   // dispatch(getMovie());
  // };
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: dataProfile?.avatar || '',
        }}
        style={{
          height: 100,
          width: 100,
          margin: 10,
        }}
      />
      <TextInput
        value={value.name}
        onChangeText={val =>
          setValue({
            ...value,
            name: val,
          })
        }
        style={{borderWidth: 1, margin: 10}}
      />
      <View style={{margin: 10}}>
        <Button title="Save" onPress={() => doUpdate()} />
      </View>
      {/* <FlatList
        data={dataMovie.moviesData}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.movielist}>
              <FastImage
                style={{
                  width: moderateScale(200),
                  height: moderateScale(200),
                  marginBottom: moderateScale(20),
                }}
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                }}
                resizeMode="contain"
              />
              <View style={styles.viewOverview}>
                <Text style={styles.movieTitle}>{item.original_title}</Text>
                <Text style={styles.movieOverview}>{item.overview}</Text>
                <Text style={styles.moviePopular}>
                  Popularity : {item.popularity}
                </Text>
                <Text style={styles.moviePopular}>
                  Release Date On {item.release_date}
                </Text>
              </View>
            </View>
          );
        }}
      /> */}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  movielist: {
    flexDirection: 'row',
  },
  viewOverview: {
    // width: widthPercentageToDP(40),
    marginBottom: heightPercentageToDP(2),
    flex: 1,
  },
  movieOverview: {
    fontSize: moderateScale(10),
    color: 'grey',
  },
  movieTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  moviePopular: {
    fontWeight: '400',
    color: 'black',
    fontSize: moderateScale(12),
  },
});
