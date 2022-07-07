import {
    Text, View, StyleSheet, SectionList
} from 'react-native';

export default function App() {

    const data = [
        {
            title: "title - 1",
            data: ['items 1-1', 'items 1-2', 'items 1-3']
        },
        {
            title: "title - 2",
            data: ['items 2-1', 'items 2-2', 'items 2-3']
        },
        {
            title: "title - 3",
            data: ['items 3-1', 'items 3-2']
        },
        {
            title: "title - 4",
            data: ['items 4-1', 'items 4-2', 'items 4-3']
        }
    ]

    return (
        <View style={styles.container}>
            <SectionList
                keyExtractor={(item, index) => index.toString()}
                sections={data}
                renderItem={({ item }) => (
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

