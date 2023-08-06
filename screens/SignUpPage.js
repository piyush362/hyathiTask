import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React from 'react'

const SignUpPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Maholo</Text>
            <Image
                source={require('../assets/images/mahalologo.png')}
                style={styles.logo} resizeMode='contain'
            />
            <View style={{ marginTop: 20 }}>
                <TextInput placeholder='Full Name' style={styles.inputField} />
                <TextInput placeholder='Email' style={styles.inputField} />
                <TextInput placeholder='Phone Number' style={styles.inputField} keyboardType="numeric" />
                <TextInput placeholder='Password' style={styles.inputField} />
                <TextInput placeholder='Confrom Password' style={styles.inputField} />

            </View>

            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Pressable style={styles.loginbtn}
                    onPress={() => navigation.navigate('Desclaimer')}
                >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
                </Pressable>
            </View>

            <View>
                <Image source={require('../assets/images/socials.png')} style={styles.providerLogo} resizeMode='contain' />
            </View>

            <View style={styles.signuptext}>
                <Pressable
                    onPress={() => navigation.navigate('LoginPage')}
                >
                    <Text>Already on Maholo?
                        <Text
                            style={{ color: '#6E998E', fontWeight: 'bold', marginLeft: 5 }}
                        >
                            {"  Login"}
                        </Text>
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default SignUpPage

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