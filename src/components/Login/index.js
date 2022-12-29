import React, { useState } from "react";
import firebase from '../../services/firebaseConnection'

import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native";

export default function Login({changeStatus}) {
    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        if(type === 'login'){
            //aqui fazemos o login
            const user = firebase.auth().signInWithEmailAndPassword(email,password)
            .then((user)=>{
                changeStatus(user.user.uid)

            })
            .catch((err)=>{
                alert('Ops parece que deu algum erro.')
                return;
            })


        }else{
            //aqui fazemos o cadastro

            const user = firebase.auth().createUserWithEmailAndPassword(email,password)
            .then((user)=>{
                changeStatus(user.user.uid)
            })
            .catch((err)=>{
                alert('Ops parece que deu algum erro.')
                return;
            })

        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Seu email"
                style={styles.input}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                placeholder="**********"
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={[styles.handleLogin,{ 
                    backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'}]}
                onPress={handleLogin}
            >
                <Text style={styles.loginText}>
                    {type === 'login' ? 'Acessar' : 'Cadastrar'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={ ()=> setType(type => type === 'login' ? 'cadastrar' : 'login')}
            >
                <Text style={{ textAlign: 'center', color: '#000' }}>
                   {type === 'login' ? 'Criar uma conta' : 'Fazer login'}
                    </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 10,
        backgroundColor: '#F2f6fc'
    },
    input: {
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 4,
        heigth: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#141414'
    },
    handleLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 45,
        marginBottom: 10,
        borderRadius: 10,
    },
    loginText: {
        color: '#FFF',
        fontSize: 17,

    }
});