import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image, Alert } from 'react-native';


let timer = null;
let ss = 0;
let mm ;


function App() {
  const [numero, setNumero] = useState(0);
  const [textoBotao, setTextoBotao] = useState('Start');
  const [descansado, setDescansado] = useState(false);
 const [time,setTime] = useState(25);



function  StartWork(){
  setTextoBotao('Pause');


  mm = time;
  if (timer != null) {
    clearInterval(timer);
    timer = null;
    setTextoBotao('Start');
  } 

  if(timer === null){
    timer  = setInterval(() => {
      if (ss == 0) {
        ss = 60;
        mm--;
      }
      ss--;
  
      if(ss == 0 && mm == 0) {
        if(descansado === true){
          setDescansado(false);
          setTime(25);
          alert('Vamos voltar ao trabalho');
          Clear();
        }else{
          BreakTime();
        }
          
      };
          
        let format =
        (mm < 10 ? '0' + mm : mm) + ':' +
        (ss < 10 ? '0' + ss : ss);
  
      setNumero(format);
  
      
    },1);}
  }
 

function BreakTime(){
  setDescansado(true);
  setTextoBotao('Start');
  setTime(5);
  clearInterval(timer)
  alert('Hora do descanso');
}

 function Clear(){

    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    };
    mm = 0;
    ss = 0;

    let format =
      (mm < 10 ? '0' + mm : mm) + ':' +
      (ss < 10 ? '0' + ss : ss);

    setNumero(format);

    setTextoBotao('Start');

 }


  return (
    <View style={styles.container}>


      <Image source={require('./assets/crono.png')} />
      <Text style={styles.timer}>{numero}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={StartWork}>
          <Text style={styles.btnText}>{textoBotao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Clear}>
          <Text style={styles.btnText}>Clear</Text>
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