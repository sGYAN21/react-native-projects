import React, { use } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';

import arrowLeft from '../assets/icons/arrowLeft.png';
import { paymentMethods } from '../constants/constants';
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {

    const navigation = useNavigation<any>();
    return (
        <SafeAreaView style={styles.container}>
         
            <View style={styles.header}>
                <TouchableOpacity
                onPress={() => navigation.goBack()}
                >
                    <Image source={arrowLeft} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Checkout</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Order */}
                <View style={styles.summarySection}>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Order</Text>
                        <Text style={styles.summaryValue}>₹ 7,000</Text>
                    </View>
                    <View style={styles.summaryRow}>
                        <Text style={styles.summaryLabel}>Shipping</Text>
                        <Text style={styles.summaryValue}>₹ 30</Text>
                    </View>

                    <View style={styles.summaryRow}>
                        <Text style={[styles.totalLabel]}>Total</Text>
                        <Text style={[styles.totalValue]}>₹ 7,030</Text>
                    </View>
                </View>
                <View style={styles.divider} />

                {/* Payment */}
                <Text style={styles.sectionTitle}>Payment</Text>
                {paymentMethods.map((method) => (
                    <TouchableOpacity
                        key={method.id}
                        style={[styles.paymentCard, method.selected && styles.selectedCard]}
                    >
                        <Image source={method.icon} style={styles.methodIcon} />
                        <Text style={styles.cardNumber}>{method.number}</Text>
                    </TouchableOpacity>
                ))}

                {/* Action Button */}
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 70,
        paddingVertical: 20,
        paddingBottom:50,
        
    },
    backIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#000',
        fontFamily: 'Montserrat',
        letterSpacing: 1
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },
    summarySection: {
        // marginTop: 10,
        marginBottom: 5,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    summaryLabel: {
        fontSize: 16,
        color: '#A8A8A8',
        fontFamily: 'Montserrat',
        letterSpacing: 1
    },
    summaryValue: {
        fontSize: 16,
        color: '#A8A8A8',
        fontFamily: 'Montserrat',
      
    },
    divider: {
        height: 2,
        backgroundColor: '#EAEAEA',
        marginVertical: 25,
        marginBottom:40,
    },
    totalLabel: {
        fontSize: 16,
        color: '#444',
        fontWeight: '500',
        fontFamily: 'Montserrat',
        letterSpacing: 1
    },
    totalValue: {
        fontSize: 16,
        color: '#444',
        fontWeight: '700',
        fontFamily: 'Montserrat',
        
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#222',
          fontFamily: 'Montserrat',
        letterSpacing: 1
    },
    paymentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        padding: 18,
        marginBottom: 15,
        borderWidth: 1.5,
        borderColor: 'transparent',
    },
    selectedCard: {
        borderColor: '#F83758', 
        backgroundColor: '#F9F9F9',
    },
    methodIcon: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
    },
    cardNumber: {
        color: '#666',
        fontSize: 14,
    },
    continueButton: {
        
        backgroundColor: '#F83758',
        borderRadius: 10,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    continueText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight:'bold',
        fontFamily: 'Montserrat',
        letterSpacing: 1
    },
});

export default CheckoutScreen;
