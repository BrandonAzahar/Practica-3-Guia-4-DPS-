
import React, {useState, useEffect} from 'react';

import { Text, View, StyleSheet,SafeAreaView,StatusBar } from 'react-native';
import Constants from 'expo-constants';
import colors from './src/utils/colors';
import Forms5 from './components/forms';
import Footer5 from './components/Footer';
import Result5 from './components/results';



// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


  useEffect(() => {
 if (capital && interest && months) calculate();
 else reset();
 }, [capital, interest, months]);
  const calculate = () => {
 reset();
 if (!capital) {
 setErrorMessage('Añade la cantidad que quieres solicitar');
 } else if (!interest) {
 setErrorMessage('Añade el interes del prestamos');
 } else if (!months) {
 setErrorMessage('Seleccióna los meses a pagar');
 } else {
 const i = interest / 100;
 const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
 setTotal({
 monthlyFee: fee.toFixed(2).replace('.', ','),
 totalPayable: (fee * months).toFixed(2).replace('.', ','),
 });
 }
 };
 const reset = () => {
 setErrorMessage('');
 setTotal(null);
 };


  
  return (
  <View>
   <StatusBar barStyle="light-content"/>
   <SafeAreaView style={styles.header1}>
   <Text style={styles.headapp}>cotizador de prestamos</Text>
   <Forms5/>

  
   </SafeAreaView>

   <View>

  

   </View>

   <View>
   <Text></Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Result5
   capital={capital}
   interest={interest}
   months={months}
   total={total}
   errorMessage={errorMessage}


   />
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   <Text>ㅤ⠀ㅤ</Text>
   
   
   </View>

   <View>
   <Footer5></Footer5>
   <Text>footer</Text>
   </View>
  </View>

  

   
  
  );
}

const styles = StyleSheet.create({

  



  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  headapp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15,

  },


  header1:{
   backgroundColor:colors.PRIMARY_COLOR,
   height:200,
   borderBottomLeftRadius:30,
   borderBottomRightRadius:30,
   alignItems:'center'

  },



  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
