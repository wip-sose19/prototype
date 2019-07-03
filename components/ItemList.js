import React, { Component } from 'react';
import styled from 'styled-components';
import { loadDB } from '../lib/db';
import ItemCard from './ItemCard';
import Login from './Login';

const List = styled.div`
  margin: 3rem 0;
  h3 {
    margin: 3rem;
  }
  h2 {
    font-size: 4rem;
    font-weight: 300;
    text-align: center;
    margin: 5rem 0;
  }
`;

class ItemList extends Component {
  state = {
    user: null,
  };

  async componentDidMount() {
    const firebase = await loadDB();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
  }

  render() {
    return (
      <>
        {this.state.user ? (
          <List>
            <h2>Aktueller Artikelbestand</h2>
            {this.props.products.map(product => (
              <ItemCard key={product.id} product={product} />
            ))}
          </List>
        ) : (
          <Login></Login>
        )}
      </>
    );
  }
}

export default ItemList;
