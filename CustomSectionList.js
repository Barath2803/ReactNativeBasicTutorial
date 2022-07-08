import { Text, View, SectionList, StyleSheet } from 'react-native'
import React from 'react'


export default function CustomSectionList(props) {
    return (
        <View style={styles.container}>
            <SectionList
                sections={props.data}
                keyExtractor={(item, index) => index + item}
                renderItem={(item) => (
                    <Text style={styles.text}>{item}</Text>
                )}
                renderSectionHeader={({ section }) => (
                    <View style={styles.item}>
                        <Text style={styles.text}>{section.title}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 60,
    },
    item: {
        padding: 20,
        backgroundColor: 'lightblue',
        margin: 5,
    },
    text: {
        fontSize: 24,
    },
})