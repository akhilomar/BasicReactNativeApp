import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { View, Text, FlatList } from 'react-native';
import Loader from './Loader';
import ModalSpace from './ModalSpace';

function Dashboard({navigation}){
    const [data, setData] = useState([]);    
    const [isLoading, setLoading] = useState(false);
    const [value, setValue] = useState("New Smartphones")
    const key = 'AIzaSyCj4Bgvkjo9V66yiFQFt3HBSpjfYfDVS88'

    useEffect(() => {
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=${key}`)
        .then(res => res.json())
        .then(data => {
            setData(data.items)
            setLoading(false)
            console.log(data)
        })
    }, [])


    function Header(){
        return(
            <View style={{
                position:"absolute",
                top:0,
                left:0,
                right:0,
                height:45,
                backgroundColor:"black",
                flexDirection:"row",
                justifyContent:"space-between",
                elevation:4,
            }}>
              <View style={{
                  flexDirection:"row",
                  margin:5
              }}>
                 {/* <Fontisto
                  style={{
                      marginLeft:10
                  }}
                 name="film" size={32} color="#32ff7e"/> */}
                 <Text style={{
                     fontSize:22,
                     marginLeft:5,
                     color:"white",
                     fontWeight:"bold"
                 }}>DASHBOARD</Text>
              </View>
              <View style={{
                  flexDirection:"row",
                  justifyContent:"space-around",
                  width:110,
                  margin:5
              }}>
                  <Text style = {{fontSize:22,
                     marginLeft:5,
                     color:"white",
                     fontWeight:"bold"}} onPress = {() => navigation.navigate('Home')}>LOGOUT</Text>
              </View>
            </View>
                )
    }

    return(
        <View style = {{backgroundColor: "#2f3542"}}>
            <View>
                <Header />
            </View>
            <View style={{ marginTop: "15%" }}></View>
        {isLoading ? <Loader />
        :<View style = {{display: "flex", flexDirection: "column", paddingBottom: "10%"}}>
                <FlatList 
                maxToRenderPerBatch = {50}
                data = {data}
                renderItem = {({item}) => {
                    var z =  'https://youtu.be/' + item.id.videoId
                    return <ModalSpace
                            title={item.snippet.title}
                            img={`https://i.ytimg.com/vi/${item.id.videoId}/hqdefault.jpg`}
                            link = {z}
                        />
                }}
                />

        </View>}
        </View>
)
}

export default Dashboard;