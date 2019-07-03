/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import ItemList from '../components/ItemList';
import { loadDB } from '../lib/db';

class Home extends React.Component {
  state = {
    products: [],
  };

  static async getInitialProps() {
    const fetchedProducts = [];

    const firebase = await loadDB();
    const db = firebase.firestore();
    const result = await new Promise((resolve, reject) => {
      db.collection('Products')
        .get()
        .then(function(querySnapshot) {
          const data = [];
          querySnapshot.forEach(function(doc) {
            data.push({ id: doc.id, ...doc.data() });
          });
          resolve(data);
        })
        .catch(() => reject([]));
    });
    return { products: [...result] };
  }

  componentDidMount() {
    this.setState({ products: this.props.products });
  }

  render() {
    console.log(this.state.products);
    return (
      <div>
        <ItemList products={this.state.products} />
      </div>
    );
  }
}

export default Home;
