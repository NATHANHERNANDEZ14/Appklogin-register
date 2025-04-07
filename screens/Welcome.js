import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    InnerContainer, PageTitle, SubTitle,
    StyledFormArea, StyledButton, ButtonText, Line,
    WelcomeContainer, WelcomeImage, Avatar,
  } from '../components/style'; 
  

const Welcome = ({navigation}) => {
    return (
        <>
            <StatusBar style="light"/>
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('../assets/img/logo.jpg')}/>

                <WelcomeContainer>
                <PageTitle welcome={true}>Bienvenido amig@</PageTitle>
                <SubTitle welcome={true}>Hola un gusto</SubTitle>
                <SubTitle welcome={true}>olgassim@gmail.com</SubTitle>
                        <StyledFormArea>
                            <Avatar resizeMode="cover" source={require('../assets/img/logo.jpg')} />
                        <Line/> 
                            <StyledButton onPress={() => {navigation.navigate('Login')}}>
                                <ButtonText> Cerrar sesión </ButtonText>
                            </StyledButton>    
                        </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;
