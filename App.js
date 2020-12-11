
import React, { Component } from 'react'
import { Text, View, StyleSheet, Button} from 'react-native'
import {styles} from './mystyles';
import {names, mes} from './constants/'
import {ButtonComponent, NameText, WelcomeText } from './components';

 class App extends Component {
   constructor(props){
     super(props)
     this.state={
       welcomeMes: mes.welcomeMes,
      userName: names.userNameForIsm,
      }
   }

   ChangeName=()=>{
this.setState({userName: names.userNameForEld})
   }
  render() {
    return (
      <View style={{flex: 1}}>
        <WelcomeText smessage={this.state.welcomeMes}/>
        <NameText sname={this.state.userName} smessage={this.state.welcomeMes}/>
        <ButtonComponent title={"Click Me Please"} onPress={this.ChangeName} />
      </View>
    )
  }
}
export default App;
