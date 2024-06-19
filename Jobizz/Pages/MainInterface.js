import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Searchbar from '../Components/Searchbar';
import Cards from '../Components/Cards';
import VertCard from '../Components/VertCard';

export default function MainInterface({ navigation }){
    const route = useRoute();
    const {name , email} = route.params;
     return(
      <View style={styles.handler}>
         <View style={styles.ident1}>
            <View style={styles.ident}>
               <Text style={styles.name}> {name} </Text>
               <Text style={styles.email}>{email}</Text>
            </View>
            <View style={styles.pro}>
               <Image source={require('../assets/ren.png')} />
               <Image style={styles.rep} source={require('../assets/onli.png')} />
            </View>
        </View>
        <View style={styles.qq}>
         <Searchbar />
         <TouchableOpacity ><Image source={require('../assets/kil.png')} style={styles.filter}/></TouchableOpacity>
        </View>
        <View style={styles.texters}>
            <Text style={styles.text1}>  Featured Jobs  </Text>
            <Text style={styles.text2}>  See all  </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Cards
        image={require('../assets/fb.png')}
        position="  Software Engineer"
        institution="Facebook"
        salary="$180.00"
        location="Accra, Ghana"
        backgroundColor="#6495ED"
      />
       <Cards
        image={require('../assets/app.png')}
        position="iOS Developer"
        institution="Apple"
        salary="$200,000"
        location="Cupertino, USA"
        backgroundColor="#A2AAAD" // Apple Gray
      />
      <Cards
        image={require('../assets/gg.png')}
        position="Backend Developer"
        institution="Google"
        salary="$190,000"
        location="Mountain View, USA"
        backgroundColor="#4285F4" // Google Blue
      />
      <Cards
        image={require('../assets/dre.png')}
        position="Audio Engineer"
        institution="Beats by Dre"
        salary="$170,000"
        location="Los Angeles, USA"
        backgroundColor="#E01A3D" // Beats by Dre Red
      />
      <Cards
        image={require('../assets/bk.png')}
        position="Marketing Manager"
        institution="Burger King"
        salary="$150,000"
        location="Miami, USA"
        backgroundColor="#F8B01A" // Burger King Yellow
      />
      <Cards
        image={require('../assets/fb.png')}
        position="Data Scientist"
        institution="Facebook"
        salary="$180,000"
        location="Menlo Park, USA"
        backgroundColor="#1877F2" // Facebook Blue
      />
      <Cards
        image={require('../assets/app.png')}
        position="M.L Engineer"
        institution="Apple"
        salary="$210,000"
        location="Cupertino, USA"
        backgroundColor="#A2AAAD" // Apple Gray
      />
      <Cards
        image={require('../assets/gg.png')}
        position="Product Manager"
        institution="Google"
        salary="$195,000"
        location="Mountain View, USA"
        backgroundColor="#4285F4" // Google Blue
      />
        </ScrollView>

        <View style={styles.texters}>
            <Text style={styles.text1}>  Popular Jobs  </Text>
            <Text style={styles.text2}>  See all  </Text>
        </View>

        <ScrollView style={styles.fire} showsVerticalScrollIndicator={false}>
          <VertCard  
          image={require('../assets/gg.png')}
          position="Team Manager"
          institution="Google"
          salary="$195,000/yr"
          location="Mountain View, USA"
          />
          <VertCard
          image={require('../assets/app.png')}
          position="M.L Engineer"
          institution="Apple"
          salary="$210,000/yr"
          location="Cupertino, USA"
        />
        <VertCard
           image={require('../assets/fb.png')}
           position="Data Scientist"
           institution="Facebook"
           salary="$180,000/yr"
           location="Menlo Park, USA"
         />
         <VertCard
         image={require('../assets/bk.png')}
         position="IT Manager"
         institution="Burger King"
         salary="$150,000/yr"
         location="Miami, USA"
       />
       <VertCard
       image={require('../assets/dre.png')}
       position="A.V Engineer"
       institution="Beats"
       salary="$170,000/yr"
       location="Los Angeles, USA"
     />
      <VertCard
      image={require('../assets/fb.png')}
      position="S.T Engineer"
      institution="Facebook"
      salary="$18,000/yr"
      location="Accra, Ghana"
    />
       <VertCard
        image={require('../assets/app.png')}
        position="Jr. Developer"
        institution="Apple"
        salary="$200,000/yr"
        location="Cupertino, USA"
      />
      <VertCard
        image={require('../assets/gg.png')}
        position="QA Engineer"
        institution="Google"
        salary="$190,000/yr"
        location="Mountain View, USA"
      />

    </ScrollView>
      </View>
     )   
}

const styles = StyleSheet.create({
   ident:{
     marginTop: 20,
   },
   rep:{
      zIndex: 1,
      marginLeft: -15,
      marginTop: 3,
    },
    filter: {
      marginLeft: 32,
      backgroundColor: '#FAFAFD',
      width: 45,
      height: 40,
      borderRadius: 13,
      marginTop: 5,
    },
    fire:{
        marginTop: 15,
        height: 220,
        flexDirection: 'column',
        zIndex: 1,
        padding: 1,
    },
    qq : {
         flexDirection: 'row',
         marginTop: 42,
    },
   pro:{
      flexDirection: 'row',
      marginTop: 15,
      marginRight: 9,
    },
    texters: {
         flexDirection: 'row',
         marginTop: 37,
         justifyContent: 'space-between',
    },
   ident1:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
   name: {
      fontWeight: 'bold',
      fontSize: 29,
      
   },
   text1: {
      fontSize: 16,
      fontWeight: 'bold',
   },
   text2: {
      color: '#95969D',
      marginTop: 5,

   },
   email:{
      fontSize: 15,
      color: '#AFB0B6',
      marginLeft: 7,
   },
   handler: {
      margin: 15,
   },
 });