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
    Dimensions
} from "react-native";
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import Category from './components/Explore/Category'
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
          
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 40 }}>
                           
                            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                            
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                    My Profile
                                </Text>
                                <View style={{ width: width - 40, height: 100, marginTop: 15 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/pen.jpg')}
                                    />

                                </View>
                            </View>
                        </View>
                        <View style={{ height: 130, marginTop: 15 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/settings.jpg')}
                                        name="Settings"
                                    />
                                    <Category imageUri={require('../assets/notifications.jpg')}
                                        name="Notifications"
                                    />
                                    <Category imageUri={require('../assets/signin.jpg')}
                                        name="Sign In/ Out"
                                    />
                                </ScrollView>
                            </View>
                           

                                </ScrollView>
                                
        );
    }
}
export default Explore;