import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Define o componente App

const App = () => {

  return (
    <SafeAreaView style={styles.container} >
      
      <View style={styles.quadradoVermelho} />

      <View style={styles.circuloAzul} />

      <View style={styles.textoContainer} />
      
      <Text style={styles.text}>the smiths</Text>
    </SafeAreaView>
  );
};


// Definindo os estilos para o aplicativo
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  // O quadrado vermelho é posicionado no canto superiro esquerdo

  quadradoVermelho:{
    position: 'absolute',
    top: 10,
    left: 0,
    width: 200,
    height: 200,
    backgroundColor:'#ce2340',
    marginTop: 20
  },
  // Circulo azul e posicionando no centro

  circuloAzul:{
    width: 200,
    height: 200,
    backgroundColor:'#1A50C5FF',
    borderRadius: 100,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -100,
    marginTop: -100
  },

  // A view com texto posicionada no centro da tela
  textoContainer:{
    marginTop: 400,
    padding: 40,
    backgroundColor: '#A5B2CFFF',
    borderRadius: 5,
    width: 350,
    height: 200,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center', 

  },

  // O texto é centralizado dentro da view
  text:{
    fontSize: 24,
    color: '#080808FF',
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 60
  },

})

export default App;