import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const LoginPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Maholo</Text>
            <Image
                source={require('../assets/images/mahalologo.png')}
                style={styles.logo} resizeMode='contain'
            />
            <View style={{ marginTop: 20 }}>
                <TextInput placeholder='Email' style={styles.inputField} />
                <TextInput placeholder='Password' style={styles.inputField} />
            </View>
            <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                <Text style={{ color: '#6E998E', fontWeight: 'bold', paddingVertical: 5 }}>Forgot Password?</Text>
            </View>

            <Pressable style={{ alignItems: 'center', marginTop: 40 }}
                onPress={() => navigation.navigate('Desclaimer')}
            >
                <View style={styles.loginbtn}>
                    <Text
                        style={{ color: '#fff', fontWeight: 'bold' }}

                    >
                        Login
                    </Text>
                </View>
            </Pressable>

            <View>
                <Image source={require('../assets/images/socials.png')} style={styles.providerLogo} resizeMode='contain' />
            </View>
            <View style={styles.signuptext}>
                <Pressable
                    onPress={() => navigation.navigate('SignUpPage')}
                >
                    <Text>New to Maholo?
                        <Text
                            style={{ color: '#6E998E', fontWeight: 'bold', marginLeft: 5 }}
                        >
                            {"  Sign Up"}
                        </Text>
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 60,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    logo: {
        width: 65,
        height: 87,
        alignSelf: 'center',
        overflow: 'hidden',
        marginTop: 20,
    },
    inputField: {
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#a9a9a9',
    },
    loginbtn: {
        backgroundColor: '#6E998E',
        width: 216,
        height: 41,
        borderRadius: 3,
        paddingVertical: 10,
        alignItems: 'center',
    },
    providerLogo: {
        alignSelf: 'center',
        marginTop: 40
    },
    signuptext: {
        alignSelf: 'center',
        marginTop: 40,
    }
});