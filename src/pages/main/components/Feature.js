import React from "react";
import { Item, Button } from "semantic-ui-react";
import PropTypes from 'prop-types'

const Feature = (props) => {
  const { updateRating, features } = props;
  // TODO: Dyanmic ids
  // TODO: Dyanmic votes
  // TODO: Loop through all of the features and print them out

  const buildFeatures = () => {
    const allFeatures = []
    for (let i = 0; i < features; i++) {
      allFeatures.push( (
      <Item key={i}>
      <Item.Content>
        <Item.Header>Header</Item.Header>
        <Item.Description>
          Description
        </Item.Description>
        <Item.Extra><Button onClick={() => updateRating(1, 'up')}>450 👍</Button><Button onClick={() => updateRating(1, 'down')}>450 👎</Button></Item.Extra>
      </Item.Content>
    </Item>
      ))
    }

    return allFeatures;
  }


  return (
  <Item.Group>
    {buildFeatures()}
  </Item.Group>
  )
  };

Feature.propTypes = {
  updateRating: PropTypes.func.isRequired,
  features: PropTypes.number.isRequired 
}

export default Feature;
