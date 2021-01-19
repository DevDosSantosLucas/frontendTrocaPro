import React,{useEffect,useState} from 'react'; 
import { Alert , View, Text,StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

          import Icon from 'react-native-vector-icons/FontAwesome5';
          import Iconswap from 'react-native-vector-icons/MaterialCommunityIcons';
          import {RectButton, TouchableOpacity, FlatList} from'react-native-gesture-handler';
          import api from '../services/api';

          

export default function Perfil({route,navigation}){

         const  {user}  = route.params;
        
        
        //  const _id  = navigation.getParam('email');
        const [users,setUsers] =useState([]);


    function handlePerfilEdit(){
    navigation.navigate('PerfilEdit');
    // Alert.alert('Editar Perfil');
    }
    function handleSetting(){
        Alert.alert('CONFIGURAÇÃO');
    }
    function handleMyItems(){
            
            // <Text>teste</Text>
        // Alert.alert('Feed Back');
    }
    function handleMySwap(){
      
        // <Text>teste</Text>
    // Alert.alert('Feed Back');
    }

    useEffect( () => {
        async function loadItems() {
            const response = await api.post('/sessions', {
                headers: {
                    email: _id
                }
            })

                     // NOT BEST SOLUTION
                // const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

                 //setUsers(shuffleArray(response.data))
            setItems(response.data)
        }
        loadItems()
    }, [_id]);

    return(
    <ScrollView style = { styles.container}> 
        <View style = {styles.topPerfil}>
            <Icon name = 'user-circle' size = {100}/> 
                <View>
    <Text style = {styles.input}>{JSON.stringify(user.name)}NOME!</Text>
                    <Text style = {styles.input}>{JSON.stringify(email._id)}WHATSAPP!</Text>

                    <View style ={styles.row}>
                        <Text style = {styles.input}>UF!</Text>
                        <Text style = {styles.input}>CIDADE!</Text>
                    </View>
                </View>

            {/* <View style ={styles.icons}>
                <RectButton style = {styles.button} onPress = {handleSetting}>
                    <Icon name = 'user-cog'   size = {30}/>
                    
                </RectButton>
                <RectButton style = {styles.button} onPress = {handlePerfilEdit}>
                    <Icon name = 'user-edit'   size = {30}/>
                   
                </RectButton>
              </View> */}
   
        </View>
            <View style ={styles.rowButtons}>
                {/* <TouchableOpacity style ={styles.optionButton}
                    onPress = {handleMyItems}>
                    <Icon name = 'box-open' size = {30}/>
                </TouchableOpacity> */}
                <TouchableOpacity style ={styles.optionButton}>
                 <Text>Troque{'\n'} agora</Text>
                     {/* onPress = {handleMySwap}> */}
                    {/* <Iconswap name = 'swap-horizontal-bold' size = {30}/> */}
                </TouchableOpacity>
                <RectButton style ={styles.optionButton} onPress = {handleSetting}>
                    <Icon name = 'user-cog'   size = {30}/>
                    
                </RectButton>
                <RectButton style ={styles.optionButton} onPress = {handlePerfilEdit}>
                    <Icon name = 'user-edit'   size = {30}/>
                    
                </RectButton>
            </View> 

            
                {/* <RectButton>
                    <Icon name = 'image' size = {200}/>
                </RectButton> */}
                
                
                <View style = {styles.row}>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                        <View style = {styles.whatsApp}>
                            <Iconswap name = 'swap-horizontal-bold' size = {50}/>
                            
                            <RectButton>
                                <Iconswap name = 'whatsapp' size = {50} color= {'green'}/>
                            </RectButton>
                        </View>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                </View>
                <View style = {styles.row}>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                        <View style = {styles.whatsApp}>
                            <Iconswap name = 'swap-horizontal-bold' size = {50}/>
                            
                            <RectButton>
                                <Iconswap name = 'whatsapp' size = {50} color= {'green'}/>
                            </RectButton>
                        </View>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                </View>
                <View style = {styles.row}>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                        <View style = {styles.whatsApp}>
                            <Iconswap name = 'swap-horizontal-bold' size = {50}/>
                            
                            <RectButton>
                                <Iconswap name = 'whatsapp' size = {50} color= {'green'}/>
                            </RectButton>
                        </View>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                </View>
                <View style = {styles.row}>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                        <View style = {styles.whatsApp}>
                            <Iconswap name = 'swap-horizontal-bold' size = {50}/>
                            
                            <RectButton>
                                <Iconswap name = 'whatsapp' size = {50} color= {'green'}/>
                            </RectButton>
                        </View>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                </View>
                <View style = {styles.row}>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                        <View style = {styles.whatsApp}>
                            <Iconswap name = 'swap-horizontal-bold' size = {50}/>
                            
                            <RectButton>
                                <Iconswap name = 'whatsapp' size = {50} color= {'green'}/>
                            </RectButton>
                        </View>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                </View>
                <View style = {styles.row}>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                        <View style = {styles.whatsApp}>
                            <Iconswap name = 'swap-horizontal-bold' size = {50}/>
                            
                            <RectButton>
                                <Iconswap name = 'whatsapp' size = {50} color= {'green'}/>
                            </RectButton>
                        </View>
                    <RectButton>
                        <Icon name = 'image' size = {150}/>
                    </RectButton>
                </View>
                
            
            
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    topPerfil:{
        paddingLeft:10,
        paddingRight:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#008B8B'
    },
    row:{
        flexDirection: 'row',
        // backgroundColor:'#ddd'
        // alignItems: 'flex-start'
    },
    rowButtons:{
        flexDirection: 'row',
        backgroundColor:'#ddd'
    },
    whatsApp:{
        justifyContent:'center'
    },
    icons:{
        // paddingTop: 0,
        // flexDirection: 'row',
        alignSelf:'baseline',
        justifyContent: 'space-around',
        
    },
    input:{
        borderColor: '#ddd',
        paddingHorizontal:20,
        fontSize: 16,
        color: '#FFF',
        height: 30,
        fontWeight: 'bold',
        
    },

    button: {
        // flex: 0,
        margin: 5,
        // paddingTop:-10,
        // height: 80,
        alignItems: 'flex-end',
        alignSelf: 'flex-start'
        // justifyContent: 'space-evenly',

        
    },
    optionButton: {
        
        margin: 10,
        paddingLeft:'10%',
        paddingRight:'10%',
        // justifyContent: '',
        alignItems: 'center',
        // borderRadius: 25,
        
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    }
})