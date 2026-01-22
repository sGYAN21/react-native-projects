import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    Dimensions,
} from 'react-native';
import background from '../assets/images/background.png'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');

export default function GetStarted() {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={background}
                style={styles.backgroundImage}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.6)', '#000000']}
                    style={styles.gradientContainer}
                >
                    <View style={styles.textWrapper}>
                        <Text style={styles.title}>
                            You want
                        </Text>
                        <Text style={styles.title}>
                            Authentic, here
                        </Text>
                        <Text style={styles.title}>
                            you go!
                        </Text>
                        <Text style={styles.subtitle}>
                            Find it here, buy it now!
                        </Text>
                    </View>
                    <View style={styles.textWrapper}>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.button}
                          onPress={() => navigation.navigate('home')}
                        >
                            <Text style={styles.buttonText}>Get Started</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    gradientContainer: {
        height: '67%',
        marginTop: 'auto',
        justifyContent: 'flex-end',
        paddingHorizontal: 25,
        paddingBottom: 60,
    },
    textWrapper: {
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'semibold',
        color: '#FFFFFF',
        textAlign: 'center',
        lineHeight: 35,
        marginBottom: 20,
        letterSpacing:1.2 ,
        fontFamily: 'Montserrat',
    },
    subtitle: {
        fontFamily: 'Montserrat',
        fontWeight: 'semibold',
        fontSize: 16, 
        color: '#F2F2F2',
        textAlign: 'center',
        marginBottom: 40,
        letterSpacing: 1,
    },
    button: {
        backgroundColor: '#F83758',
        width: width * 0.8,
        paddingVertical: 18,
        borderRadius: 5,
        alignItems: 'center',

        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'semibold',
    },
});
