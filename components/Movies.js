import { View, Dimensions, Text, Image, StyleSheet, Button, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        borderColor: '#a36560',
        borderWidth: 2,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop:20,
        margin: 5,
        justifyContent: 'center',
        marginTop: 40
    },
    imageGrid: {
        margin:5,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default function Movies(props){
    const navigation = useNavigation();

    function navigateToMovieDetails(){
        navigation.navigate("LatestMoviesDetails", {
            cakeid:props.cakeid,
            image:props.image,
            name:props.name,
            price:props.price
        })   
    }

    return(
        <View style={styles.container}>
           <View style={styles.imageGrid}>
                <Image style={styles.image} source={{ uri: props.image}} />
                <Text >{props.name}</Text>
                <Text >{props.price}{"\n"}</Text>
                <Button onPress={navigateToMovieDetails} title="Cake Details" ></Button>
           </View>
            
        </View>
    );
}

