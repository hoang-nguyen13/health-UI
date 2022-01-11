import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DetailScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Detail</Text>
        </View>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
