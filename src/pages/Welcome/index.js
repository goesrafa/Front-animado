import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain" />
            </View>

            <Animatable.View daley={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>EasyWay - Produtos e muito mais</Text>
                <Text style={styles.text}>Login para acessar</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Signin')} style={styles.button}>
                    <Text tyle={styles.ButtonText}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#20B2AA"
    },
    containerLogo: {
        flex: 2,
        backgroundColor: "#20B2AA",
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#008080',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 10
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#20B2AA',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#white',
        fontWeight: 'bold'
    }
})