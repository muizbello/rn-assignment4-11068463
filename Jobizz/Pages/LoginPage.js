import React, { useState } from 'react';
import { View, Text, TextInput, Image,StyleSheet, TouchableOpacity } from 'react-native';


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
      <View style={styles.containerL2}>
      <View style={styles.Textmessages}>
         <Text style={styles.iden1}>Jobizz</Text>
         <Text style={styles.iden2}>Welcome Back👋</Text>
         <Text style={styles.iden3}>Let's log in. Apply to jobs!</Text>
      </View>
      <View style={styles.fields}>
      <TextInput style={styles.field1}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput style={styles.field2}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.login} onPress={handleLogin}>
        <Text style={styles.logintext} >Log in</Text>
      </TouchableOpacity> 
    </View>
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or continue with</Text>
      <View style={styles.line} />
    </View>
    <View style={styles.logoHolder}>
      <Image source={require('../assets/app.png')} />
      <Image source={require('../assets/gg.png')} />
      <Image source={require('../assets/fb.png')}  />
    </View>
    <View style={styles.holder}>
      <Text style={styles.signout}>Haven't an account <Text style={styles.reg} >Register</Text></Text>
    </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
    containerL: {
      marginTop: 5,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      flex: 1,
    },
    containerL2: {
      backgroundColor: '#fff',
      marginRight: 13,
    },
    Textmessages:{
      marginTop: 100,
      marginLeft: 15,
    },
    field: {
    marginTop: 15,
    borderRadius: 8,
    },
    iden1:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#356899',
    },
    iden2:{
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 8,
  },
  iden3:{
    fontSize: 15,
    color: '#AFB0B6',
    marginTop: 8,
    
},
fields:{
  
  marginTop: 28,
  marginLeft: 15,
  
},
field1:{
  marginBottom: 20,
  backgroundColor: '#fff',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 10,
  borderLeftColor: '#000',
  borderRightColor: '#000',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderRadius: 12,
  borderColor: '#AFB0B6',
},
field2:{
  marginBottom: 15,
  backgroundColor: '#fff',
  borderLeftWidth: 1,
  borderRightWidth: 1,
  padding: 10,
  borderLeftColor: '#000',
  borderRightColor: '#000',
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderRadius: 12,
  borderColor: '#AFB0B6',
},
login:{
    marginTop: 20,
    backgroundColor: '#356899',
    height: 50,
    borderRadius: 5,
},
logintext:{
    color: 'white',
    alignSelf: 'center',
    marginTop: 15,
    justifyContent: 'center',
    fontSize: 17,
},
container: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 55,
  marginLeft: 15,
},
line: {
  flex: 1,
  height: 1,
  backgroundColor: '#AFB0B6',
},
text: {
  marginHorizontal: 10,
  fontSize: 13,
  color: '#AFB0B6',
},
logoHolder:{
  marginTop: -50,
  flexDirection: 'row',
  flex: 1,
  justifyContent: 'space-between',
  padding: 80,
},
signout:{
  color: '#AFB0B6',
  marginLeft: 15,
},
reg:{
  fontWeight: 'bold',
  
},
holder:{
  alignItems: 'center',
}
  });
