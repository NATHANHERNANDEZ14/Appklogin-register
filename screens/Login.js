import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle,
     StyledFormArea, LeftIcon, StyledInputLabel, StyledTextInput, RightIcon, Colors } from '../components/style';

     // formik
import { Formik } from 'formik';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { useState as useStateDuplicate } from 'react-native'; 

const { brand, darkLight } = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
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
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerContainer>
        </StyledContainer>
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
             <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Login;
