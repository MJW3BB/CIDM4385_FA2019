// Stolen from https://github.com/nathvarun/React-Native-Layout-Tutorial-Series/tree/master/Project%20Files
// Modified for aesthetic view and to fit purpose of this application (The UI was changed to accomodate a conference app rather than a AirBnB clone)

import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions,
    TouchableOpacity,
    Navigation
} from "react-native";
// import { Calendar } from 'react-native-calendars';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from './components/Explore/Category';
import { Button } from 'react-native';
const { height, width } = Dimensions.get('window')


class Explore extends Component {

    componentWillMount() {
        this.startHeaderHeight = 60
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search"
                                placeholderTextColor="gray"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View>
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                What are you looking for?
                            </Text>

                            <View style={{ height: 130, marginTop: 15 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/keynote.jpg')}
                                        name="Keynotes"
                                    />
                                    <Category imageUri={require('../assets/speaker.jpg')}
                                        name="Speakers"
                                    />
                                    <Category imageUri={require('../assets/lodging.jpg')}
                                        name="Lodging"
                                    />
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    On the Agenda.
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                    Items you have added to your in-app calendar appear here.

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover',                                            borderRadius: 5,                                                                                             borderWidth: 1, 
                                        borderColor: '#dddddd' }}
                                        source={require('../assets/agenda.jpg')}
                                    />
                                </View>
                                
                            </View>
                            
                        </View>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 10 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Some useful things.
                            </Text>
                        </View>
                        <View style={{ height: 130, marginTop: 15 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/myevents.jpg')}
                                        name="My Events"
                                    />
                                    <Category imageUri={require('../assets/myspeakers.jpg')}
                                        name="My Speakers"
                                    />
                                    <Category imageUri={require('../assets/other.jpg')}
                                        name="Other"
                                    />
                                </ScrollView>
                            </View>
                        
                    </ScrollView>
                    

                </View>
                
            </SafeAreaView>
        );
    }
}
export default Explore;