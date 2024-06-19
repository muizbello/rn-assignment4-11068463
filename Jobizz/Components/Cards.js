import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

export default function Cards({ position, institution, salary,location, image, backgroundColor }){
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor || '#fff' }]}>
      <View style={styles.holdx}>
          <View style={styles.topx}>
            <View style={styles.rec}>
            {image && <Image source={image} style={styles.image} />}
            </View>
            <View style={styles.mdx1}>
              {position && <Text style={styles.title}>{position}</Text>}
              {institution  && <Text style={styles.subtitle}>{institution}</Text>}
            </View>
            
          </View>
          <View style={styles.botx}>
          {salary && <Text style={styles.description}>{salary}</Text>}
          {location && <Text style={styles.description}>{location}</Text>}
          </View>
      </View>
      
     
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    flexDirection: 'column',
    minWidth: 220,
    marginLeft: -5,
    marginRight: 25,
  },
  topx:{
    flexDirection: 'row',
  },
  mdx1:{
      flexDirection: 'column',
      marginLeft: 50,
  },
  holdx:{
    color: 'white',
  },
  botx:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  rec:{
      backgroundColor: 'white',
      width: 40,
      height: 40,
      borderRadius: 9,
      justifyContent: 'center',
      alignContent: 'center',
  },
  image: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 58,
    marginTop: -8,
    color: '#555',
    marginLeft: 6,
    color: 'white',
  },
  description: {
    fontSize: 12,
    color: '#333',
    color: 'white',
  },
});

