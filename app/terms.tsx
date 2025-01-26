import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const TermsScreen = () => {
    return (
        <LinearGradient
            colors={['#f4cccc', '#E7DAF5', '#d9f0fd']} // 색상 배열
            style={styles.safeView}
            start={{ x: 0, y: 0 }} // 사선 시작 (좌측 상단)
            end={{ x: 1, y: 1 }} // 사선 끝 (우측 하단)
        >
            <ScrollView contentContainerStyle={styles.container}>

                <Text style={styles.title}>Terms & Conditions</Text>
                <Text style={styles.text}>
                    1. Introduction
                    Welcome to [App Name] (“we,” “our,” “us”). By using our mobile application (“App”), you agree to comply with these Terms & Conditions.
                </Text>
                <Text style={styles.text}>
                    2. Eligibility
                    You must be at least 16 years old to use this App. By using the App, you confirm that you meet this age requirement.
                </Text>
                <Text style={styles.text}>
                    3. Privacy & Data Protection
                    Your privacy is important to us. We process your personal data in accordance with the UK GDPR and Data Protection Act 2018. For detailed information on how we collect, use, and store your personal data, please refer to our Privacy Policy.
                </Text>
                <Text style={styles.text}>
                    4. Acceptable Use
                    You agree to use the App only for lawful purposes and in a manner that does not infringe the rights of others.
                </Text>
                <Text style={styles.text}>
                    5. Intellectual Property
                    All content and materials within the App, including text, graphics, logos, and code, are the intellectual property of [Your Company Name] and are protected by copyright laws. You may not reproduce, distribute, or create derivative works without prior written consent.
                </Text>
                <Text style={styles.text}>
                    6. Limitation of Liability
                    We do our best to ensure the App operates smoothly. However, we are not liable for:
                    - Interruptions, errors, or delays in the App’s performance.
                    - Loss of data or damage caused by using the App.
                    - Any unauthorised access to your account due to negligence in safeguarding your login credentials.
                </Text>
                <Text style={styles.text}>
                    7. Changes to the Terms
                    We may update these Terms & Conditions from time to time. Significant changes will be notified via the App or email. Your continued use of the App after such changes constitutes your acceptance of the updated terms.
                </Text>
                <Text style={styles.text}>
                    8. Termination
                    We reserve the right to suspend or terminate your access to the App if you violate these Terms & Conditions.
                </Text>
                <Text style={styles.text}>
                    9. Governing Law
                    These Terms & Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising will be subject to the exclusive jurisdiction of the courts of England and Wales.
                </Text>
                <Text style={styles.text}>
                    10. Contact Us
                    If you have any questions or concerns about these Terms & Conditions, you can contact us at:
                    Email: [contact email]
                    Address: [company address]
                </Text>
            </ScrollView>
        </LinearGradient>
    )
}

export default TermsScreen

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        // padding: 20,
      },
    container: {
        // flexGrow: 1,
        // flex:1,
        backgroundColor: 'white',
        margin: 20,
        borderRadius: 20,
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#555',
        marginBottom: 12,
    },
})
