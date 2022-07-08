import React, { useState } from 'react';
import { Button, InputAccessoryView, ScrollView, TextInput, StyleSheet } from 'react-native';

export default App = () => {
    const inputAccessoryViewID = 'uniqueID';
    const [text, setText] = useState('');

    return (
        <>
            <ScrollView keyboardDismissMode="interactive">
                <TextInput
                    style={styles.input}
                    inputAccessoryViewID={inputAccessoryViewID}
                    onChangeText={setText}
                    value={text}
                    placeholder={'Please type here…'}
                />
            </ScrollView>
            <InputAccessoryView nativeID={inputAccessoryViewID}>
                <Button
                    onPress={() => setText('')}
                    title="Clear text"
                />
            </InputAccessoryView>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 16,
        marginTop: 50,
    }
})