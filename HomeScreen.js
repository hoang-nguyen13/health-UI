import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import {FlatList, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const HomeScreen = () => {
    return (
            <View style = {styles.container}>
            <View style = {styles.greeting}>
                <Text style = {styles.hi}>
                    Hi,
                </Text>
            </View>
            <View style = {styles.name}>
                <Text style = {styles.firstname}>
                    Monica
                </Text>
            </View>
            {/* <View style = {styles.wellbeing}>
                <Text style = {styles.ask}>
                    How is you day?
                </Text>
            </View> */}
            <View style = {styles.section}>
                <Image source = {require('./assets/images/home/about-us.png')} style = {styles.aboutPic}/>
                <Image source = {require('./assets/images/home/learn.png')} style = {styles.learnPic}/>
            </View>
            <View style = {styles.section1}>
                <Image source = {require('./assets/images/home/news.png')} style = {styles.newsPic}/>
                <Image source = {require('./assets/images/home/tips.png')} style = {styles.tipsPic}/>
            </View>
        </View>        
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
    },
    greeting: {
        marginTop: 100,
    },
    hi: {
        marginHorizontal: 50,
        fontSize: 90,
    },
    name: {
        paddingBottom: 50
    },
    firstname: {
        marginHorizontal: 50,
        fontSize: 90,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 30,
        marginHorizontal: 40
    },
    section1: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 40
    },
    aboutPic: {
        width: 160,
        height: 185,
        marginRight: 20
    },
    learnPic: {
        width: 160,
        height: 210
    },
    newsPic: {
        width: 170,
        height: 200,
        marginRight: 20
    },
    tipsPic: {
        width: 160,
        height: 200
    }
})
