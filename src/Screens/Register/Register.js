import React, {useState} from 'react';
import {StyleSheet, Text, SafeAreaView, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import {setDataRegister} from './ActionRegister';

const Register = props => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const dispatch = useDispatch();

  const SubmitRegister = () => {
    dispatch(
      setDataRegister({
        email: Email,
        username: Username,
        password: Password,
      }),
    );
    props.navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollView}>
        <Input
          placeholder="Username"
          onChangeText={input => setUsername(input)}
        />
        <Input placeholder="Email" onChangeText={input => setEmail(input)} />
        <Input
          placeholder="Password"
          secureTextEntry
          onChangeText={input => setPassword(input)}
        />
        <Button title="Submit" onPress={SubmitRegister} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(10),
  },
  scrollView: {
    flexGrow: 1,
  },
  safeView: {
    flex: 1,
  },
});
