import React, { Component } from 'react'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import styled from 'styled-components';
import CurrencyInput from 'react-currency-input';
import { ALL_ITEMS_QUERY } from './Items';

const StyledForm = styled.div`
  width: 500px;
  margin: auto;
`;

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Float!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;


class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0.00,
  }

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  handlePriceChange = (event, maskedvalue, floatvalue) => {
    this.setState({ price: maskedvalue });
  };

  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'sickfits');

    const res = await fetch('https://api.cloudinary.com/v1_1/aknishi/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    })
  }

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION}
      variables={this.state}
        refetchQueries={[{ query: ALL_ITEMS_QUERY }]}>
        { (createItem, { loading, error }) => (
          <StyledForm>
            <Form
              data-test="form"
              onSubmit={async (e) => {
              // stop the form from submitting
              e.preventDefault();
              // call the mutation
              const res = await createItem();
              // reroute to the single item page
              Router.push({
                pathname: '/item',
                query: { id: res.data.createItem.id },
              });
            }}>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="file">
                  Image
                  <input
                    type="file"
                    id="file"
                    name="file"
                    placeholder="Upload an image"
                    required
                    onChange={this.uploadFile}
                  />
                  {this.state.image && <img width="200" src={this.state.image} alt="Upload Preview" />}
                </label>
                <label htmlFor="title">
                  Title
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="Title"
                    required
                    value={this.state.title}
                    onChange={this.handleChange}/>
                </label>

                <label htmlFor="price">
                  Price
                  <CurrencyInput
                    id="price"
                    name="price"
                    placeholder="$0.00"
                    prefix="$"
                    required
                    value={this.state.price}
                    onChange={this.handlePriceChange}/>
                </label>

                <label htmlFor="description">
                  Description
                  <textarea
                    id="description"
                    name="description"
                    placeholder="Enter a description"
                    required
                    value={this.state.description}
                    onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          </StyledForm>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };