// Stolen from https://snack.expo.io/@mjwebb2/ZW1wbG

import React, { Component } from "react";
import { View, Text, Image, FlatList, TouchableHighlight, ActivityIndicator } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import _ from 'lodash';

// import SearchBar from './SearchBar';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      baseData: [],
      currentData: [],
      page: 1,
      error: null,
      isRefreshing: false,
      isFiltering: false,
      noData:false,
    };
  }
  componentDidMount() {
    this.makeRemoteRequest();
  }
  makeRemoteRequest = () => {
    let { page, } = this.state;
    let baseData = [], sortedBaseData = [];
    const url = `https://randomuser.me/api/?seed=nigup&page=${page}&results=20`;
    this.setState({ isLoading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        baseData = page === 1 ? res.results : [...this.state.baseData, ...res.results];
        sortedBaseData = _.sortBy(baseData, 'name.first')
        this.setState({
          baseData: sortedBaseData,
          error: res.error || null,
          isLoading: false,
          isRefreshing: false,
          isFiltering: false,
        }, function(){
          this.pageData();
        });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });
  };
  pageData = () =>{
    this.setState({
      currentData: this.state.baseData
    })
  }
  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        isRefreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  handleLoadMore = () => {
    if (this.state.isFiltering) return null;
    
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          //width: "86%",
          backgroundColor: "#CED0CE",
          //marginLeft: "14%"
        }}
      />
    );
  };

  /*
  renderHeader = () => {
    return (
      <SearchBar onChange={(text) => this.filterList(text)} />
      );
  };

  */

  filterList = (key) => {
    this.setState({
      isFiltering: true
    })
    let text = key.toLowerCase()
    let fullList = this.state.baseData;
    
    let filteredList = fullList.filter((item) => { // search from a full list, and not from a previous search results list
  	    const fullName = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase()
  	    if(fullName.search(text) > -1)
  		    return item;
  	})
  	
  	if (!text || text === '') {
  	  this.setState({
    		currentData: fullList,
    		noData:false,
    		isFiltering: false
  	  })
  	} 
  	else if (!filteredList.length) {
  	 // set no data flag to true so as to render flatlist conditionally
  	   this.setState({
    		 noData: true,
    		 currentData: filteredList,
    		 isFiltering: true
  	   })
  	}
  	else if (Array.isArray(filteredList)) {
  	  this.setState({
    		noData: false,
    		currentData: filteredList,
    		isFiltering: true
  	  })
  	}
  }
  renderItem = ({item}) => {
    return(
      <TouchableHighlight>  
          <View style = {{ flex: 1, flexDirection: "row", alignItems: "center", padding: 10 }}>
            <View style= {{ flex: 1, alignItems: "flex-start"}}>
              <Image source={{uri: item.picture.thumbnail}} style={{ borderRadius: 30, width: 60, height: 60}} resizeMode='contain' />
            </View>
            <View style = {{ flex: 3, flexDirection: "column", justifyContent: "center"}}>
                <View style={{ }}>
                  <Text style={{fontWeight: 'bold'}}>
                    {item.name.first.toUpperCase()} {item.name.last.toUpperCase()}
                  </Text>
                </View>
              <View style={{ }}>
                <Text numberOfLines={1} style={{fontSize: 15, color: '#777' }}>
                  {item.email}
                </Text>
              </View>
            </View>
            <View style={{ flex:.5, alignItems: "flex-end" }}>
              <MaterialIcons name="keyboard-arrow-right" size={25} color="grey" />
            </View>
          </View>
      </TouchableHighlight>
      )
  };
  renderFooter = () => {
    if (!this.state.isLoading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }
  renderNoData = () => {
    if(!this.state.noData) return null;
    
    return (
        <View style={{flex: 1}}>
          <Text style={{padding: 5}}>No Data Found. Please try again...</Text>
        </View>
      )
  }
  render() {
      return (
        <View style={{flex:1, paddingTop: 25, backgroundColor: 'white'}}>
          <FlatList
            data={this.state.currentData}
            renderItem={({item}) => this.renderItem({item})}
            keyExtractor={item => item.email}
            ListEmptyComponent={this.renderNoData}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            refreshing={this.state.isRefreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={.3}
          />
        </View>
      )
  }
}

export default FlatListDemo;