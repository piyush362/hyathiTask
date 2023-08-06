import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Keyboard, Platform } from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../firebase.js';


const SignUpPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');

    const [keyboardOffset, setKeyboardOffset] = useState(0);

    const handleSignUp = () => {
        // alert(`Email: ${email}, Password: ${password}`)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('User Created Successfully')
                navigation.replace('Desclaimer')

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("errorMessage")
                // ..
            });
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
                setKeyboardOffset(e.endCoordinates.height);
            });

            const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
                setKeyboardOffset(0);
            });

            return () => {
                keyboardDidShowListener.remove();
                keyboardDidHideListener.remove();
            };
        }
    }, []);

    return (
        <View style={[styles.container, { paddingBottom: keyboardOffset }]}>
            <View>
                <Text style={styles.heading}>Welcome to Maholo</Text>
                <Image
                    source={require('../assets/images/mahalologo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        placeholder="Full Name"
                        style={styles.inputField}
                        value={fullName}
                        onChangeText={(text) => setFullName(text)}
                    />
                    <TextInput
                        placeholder="Email"
                        style={styles.inputField}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        placeholder="Phone Number"
                        style={styles.inputField}
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={(text) => setPhone(text)}
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.inputField}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                    <TextInput
                        placeholder="Confrom Password"
                        style={styles.inputField}
                        value={confirmPass}
                        onChangeText={(text) => setConfirmPass(text)}
                        secureTextEntry={true}
                    />
                </View>

                <View style={{ alignItems: 'center', marginTop: 40 }}>
                    <Pressable
                        style={styles.loginbtn}
                        // onPress={() => navigation.navigate('Desclaimer')}
                        onPress={handleSignUp}

                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sign Up</Text>
                    </Pressable>
                </View>

                <View>
                    <Image
                        source={require('../assets/images/socials.png')}
                        style={styles.providerLogo}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.signuptext}>
                    <Pressable onPress={() => navigation.navigate('LoginPage')}>
                        <Text>
                            Already on Maholo?
                            <Text style={{ color: '#6E998E', fontWeight: 'bold', marginLeft: 5 }}>
                                {"  Login"}
                            </Text>
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default SignUpPage;

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
        marginTop: 40,
    },
    signuptext: {
        alignSelf: 'center',
        marginTop: 40,
    },
});
