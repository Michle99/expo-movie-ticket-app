import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const AUTHORS = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Matt Johnson',
    book: 'GraphQL Basics'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Will Smith',
    book: 'React Basics'

  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Katie Hanson',
    book: 'React Native for Mobile Apps'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Katie Hanson',
    book: 'React Native for Mobile Apps'
  },
  {
    id: '58694a0f-2a21-471f-bd96-145571e29d72',
    name: 'Adhithi Ravichandran',
    book: 'React Native for Mobile Apps'
  },
 // ...lots of more authors and books go in here...

];

/* Displays author info passed from renderItem */
const AuthorInfo = ({ name, book }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{'Author : ' + name}</Text>
    <Text style={styles.title}>{'Title : ' + book}</Text>
  </View>
);

const App = () => {
 /* renders each item on the list */
  const renderItem = ({ item }) => (
    <AuthorInfo name={item.name} book={item.book}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={AUTHORS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});

export default App;