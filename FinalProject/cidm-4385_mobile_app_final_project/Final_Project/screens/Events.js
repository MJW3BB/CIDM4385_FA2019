// https://github.com/ahuimanu/CIDM4385-Spring2019/blob/master/ExpoFirestore/firestore_test/App.js
// Modified to work with our own Firabase 

import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import 'firebase/firestore';

export default class Events extends React.Component {

  constructor(props)
  {
    super(props);

    var config = {
    apiKey: "AIzaSyC43zB17YjYRDxojM0mseLnB5yi52CatJU",
    authDomain: "conferenceapp-389c0.firebaseapp.com",
    databaseURL: "https://conferenceapp-389c0.firebaseio.com",
    projectId: "conferenceapp-389c0",
    storageBucket: "conferenceapp-389c0.appspot.com",
    messagingSenderId: "231029072194"
  };

    //ensure that no more than one firebase is instantiated
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }

    this.state = {
      Data: [],
      db: firebase.firestore()
    }

    this.HandleDatabaseRead = this.HandleDatabaseRead.bind(this);
    this.GetAllData = this.GetAllData.bind(this);

  }

  GetAllData(){

    // console.log(`USING EMAIL: ${email}`);

    let DataRef = this.state.db.collection("Data");

    DataRef.get()
             .then( (querySnapshot) => {
               if(!querySnapshot.empty){
                this.HandleDatabaseRead(querySnapshot);
               }
             })
             .catch((error) => 
             {
                console.log(error);
             });
  }

  //callback for firebase to call
  HandleDatabaseRead(data){

    //console.log("FIRESTORE_TEST", data);

    const ords = [];

    data.forEach( (doc) => {

      //destructure data
      const { EventName } = doc.data();

      let listItem = {
        key: doc.id,
        item: EventName
      }

      ords.push(listItem);
    });

    console.log(ords);
    this.setState(
      {
        Data: ords
      }
    )
  }  

  componentDidMount()
  {
    this.GetAllData();
  }  

  render() {
    return (
      <View style={styles.container}>
        <Text> Events and Keynotes </Text>
        <FlatList data={this.state.Data}
                  renderItem={({item}) => <Text style={styles.item}>{item.item}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50    
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 44,
  },  
});