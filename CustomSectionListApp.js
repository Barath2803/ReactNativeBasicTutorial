import { View, StyleSheet } from 'react-native';
import CustomSectionList from './CustomSectionList';
// import styles from './styles';

export default function App() {

    const data = [
        {
            title: "title - 1",
            data: ['items 1-1', 'items 1-2', 'items 1-3']
        },
        {
            title: "title - 2",
            data: ['items 2-1', 'items 2-2', 'items 2-3']
        }
    ]

    const data2 = [
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
            <CustomSectionList data={data} />
            <CustomSectionList data={data2} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 60,
    },

})

