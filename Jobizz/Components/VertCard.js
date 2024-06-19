import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';


export default function VertCard({ position, institution, salary,location, image}){
    return(
        <View style={styles.card}>

            <View style={styles.fam}>
             {image && <Image source={image} style={styles.image}  />}
            </View>
            
        <View style={styles.holdx}>
            
            <View style={styles.mdx}>
                {position && <Text style={styles.title}>{position}</Text>}
                {salary && <Text style={styles.description}>{salary}</Text>}
                
            </View>
            <View style={styles.botx}>
            {institution  && <Text style={styles.subtitle}>{institution}</Text>}
                {location && <Text style={styles.description1}>{location}</Text>}
            </View>
        </View>
    </View>
  );
};



const styles = StyleSheet.create({
    card: {
      borderRadius: 10,
      marginLeft: 5,
      marginRight: 10,
      backgroundColor: '#FAFAFD',
      marginBottom: 10,
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
    mdx:{
        flexDirection: 'row',
        alignContent: 'center',
        marginLeft: 2,
        justifyContent: 'space-evenly',
    },
    fam: {
        marginLeft: -39,
    },
    holdx:{
      color: 'white',
      flexDirection: 'column',
      marginLeft: -30,
      marginRight: -10,
    },
    botx:{
      flexDirection: 'row',

      alignContent: 'center',
      marginLeft: 3,
      justifyContent: 'space-between',
      
    
    },
    image: {
      maxWidth: 30,
      maxHeight: 30,
      marginLeft: 5,
      margin: 5,
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      
    },
    subtitle: {
      fontSize: 13,
      
      marginTop: 6,
      color: '#AFB0B6',
      marginLeft: 1,
    },
    description: {
      fontSize: 12,
      fontWeight: 'bold',
      marginLeft: 39,
    },
    description1: {
        fontSize: 12,
        color: '#AFB0B6',
        marginTop: 8,
      },
  });