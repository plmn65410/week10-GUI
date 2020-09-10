import * as  React from 'react'
import {Viwe,Text, Button} from 'react-native'
import {NavigationContainer} from '@react-narigation/native'
import {createStackNavigator} from '@react-narigation/Stack'

const HomeScreen =({navigation})=>{
  return(
   <view style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <text>Home Screem</text>
      <Button
        title="Go to Details"
        onPress={()=>navigationContainer.navigate(Detail)}
      />
   </view>
 )
 }

 const DetailScreen=()=>{
   return(
     <View> 
       <tText>DetailScreen</tText>
     </View>
   )
 }

 const stack = createStackNavigator();
 
const App=()=>{
  return(
  <NavigationContainer>
    <StackActions.Navigator>
     <Stack.Seveen name="Home" options={{title:"Overview"}} component ={HomeScreen} />
     <Stack.Screen name="Detail" component={DetailScreen} />
    </StackActions.Navigator>
  </NavigationContainer>
  )
}
export default App;