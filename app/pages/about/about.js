import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon,Button,Container,Header,Content,Left} from 'native-base';



export default class AboutPage extends Component { 
    render(){
        return (
           
            <Container>
                <Header>
                <Left>
                        <Icon name="ios-menu" onPress={()=>
                        this.props.navigation.navigate("DrawerOpen")} />
                 </Left>   
                </Header>
                 <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Text>About screen </Text>
                </Content>
            </Container>
        );
    }
}
