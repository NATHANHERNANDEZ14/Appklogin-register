import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle,
     StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors } from '../componets/styles';
import {Formik} from 'formik';
// iconos 
import {Octicons} from '@expo/vector-icons';

import {View} from 'react-native';
// Colores
const {brand, darkLight} = Colors;

const Login = () => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/img/logo.jpg')}/>
                <PageTitle>Bienvenidos</PageTitle>
                <SubTitle>Iniciar sesión en la cuenta</SubTitle>

                <Formik
                 initialValues={{email: '', password: ''}}
                 onSubmit={(values) => {
                    console.log(values);
                 }}
                 >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput
                        label= "Email Addres"    
                        icon= "mail"
                        placeholder = "neitan@gmail.com"
                        placeholderTextColor={darkLight}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                        />
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({label, icon,  ...props}) => {
 return (
    <View>
        <LeftIcon>
            <Octicons name='icon' size={30} color={brand} />
        </LeftIcon>
        <StyledInputLabel>{label}</StyledInputLabel>
        <StyledTextInput {...props}/>
    </View>
 )
}

export default Login;