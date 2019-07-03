import React, { Component } from 'react';
import styled from 'styled-components';
import { loadDB } from '../lib/db';

const Card = styled.div`
  width: 80%;
  margin: 1rem auto;
  padding: 2rem 4rem;
  color: #fff;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 60% 20% 20%;
  align-items: center;
  background: ${props => props.theme.primary};
  border-radius: 3px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    .add {
      display: none;
    }
    input {
      margin: 1rem 0;
    }
  }
  h3 {
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  button {
    background: #fff;
    color: ${props => props.theme.primary};
    padding: 1rem 2rem;
    font-size: 1.4rem;
    border-radius: 3px;
    cursor: pointer;
    :hover {
      background: ${props => props.theme.border};
    }
    @media (max-width: 700px) {
    }
  }
  input {
    width: 60%;
    padding: 0.5rem;
    font-size: 1.6rem;
  }
`;

class ItemCard extends Component {
  state = {
    showAddForm: false,
    amountToAdd: 0,
    amount: 0,
  };

  componentDidMount() {
    this.setState({ amount: this.props.product.amount });
  }

  toggleAddForm = () => {
    this.setState(preState => ({ showAddForm: !preState.showAddForm }));
  };

  addAmount = async () => {
    const amountNum =
      parseFloat(this.props.product.amount) +
      parseFloat(this.state.amountToAdd);
    const firebase = await loadDB();
    const db = firebase.firestore();
    db.collection('Products')
      .doc(this.props.product.id)
      .set({ amount: amountNum }, { merge: true })
      .then(() => this.setState({ showAddForm: false, amount: amountNum }))
      .catch(err => console.log(err));
  };

  onChange = e => {
    this.setState({ amountToAdd: e.target.value });
  };

  render() {
    const { product } = this.props;
    return (
      <Card>
        <h3>{product.productname}</h3>
        <p>Vorhanden {this.state.amount}</p>
        <button type="button" onClick={this.toggleAddForm}>
          {this.state.showAddForm ? 'Abbrechen' : 'Auffüllen'}
        </button>
        {this.state.showAddForm ? (
          <>
            <h3 className="add">Hinzugekommene Anzahl:</h3>
            <input
              type="number"
              value={this.state.amountToAdd}
              onChange={this.onChange}
            />
            <button type="button" onClick={this.addAmount}>
              Bestätigem
            </button>
          </>
        ) : null}
      </Card>
    );
  }
}

export default ItemCard;
