import React, { Component } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { loadDB } from '../lib/db';

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  label {
    margin-bottom: 2rem;
    font-size: 1.6rem;
    input,
    textarea {
      display: block;
      width: 100%;
      font-size: 1.4rem;
      line-height: 2;
      margin-top: 0.5rem;
      border: 1px solid #ecf0f1;
      border-radius: 4px;
    }
  }
  button {
    padding: 1rem;
    font-size: 1.4rem;
    border: 1px solid #ecf0f1;
    background: #ecf0f1;
    cursor: pointer;
    border-radius: 4px;
  }
`;

class UploadForm extends Component {
  state = {
    productname: '',
    description: '',
    price: 0,
    amount: 0,
  };

  onChange = e => {
    const { value, type, name } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val,
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const firebase = await loadDB();
    const db = firebase.firestore();
    db.collection('Products')
      .add({
        productname: this.state.productname,
        description: this.state.description,
        price: this.state.price,
        amount: this.state.amount,
      })
      .then(() => {
        console.log('success');
        this.setState({
          productname: '',
          description: '',
          price: 0,
          amount: 0,
        });
        Router.push({
          pathname: '/',
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form method="POST" onSubmit={this.onSubmit}>
        <label htmlFor="productname">
          Name
          <input
            type="text"
            name="productname"
            onChange={this.onChange}
            value={this.state.productname}
          />
        </label>
        <label htmlFor="description">
          Beschreibung
          <textarea
            type="text"
            name="description"
            rows="8"
            onChange={this.onChange}
            value={this.state.description}
          />
        </label>
        <label htmlFor="price">
          Preis
          <input
            type="number"
            name="price"
            onChange={this.onChange}
            value={this.state.price}
          />
        </label>
        <label htmlFor="amount">
          Anzahl
          <input
            type="number"
            name="amount"
            onChange={this.onChange}
            value={this.state.amount}
          />
        </label>
        <button type="submit">Hochladen</button>
      </Form>
    );
  }
}

export default UploadForm;
