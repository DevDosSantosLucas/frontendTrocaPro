// import React from 'react';
import React, { useEffect ,useState} from 'react';
// import {View,Button,StyleSheet} from 'react-native';
import { ScrollView, View, StyleSheet, Switch, Text, TextInput, TouchableOpacity ,Image} from 'react-native';

// import {signIn} from '../services/auth';

import {useAuth} from '../contexts/auth';

import { RectButton } from 'react-native-gesture-handler';
// import {useNavigation, useRoute} from '@react-navigation/native';
// import OrphanageDetails from '../OrphanageDetails';

import {useNavigation} from '@react-navigation/native';



// const styles = StyleSheet.create({
//     container: {flex: 1, justifyContent: 'center', alignItems : 'center'},
// });



const SignIn = ()=>{
    const [whatsapp,setWhatsapp] =useState('');  
    const [password,setPassword] =useState('');

    const {signed,user,signIn} = useAuth();
    console.log(signed);
    console.log(user);
    console.log(signIn);

    const navigation = useNavigation();


    function handleSignUp(){
        navigation.navigate('SignUp');

    }

    function handleSignIn(){
        
    

    

        const data = new FormData();

        data.append('whatsapp', String(whatsapp));
        data.append('password', password);



     console.log("logar", data);
    //  signIn(data);
    }

    return(
        <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
        <Text style={styles.title}>Logar:</Text>
  
          
        <Text style={styles.label}>Número</Text>
        <TextInput
          style={styles.input}
          value={whatsapp}
          // onChangeText = {text => setName(text)} assim tbm pode ser
          onChangeText = {setWhatsapp}
        />
  
    
  
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value = {password}
          onChangeText = { setPassword}
        />
        
  
        
  
        <RectButton style={styles.nextButton} onPress={handleSignIn}>
          <Text style={styles.nextButtonText}>Entrar</Text>
        </RectButton>

        <TouchableOpacity style = {styles.button}
                                     onPress = {handleSignUp}>
                            <Text style = { styles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </ScrollView>
    )
  }

 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    title: {
      color: '#5c8599',
      fontSize: 24,
    //   fontFamily: 'Nunito_700Bold',
      marginBottom: 32,
      paddingBottom: 24,
      borderBottomWidth: 0.8,
      borderBottomColor: '#D3E2E6'
    },
  
    label: {
      color: '#8fa7b3',
    //   fontFamily: 'Nunito_600SemiBold',
      marginBottom: 8,
    },
  
    comment: {
      fontSize: 11,
      color: '#8fa7b3',
    },
  
    // input: {
    //   backgroundColor: '#fff',
    //   borderWidth: 1.4,
    //   borderColor: '#d3e2e6',
    //   borderRadius: 20,
    //   height: 56,
    //   paddingVertical: 18,
    //   paddingHorizontal: 24,
    //   marginBottom: 16,
    //   textAlignVertical: 'top',
    // },
  
    uploadedImagesContainer:{
      flexDirection: 'row',
    },
    uploadedImage:{
      width: 64,
      height: 64,
      borderRadius: 20 ,
      marginBottom: 32,
      marginRight:8
    },
  
    imagesInput: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      borderStyle: 'dashed',
      borderColor: '#96D2F0',
      borderWidth: 1.4,
      borderRadius: 20,
      height: 56,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 32,
    },
  
    switchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
    },
  
    nextButton: {
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      marginTop: 32,
    },
  
    nextButtonText: {
    //   fontFamily: 'Nunito_800ExtraBold',
      fontSize: 16,
      color: '#FFF',
    },

    // container:{
    //     flex:1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    form:{
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30,
    },
    input:{
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal:20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 20
    },

    button: {
        height: 42,
        backgroundColor: "#008B8B",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
  })
export default SignIn;