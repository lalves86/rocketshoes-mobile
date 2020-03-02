import React, { Component } from 'react';
import { FlatList, Text, Image, View } from 'react-native';

// import { ProductList, Title, ListItem, Product, Image, Price } from './styles';

import api from '../../services/api';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;
    console.tron.log(products);
    return (
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.image }} />
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    );
  }
}

Home.NavigationOptions = {
  title: 'Rocketshoes',
};
