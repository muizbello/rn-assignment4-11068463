import { View, StyleSheet, Text, Image, TextInput} from 'react-native';

export default function Searchbar(){
    return(
        <View style={styles.box}>

            <Image source={require('../assets/icons.png')} style={styles.glass}/>
            <TextInput placeholder = 'Search a job or position' style={styles.places}/>
        </View>
    );

}

const styles = StyleSheet.create({
    box:{
        width: 240,
        height: 52,
        marginTop: 2,
        flexDirection: 'row',
        backgroundColor: '#FAFAFD',
        borderRadius: 12,
        padding: 5,
    },
    glass: {
        marginTop: 9,
        marginRight: 5,
        marginLeft: 12,
    },
    places: {
        fontSize: 15,
        color: '#121212',
        fontWeight: '500',
        marginLeft: 3,
    },
});