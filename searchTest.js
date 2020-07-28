import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

const products = [
  { id: "1", title: "süt", description: "çok yararlı", },
  { id: "2", title: "kola", description: "böcek içerir", },
  { id: "3", title: "baklava", description: "yüksek kalorili, çok şekerli", },
  { id: "63", title: "et", description: "çok pahalı ve protein içerir", },
  { id: "4", title: "ekmek", description: "60% ekmek", },
  { id: "5", title: "lays", description: "80% hava", },
]

export default class subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInputValue: ""
    }
  }
  render() {
    const { searchInputValue } = this.state;
    return (
      <View>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#000"
          onChangeText={(text) => this.setState({ searchInputValue: text })}
          style={{ borderWidth: 1, borderColor: '#ccc', width: "70%", borderRadius: 10, marginTop: 20, alignSelf: 'center', padding: 10, color: '#000'}} />
        {
          products.filter((data) => data.description.includes(searchInputValue) || data.title.includes(searchInputValue)).map((item, index) => {
            return (
              <View
                style={{ borderWidth: 1, margin: 10}}
                key={item.id}>
                <Text> { item.title } </Text>
                <Text> { item.description } </Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}