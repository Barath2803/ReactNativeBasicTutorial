import { Pressable, Text, View, StyleSheet, } from 'react-native';
import React, { useState } from 'react';

export default function App() {

    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            {/* It is only for ISO stimulator*/}
            <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? 'yellow' : 'green' }, styles.text]}
                onPress={() => setCount(count + 1)}>

                {({ pressed }) => <Text>{pressed ? 'pressed' : 'Press Me'}</Text>}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 60,
    },
    text: {
        padding: 20,
        marginVertical: 10,
    }
})

