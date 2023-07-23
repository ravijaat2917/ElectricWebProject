import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Button from '../components/Button'

export class Waregister extends Component {
    render() {
        return (
            <View style={styles.center}>
                <TextInput
                    placeholder='Enter OTP'
                    style={{
                        width: "100%",
                        textAlign: 'center',
                        border: '1px solid black',
                        padding: '12px',
                        borderRadius: '10px',
                        marginBottom: '20px',
                        marginVertical: '8',
                    }}
                />
                <Button

                    title="Submit"
                    onPress={() => Alert.alert('Button Pressed')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    center: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '10px,'
    }
})

export default Waregister
