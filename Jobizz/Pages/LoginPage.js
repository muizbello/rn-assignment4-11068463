import React, { useState } from 'react';
import { View, Text, TextInput, Button,StyleSheet } from 'react-native';


export default function LoginPage({ navigation }){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('MainInterface', { name, email });
    } else {
      alert('Please enter both name and email.');
    }
  };

  return (
    <View style={styles.containerL}>
      <Text>Login Page</Text>
      <TextInput tyle={styles.field}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput style={styles.field}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
    containerL: {
      margin: 12,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
    },
     
    field: {
    marginTop: 15,
    borderRadius: 8,
    },
  });
