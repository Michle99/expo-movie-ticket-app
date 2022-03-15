import { FlatList, ScrollView,Image, TextInput,Text ,Dimensions, View, StyleSheet } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Movies from "./Movies";

// const screenWidth = Dimensions.get("window").width;

// const tileSize = (screenWidth -15)/2;

const {height, width} = Dimensions.get('window');
const MarginFromTheSide = Dimensions.get('window');
const MarginInBetween = Dimensions.get('window');
const n = 3;
const itemWidth = (width - (MarginFromTheSide * 2 + MarginInBetween * (n-1))) / n;

const styles = StyleSheet.create({
    image: {
        // width: tileSize,
        // height: 130,
        // borderRadius: 10,
        // borderColor: '#a36560',
        // borderWidth: 2,
    },
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        // width: itemWidth,
        alignItems:"center",
        flex:1

      },
      title: {
        fontSize: 20,
      },
      row: {
        flex: 1,
        justifyContent: "space-evenly"
    }
});

// const Movie = ({name, price, image}) =>
// (
//     <View style={styles.item}>
//         <Image source={{ uri: image }} style={{width:60, height:60,borderRadius:30}} />
//         <Text style={{fontWeight:"bold", textAlign: 'center'}}>{name}</Text>
//         <Text style={styles.title}>{price}</Text>
 
//     </View>
// );

const LatestMovies = (props)=> {
    const [movies, setMovies] = useState([]);
    
    const getMovies = async()=> {
        // const response = await fetch("https://api.sampleapis.com/coffee/hot");
        // const movies = await response.json();
        // console.log("Movies data: ", movies);
        // setMovies(movies);
        axios({
            method: "get",
            url: "https://apifromashu.herokuapp.com/api/allcakes"
        }).then((response)=>{
            console.log("response from movies api ", response.data.data);
            
            setMovies(response.data.data);
        })
    };

    useEffect(()=> {
        getMovies();
    }, []);

 
    

    const renderItem = ({ item }) => {
        return(
            <Movies
                cakeid={item.cakeid}
                image={item.image}
                name={item.name}
                price={item.price} 
        />
        );
    }

    return(
        // <ScrollView>
            
        //     {
        //         movies.map((each, index)=> {
        //             return <View key={index}>
        //                         <Text >{each.title}</Text>
        //                     </View>
        //             // return <Movies {...props}  data={each} key={index} />
        //         })
        //     }
        // </ScrollView>

        <View style={{ flex: 1, padding: 20 }}>
            {
                movies && (
                    <SafeAreaView >
                        <FlatList  
                            data={movies}
                            keyExtractor={item => item.cakeid}
                            numColumns={2}
                            columnWrapperStyle={styles.row}
                            renderItem={ renderItem
                
                        //     ({ movie }) => 
                        //     // <Image style={styles.image} source={{ uri: movie.uri }} />,
                        //    <View>
                        //         <Text>{movie}</Text>
                        //    </View>

                        }     
                    />
                    </SafeAreaView>
                )} 
        </View>
    );
}

export default LatestMovies;