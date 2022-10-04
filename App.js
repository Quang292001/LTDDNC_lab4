import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import back from './assets/Vector.png'
import mart from './assets/mart.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#1BA9FF', flexDirection:'row', justifyContent:'space-between',alignItems:'center',paddingVertical:10}}>
        <Image source={back} style={{marginLeft:20}}/>
        <Text style={{color:"#fff", fontSize:20,fontWeight:'200'}}>Chat</Text>
        <Image source={mart} style={{marginRight:20}}/>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
