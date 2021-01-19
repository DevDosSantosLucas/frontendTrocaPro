import React from 'react'; 
import { View, Text,TextInput,TouchableOpacity,StyleSheet,SectionList} from 'react-native';

         import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
         import PhotoIcon from 'react-native-vector-icons/MaterialIcons';


export default function AddItems(){
    const DATA = [{
        title: "Informe o Valor a Negociar!",
          data: ["  0 -  49",
           "  50 -  99",
           "100 - 149"]
           // {key: '150 - 199'},
           // {key: '200 - 249'},
           // {key: '250 - 299'},
           // {key: '300 - 349'},
           // {key: '350 - 399'},
           // {key: '400 - 449'},
           // {key: '450 - 500'},
           // {key: '  OUTRO  '},
          }, ];
          
    return(<View>
        <View style = {styles.container}>
        <Icon name="package-variant" size={100} />
        <Text style = {styles.title}> ANUNCIAR{'\n'} PRODUTO</Text>
        </View>

        <View style = {styles.photos}>
        <PhotoIcon name ='add-a-photo' size = {30}/>
        <Text> Adicionar Foto:</Text>
        </View>
        <View style = {styles.container} >
        <PhotoIcon name ='add-photo-alternate' size = {100}/>
        <PhotoIcon name ='add-photo-alternate' size = {100}/>
        <PhotoIcon name ='add-photo-alternate' size = {100}/>
        </View>
            <View style = {styles.form}>
            <TextInput  style = {styles.input}               
                placeholder = "Digite o nome do seu Produto!"
                placeholderTextColor = "#999"/>
            <TextInput  style = {styles.input}               
                placeholder = "Descreva o seu Produto!"
                placeholderTextColor = "#999"/>
            <TextInput     style = {styles.input}              
                placeholder = "Informe o Valor a Negociar!"
                placeholderTextColor = "#999"/>


            
            <TouchableOpacity style = {styles.button}
            onPress = {()=>{}}>
                    <Text style = {styles.buttonText}>Adicionar Item</Text>
                
            </TouchableOpacity>
               </View>
        </View>
        
    );
   
    
    
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    title:{
        fontSize:25, 
        fontWeight: 'bold',
    },
    photos:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
    },
  
    
});