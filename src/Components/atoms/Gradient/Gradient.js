import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

const FROM_COLOR = 'rgba(73, 31, 105, 0.914)';
const TO_COLOR = 'rgba(51, 200, 160, 0.92)';

const Gradient = ({ children }) => {
    return (
        <View style={ { flex: 1 } }>
            <Svg style={ StyleSheet.absoluteFillObject }>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <Stop offset="0" stopColor={ FROM_COLOR }/>
                        <Stop offset="0.5" stopColor={ TO_COLOR }/>
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)"/>
            </Svg>
            { children }
        </View>
    );
};

export default Gradient;
