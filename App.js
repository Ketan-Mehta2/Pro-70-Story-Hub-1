import React from 'react';
import {StyleSheet, Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends React.Component {
  render(){
    return(
      
        <AppContainer />

    )
  }
}

const tabNavigator = createBottomTabNavigator({
  WriteStory: {screen: WriteStoryScreen},
  ReadStory: {screen: ReadStoryScreen},
},
 {
   defaultNavigationOptions: ({navigation}) => ({
     tabBarIcon: ()=>{
       const routeName = navigation.state.routeName;
       console.log(routeName)
       if(routeName === "WriteStory"){
         return(
           <Image
           source={require("./Images/write.png")}
           style={{width: 40, height: 40}} />
         )

       }
        else if(routeName === "ReadStory"){
          return(
            <Image
            source={require("./Images/read.png")}
            style={{width: 40, height: 40}} />
          )

        }

     }
   })
 }
);

const AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  }
});