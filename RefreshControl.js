import { RefreshControl, Text, View, StyleSheet, ScrollView, } from 'react-native';
import React, { useState } from 'react';

export default function App() {

    const [refresh, setRefresh] = useState(false);

    const pullMe = () => {
        setRefresh(true)
        setTimeout(() => setRefresh(false), 3000)
    }

    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refresh}
                        onRefresh={() => pullMe()}
                    />
                }>
                <Text>Pull to Refresh</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        top: 60,
    },

})

