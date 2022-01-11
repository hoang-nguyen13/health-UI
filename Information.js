import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Information = () => {
    return (
        <View style = {styles.container}>
            <Text>information</Text>
        </View>
    )
}

export default Information


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
