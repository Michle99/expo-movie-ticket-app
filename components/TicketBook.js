import { View, Text, StyleSheet, Image, Alert, ScrollView } from "react-native"
import TextInput from "../TextInput"
import Button from "../Button";
import { useFormik, Formik } from 'formik';
import React, {useState} from 'react';
import DatePicker from "./DatePicker"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 35,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      flexWrap: 'wrap'
     
    },
    textStyle: {
      color: '#223e4b',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: -10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewForm:{
      paddingHorizontal: 32, 
      marginBottom: 16, 
      width: '100%'
    },
    datePicker: {
      marginBottom: 16,

    },
    image: {
      width: 150,
      height: 130,
      borderRadius: 25,
      borderColor: '#a36560',
      borderWidth: 4,
      marginBottom: 20,
  },
  ticketCake: {
    marginBottom: 20,
  }
  });

const TicketBook=(props)=>{
  const { cakeid, image, name, price, code } = props.route.params;

  console.log("image of cake: ", image);
    return(

       <ScrollView>
         <Formik   
         initialValues={{name: '', email: '', movie: ''}}
         onSubmit={(values)=>{
           setTimeout(()=>{
              Alert.alert("Values: ", `name: ${values.name}  email: ${values.email}  movie: ${values.movie} code: ${code}`);
           }, 1000);
         }}
       >
         {({handleChange, handleSubmit, values, errors})=>(
        <View style={styles.container}>
          <Text style={styles.textStyle}>Ticket Booking{'\n'}</Text>
          <View style={styles.ticketCake}>
            <Text style={styles.textStyle}>CakeID: { JSON.stringify(cakeid) }</Text>
            <Image style={styles.image} source={{ uri:image }}></Image>
            <Text style={styles.textStyle}>Name: {name}</Text>
            <Text style={styles.textStyle}>Price: ${JSON.stringify(price)}</Text>
          </View>
          
          <View style={styles.viewForm}>
             <TextInput 
              icon='add-user'
              placeholder='Enter your full name'
              autoCapitalize='words'
              autoComplete='name'
              keyboardType='email-address'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
              value={values.name}
              onChangeText={handleChange('name')}
            />
            {errors.name && <Text>Name is required</Text>}
          </View>
          <View style={styles.viewForm}>
            <TextInput 
              icon='mail'
              placeholder='Enter your email'
              autoCapitalize='none'
              autoCompleteType='email'
              keyboardType='email-address'
              keyboardAppearance='dark'
              returnKeyType='next'
              returnKeyLabel='next'
              value={values.email}
              onChangeText={handleChange('email')}
            />
             {errors.email && <Text>Email is required</Text>}
          </View>
          <View style={styles.viewForm}>
            <TextInput 
               placeholder='Name of Movie'
               keyboardType='email-address'
               keyboardAppearance='dark'
               returnKeyType='next'
               returnKeyLabel='next'
               value={values.movie}
               onChangeText={handleChange('movie')}
            />
             {errors.movie && <Text>Movie is required</Text>}
          </View>
          <View>
             <DatePicker  />
          </View>
          
          <Button type="submit" label='Book Now' onPress={()=>handleSubmit()} />
        </View>
         )}
       </Formik>
       </ScrollView>
    );
}

export default TicketBook;