import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle,
    StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, StyledButton, ButtonText, Colors, MsgBox, Line,
    ExtraView, ExtraText, TextLink, TextLinkContent,
} from '../components/style';

// formik
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { View } from 'react-native';

//keyboard avoiding view
import KeyboardAvoidingWrapper  from './../components/KeyboardAvoidingWrapper';


const { brand, darkLight, primary } = Colors;

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('../assets/img/logo.jpg')} />
                <PageTitle>Bienvenidos</PageTitle>
                <SubTitle>Iniciar sesión en la cuenta</SubTitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome");
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Correo Electronico"
                                icon="mail"
                                placeholder="neitan@gmail.com"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />

                            <MyTextInput
                                label="Contraseña"
                                icon="lock"
                                placeholder="* * * * * * * * "
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>
                                    Inicio de Session
                                </ButtonText>
                            </StyledButton>
                            <Line/>
                            <StyledButton google={true} onPress={handleSubmit}>
                                <Fontisto name="google" color={primary} size={25}/>
                                <ButtonText google={true} > Iniciar sesión con Google </ButtonText>
                            </StyledButton>
                           <ExtraView>
                            <ExtraText> ¿Aún no tienes una cuenta? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Signup')}>
                                <TextLinkContent>Registrarse</TextLinkContent>
                            </TextLink>
                             </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

// ← corrección: añadir hidePassword en las props
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Login;
