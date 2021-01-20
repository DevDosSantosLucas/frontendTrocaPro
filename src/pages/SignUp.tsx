import React, { useEffect ,useState} from 'react';
import { ScrollView, View, StyleSheet, Switch,Button,
   Text, TextInput, TouchableOpacity ,Image,Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker'
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
// import OrphanageDetails from '../OrphanageDetails';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import api from '../services/api';
import ibgeAPI from '../services/apiIBGE';


interface WhatsApp{
  // OrphanageDataRouteParams {
    // position:{
    //     latitude: number;
    //     longitude: number;
    // }
    whatsapp: string
}

// interface UF{
//   uf:string       
// }

export default function SignUp() {
    const [whatsapp,setWhatsapp] =useState('');  
    const [name,setName] =useState('');
    const [city,setCity] =useState('');

    // const [uf,setUf] =useState<UF | null>(null)  ;//<==========
    const [uf,setUf] =useState('') ;//<==========

    const [password,setPassword] =useState('');
    const [avatar, setAvatar] = useState(null);

    // const [curso,setCursos] = useState(['Android','NodeJs'])

    const navigation = useNavigation();

    // const route = useRoute();

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
   
    async function handleCreateUser(){


        const data = new FormData();

        data.append('whatsapp', String(whatsapp));
        data.append('name',name);
        data.append('city', city);
        data.append('uf', String(uf));
        data.append('avatar', String(avatar));
        data.append('password', password);

        
        // images.forEach((image, index) =>{
        //     data.append('images',{
        //         name: `image_${index}.jpg`,
        //         type: 'image/jpg',
        //         uri: image,
        //     }as any)
        // })
        await api.post('signup',data)

        navigation.navigate('SignIn');
    } 



    const handleSelectImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      // console.log(result);
      // const {avatar} =result
      // if (!result.cancelled) {
      //   setAvatar(result.);
      // }
    };
      

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Cadastre - se :</Text>

      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        // onChangeText = {text => setName(text)} assim tbm pode ser
        onChangeText = {setName}
      />

      <Text style={styles.label}>Número</Text>
      <TextInput
        style={styles.input}
        value={whatsapp}
        // onChangeText = {text => setName(text)} assim tbm pode ser
        onChangeText = {setWhatsapp}
      />

      <Text style={styles.label}>Cidade</Text>
      <TextInput
        style={styles.input}
        multiline
        value = {city}
        onChangeText = { setCity}
      />

      <Text style={styles.label}>uf</Text>
      {/* <Picker
        selectedValue={uf}
        style={{ height: 50, width: 150 }}
        onValueChange={(newUf, ufIndex) => setUf(newUf: uf)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker> */}
      <TextInput
        style={styles.input}
        multiline
        value = {uf}
        onChangeText = { setUf}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        value = {password}
        onChangeText = { setPassword}
      />

      <Text style={styles.label}>Avatar</Text>

       <View style = { styles.uploadedImagesContainer}>
       {/* {avatar && <Image source={{ uri: avatar }} style={{ width: 200, height: 200 }} />} */}
       
         {/* <Image source={uri: avatar,cancelled:false }} style={{ width: 200, height: 200 }} /> */}
      </View>

      

      <TouchableOpacity style={styles.imagesInput} onPress={handleSelectImage}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      

      <RectButton style={styles.nextButton} onPress={handleCreateUser}>
        <Text style={styles.nextButtonText}>Cadastrar</Text>
      </RectButton>
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
    marginBottom: 32,
    paddingBottom: 24,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3E2E6'
  },

  label: {
    color: '#8fa7b3',
    
    marginBottom: 8,
  },

  comment: {
    fontSize: 11,
    color: '#8fa7b3',
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1.4,
    borderColor: '#d3e2e6',
    borderRadius: 20,
    height: 56,
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginBottom: 16,
    textAlignVertical: 'top',
  },

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
    fontSize: 16,
    color: '#FFF',
  }
})