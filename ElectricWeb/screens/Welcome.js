import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '30px' }}>
                <View>

                    <Image
                        source={require("../assets/ElectricWeb-Dark-Logo.png")}
                        style={{
                            height: 200,
                            width: 200,
                        }}
                    />
                </View>
            </View>
            <View style={{ textAlign: 'center' }}>
                <Text style={{ marginTop: '40px', textAlign: 'center', fontSize: '25px', fontWeight: '700' }}>Electric Web</Text>
            </View>
            <View style={{ textAlign: 'center' }}>
                <Text style={{ marginTop: '10px', textAlign: 'center', fontSize: '20px', fontWeight: '400' }}>EV Charging Simplified</Text>
            </View>
            <Button
                title="Sign In"
                onPress={() => navigation.navigate("Login")}
                style={{
                    marginTop: 22,
                    width: "100%"
                }}
            />
            <Button
                title="Sign Up"
                onPress={() => navigation.navigate("Signup")}
                style={{
                    marginTop: 22,
                    width: "100%"
                }}
            />
            <View>
                <Text style={{textAlign:'center' , marginTop:'10px'}}>
                    Skip for now &gt;
                </Text>
            </View>
        </LinearGradient>
    )
}

export default Welcome