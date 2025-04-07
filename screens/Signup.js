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
import { View, TouchableOpacity } from 'react-native';

// Colors
const { brand, darkLight, primary } = Colors;

// Datetimepicker
import DateTimePicker from '@react-native-community/datetimepicker';

//keyboard avoiding view
import KeyboardAvoidingWrapper  from './../components/KeyboardAvoidingWrapper';

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const[date, setDate] = useState(new Date(2000, 0,1));

    // Actual date of birth to be sent 
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currenDate = selectedDate || date;
        setShow(false);
        setDate(currenDate);
        setDob(currenDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }
    return (
       <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Bienvenidos</PageTitle>
                <SubTitle>Crear cuenta nueva </SubTitle>

                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}

                <Formik
                    initialValues={{ fullName: '', email: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <StyledFormArea>
                            <MyTextInput
                                label="Nombre Completo"
                                icon="person"
                                placeholder="neitan bar"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('fullName')}
                                onBlur={handleBlur('fullName')}
                                value={values.fullName}
                            />

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
                                label="Fecha de nacimiento"
                                icon="calendar"
                                placeholder="YYYY - MM - DD"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('dateOfBirth')}
                                onBlur={handleBlur('dateOfBirth')}
                                value={dob ? dob.toDateString() : ''}
                                isDate={true}
                                editable={false}
                                showDatePicker={showDatePicker}
                            />

                            <MyTextInput
                                label="Confirmar Contraseña"
                                icon="lock"
                                placeholder="* * * * * * * * "
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmpassword')}
                                value={values.confirmpassword}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Inicio de Session</ButtonText>
                            </StyledButton>
                            <Line/>
                           <ExtraView>
                            <ExtraText> ¿Ya tienes una cuenta? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Login')}>
                                <TextLinkContent>Iniciar Session</TextLinkContent>
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
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
             <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};

export default Signup;
