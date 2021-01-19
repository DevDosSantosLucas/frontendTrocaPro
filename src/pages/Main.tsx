import React,{useEffect,useState}from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View,StyleSheet, ScrollView, TextInput,Image,Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import api from '../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import {useNavigation} from '@react-navigation/native';


export default function Main({ route, navigation }) {
    // const navigation = useNavigation();


    // const  _id  = route.params.items;//
    
    // const   _id = route.params.items;  
    
    console.log('teste após params');
    // console.log(_id);
    // // const id = navigation.navigate('items');
    // // const _id  = navigation.getParam('items');
    // console.log(_id);
    // // const _id = this.props.route.params.items;



    const [items, setItems] = useState([]);

    useEffect( () => {
        async function loadItems() {
            const response = await api.get('/items', {
                // headers: {
                //     item: _id
                // }
            })

                     // NOT BEST SOLUTION
                // const shuffleArray = arr => arr.sort(() => Math.random() - 0.5)

                 //setUsers(shuffleArray(response.data))
            setItems(response.data)
        }

        loadItems()
    }, []);// }, [_id]);

    // useEffect(() => {
    //     AsyncStorage.getItem('techs')
    //         .then((storagedTechs) => {
    //             const techsArray = storagedTechs.split(',').map(tech => tech.trim())

    //             setTechs(techsArray)
    //         })
    // },[])

    async function handleLogout(){
        await AsyncStorage.clear();

        navigation.navigate('Login');
    }

    return (
    <View style = {styles.container}>
        <View style = {styles.cssSearch}>
        <TextInput style = {styles.input}
                type = "search"
                placeholder = "Pesquisar Itens"
                placeholderTextColor = "#999">
                    </TextInput>
                <Icon name="ios-search-sharp" size={40} 
                style = { styles.iconSearch}/>
        <TouchableOpacity 
        onPress = {handleLogout}>
                <Icon name="ios-filter" size={40} 
                style = { styles.iconFilter}/>
        </TouchableOpacity>
               
        </View>
        
        {/* <ScrollView style = {styles.itemsContainer}>
            {items.map(item => (

                <View key = {item._id} style = {styles.item}>
                <Image style = {styles.imagemItems}
                    source = {{uri:'http://prints.ultracoloringpages.com/3ed1ca88e6a5b18ac00c2406d7797574.png'}}/>
                <View style = {styles.description}>
                    <Text style = {styles.itemName}>{item.nameItem}</Text>
                    <Text style = {styles.itemDescription}numberOfLines = {1}>{item.description}</Text>
                </View>              
            </View> 

            ))}
             
                   
        </ScrollView> */}

<ScrollView style = {styles.itemsContainer}>
            {items.map(item => (

                <View key = {JSON.stringify(item._id)} style = {styles.item}>
                <Image style = {styles.imagemItems}
                    source = {{uri:'http://prints.ultracoloringpages.com/3ed1ca88e6a5b18ac00c2406d7797574.png'}}/>
                <View style = {styles.description}>
                    <Text style = {styles.itemName}>{JSON.stringify(item.nameItem)}</Text>
                    <Text style = {styles.itemDescription}numberOfLines = {1}>{JSON.stringify(item.description)}</Text>
                </View>              
            </View> 

            ))}
             
                   
        </ScrollView>


    </View>
    );

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        // alignSelf:'center',
        // justifyContent: 'center'
    },
    itemsContainer:{
        flex:1,
        alignSelf: 'stretch',
        // justifyContent: 'center',
        // maxHeight:800,

    },
    item:{
        borderWidth:1,
        borderColor: '#DDD',
        borderRadius:8,
        margin:30,
        overflow: 'hidden',
        top:0,
        bottom:0,
        left:0,
        right:0,
    },
    input:{
        width: '75%',
        height: '75%',
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 5,
        borderColor: '#CCC',
        borderRadius: 10,
       
    },
    cssSearch:{
        flexDirection: 'row',
        alignSelf: 'center', 
        alignContent: 'space-between',
        justifyContent: 'center',
        
    },
    iconFilter:{
        
    },
    iconSearch:{
        // alignItems: 'flex-end',
    },
    imagemItems:{
        flex:1,
        height:200,
    },
    description:{
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    itemName:{
        fontSize:16,
        fontWeight: 'bold',
        color: '#333'
    },
    itemDescription:{
        fontSize:14,
        color: '#999',
        marginTop: 5,
        lineHeight:18,
    }
});