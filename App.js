import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import vibrate from './utils/vibrate';

let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

function App() {
  const [numero, setNumero] = useState(0);
  const [textoBotao, setTextoBotao] = useState('Vai');
  const [ultimo, setUltimo] = useState(null);


  function Vai() {
    setTextoBotao('Pausar');
    if (timer != null) {
      clearInterval(timer);
      timer = null;
      setTextoBotao('Vai');
    } else {
      timer = setInterval(() => {
        ss++;
        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }



        let format =
          (hh < 10 ? '0' + hh : hh) + ':' +
          (mm < 10 ? '0' + mm : mm) + ':' +
          (ss < 10 ? '0' + ss : ss);

        setNumero(format);

      }, 1000)

    };

  }

  function Limpar() {

    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    };
    console.log(numero);
    setUltimo(numero);
    setNumero(0);
    hh = 0;
    mm = 0;
    ss = 0;


    setTextoBotao('Vai');
  }

  return (
    <View style={styles.container}>


      <Image source={require('./assets/crono.png')} />
      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={Vai}>
          <Text style={styles.btnText}>{textoBotao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>


    


    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D3D0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: -165,
    color: 'white'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 250,
    height: 20
  },
  btn: {
    width: 150,
    height: 50,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 9,
    marginTop: -50

  },
  btnText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    color: '#00D3D0',

  },
  ultimaCorrida: {
    flexDirection: 'row',
    width: 200,
    height: 30,


  },
  ultimaCorridaText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic'
  }
})

export default App;