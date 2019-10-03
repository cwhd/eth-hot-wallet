import React, { Component } from 'react';
import firebase from '../../firebaseConfig';
import StyledList from 'components/StyledList';
import ListItem from 'components/ListItem';
import styled from 'styled-components';
import Delete from '../../images/delete.png';
import Header from 'containers/Header';
import PageFooter from 'components/PageFooter';
import { Content } from 'components/PageFooter/sticky';

const StyledDelete = styled.img`
  color: #f2385a;
  padding-bottom: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;

class ListApp extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      strikethrough: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div>
        <Content>
          <Header />
          <StyledList>
            <section className="add-item">
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  name="username"
                  placeholder="Contributor Name"
                  onChange={this.handleChange}
                  value={this.state.username}
                />
                <input
                  type="text"
                  name="currentItem"
                  placeholder="List Item"
                  onChange={this.handleChange}
                  value={this.state.currentItem}
                  required={true}
                />
                <p />
                <button>Add Item</button>
              </form>
            </section>
            <p></p>
            <section className="display-item">
              <div className="wrapper">
                <ul>
                  {this.state.items.map(item => {
                    return (
                      <div>
                        <li key={item.id}>
                          <div className="items-div">
                            <ListItem message={item.title} />
                            <p className="display-item-p">added by: {item.user}</p>
                          </div>
                          <StyledDelete
                            src={Delete}
                            onClick={() => this.removeItem(item.id)}
                            alt="delete item"
                          />
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </section>
          </StyledList>
        </Content>
        <PageFooter />
      </div>
    );
  }
}

export default ListApp;
