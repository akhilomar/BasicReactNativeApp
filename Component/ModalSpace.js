import React, {useState, useEffect} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { WebView } from 'react-native-webview';

function ModalSpace(props){

    const [showmodal, setModal] = useState(false);


        const handleClose = () => {
        setModal(false)
        }
    
        const handlePress = () => {
            setModal(true)
        }

    return(
<View>
<TouchableOpacity>
  <Card elevation = {15} style = {{margin : 20}} onPress = {() => handlePress()}> 
  <Card.Cover source={{ uri: props.img }} />
    <Card.Content style = {{backgroundColor: "#7bed9f"}}>
      <Title numberOfLines={2} style = {{fontWeight: "bold"}}>{props.title}</Title>
    </Card.Content>
  </Card>
        <View>
            <Modal
                transparent={true}
                visible={showmodal}
            >
                <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
                    <View style={{ backgroundColor: "#ffffff", margin: 1, padding: 10, borderRadius: 15, flex: 1 }}>
                         <WebView 
                        style={{flex:1}}
                        javaScriptEnabled={true}
                        mediaPlaybackRequiresUserAction = {false}
                        // scrollEnabled={false}
                        allowsFullscreenVideo={true}
                        scrollEnabled = {false}
                        // userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
                        source={{ uri: props.link }}
                        />
                        <Button onPress = {handleClose} style = {{backgroundColor:"#3742fa", "font-weight":"bold"}} color = "white">Close</Button>
                    </View>
                </View>
            </Modal>
        </View>
</TouchableOpacity>
</View>
    )
}

export default ModalSpace;