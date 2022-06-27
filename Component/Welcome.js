import React from 'react';
import { Dimensions, View } from 'react-native';
import LottieView from 'lottie-react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Welcome extends React.Component {


  render() {
    return (
      <View >
      <View > 
      <LottieView 
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../android/app/src/main/assets/welcome.json')}
        autoPlay loop speed={1.8}
        width = {windowWidth}
        height = {windowHeight/1.1}
      />
      </View>
      </View>
    );
  }
}
