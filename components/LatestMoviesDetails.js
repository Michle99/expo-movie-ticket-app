import { View, Image, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 300,
        borderRadius: 20,
        borderColor: '#a36560',
        borderWidth: 4,
    },
    container: {
        flex: 1,
        marginTop: 50,
        alignItems: 'center',
        
      },
});

export default function LatestMoviesDetails(props){
    const { cakeid, image, name, price } = props.route.params;
    // Navigate to Ticket booking page
     const navigation = useNavigation();
     const ticketCode = Math.random().toString(36).substring(6).toUpperCase();
     function navigateToTicketBooking (){
        navigation.navigate("TicketBook", { 
            // Accidental discovery on the send the params in this navigation
            cakeid: cakeid,
            image: image,
            name: name,
            price: price,
            code: ticketCode
        });
        console.log("This is the clicked image: ", image);
        console.log("This is the clicked cakeid: ", cakeid);
    }
    
   
    return (
        
        <View style={styles.container}>
            <Text>Latest Movies Details Page{ '\n'} </Text>
            <Image style={styles.image} source={{ uri:image }}></Image>
            <Text>Name: {name}</Text>
            <Text>Price: ${price}</Text>
            <Text>CakeID: {JSON.stringify(cakeid)}{'\n'}</Text>
            <Button onPress={navigateToTicketBooking} title="Ticket Booking" >Book Now</Button>
        </View>
    );
}