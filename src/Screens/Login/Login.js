import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView, Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

const Login = props => {
  const dataRegister = useSelector(state => state.Register);

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  const SubmitLogin = () => {
    if (
      dataRegister.username === Username &&
      dataRegister.password === Password
    ) {
      props.navigation.navigate('Home');
    } else {
      Alert.alert('Error Gais', 'Username Atau Password Anda Salah');
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Input
          placeholder="Username"
          onChangeText={input => setUsername(input)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={input => setPassword(input)}
        />

        <Button title="Login" onPress={SubmitLogin} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: moderateScale(10),
  },
});
