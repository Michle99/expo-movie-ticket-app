import { StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer, DefaultTheme} from "@react-navigation/native"
import TicketBook from './components/TicketBook';
import LatestMoviesDetails from './components/LatestMoviesDetails';
import LatestMovies from './components/LatestMovies';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0,0,139)',
  },
};

export default function App() {
  const Tab = createMaterialBottomTabNavigator();
  return (
     <NavigationContainer theme={MyTheme} >
       <Tab.Navigator>
        	<Tab.Screen  name="Home" component={LatestMovies} />
          <Tab.Screen name="LatestMoviesDetails" component={LatestMoviesDetails} />
          <Tab.Screen  name="TicketBook" component={TicketBook} />
       </Tab.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
});


/** 
import { StyleSheet} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from "@react-navigation/native"
import {ScreenOne} from "./ScreenOne"
import {ScreenTwo} from "./ScreenTwo"
import {ScreenThree} from "./ScreenThree"
import {ScreenFour} from  "./ScreenFour"
import {ScreenFive} from "./ScreenFive"
import {ScreenSix} from "./ScreenSix"



export default function App () {

    const Tab = createMaterialBottomTabNavigator();

    return(
        <NavigationContainer>
           <Tab.Navigator 
            barStyle={{ backgroundColor: 'red'}}
          
           >
               <Tab.Screen name="Screen1" options={{
                 tabBarLabel: 'one',
                 tabBarShowLabel: false
               }} component={ScreenOne} />
               <Tab.Screen name="Screen2" options={{
                 tabBarLabel: 'two',
                 tabBarShowLabel: true
               }} component={ScreenTwo} />
               <Tab.Screen name="Screen3" component={ScreenThree} />
                <Tab.Screen name="Screen4" component={ScreenFour} /> 
                <Tab.Screen name="Screen5" component={ScreenFive} />
               <Tab.Screen name="Screen6" component={ScreenSix} /> 
           </Tab.Navigator>
        </NavigationContainer>
    );
}
*/



