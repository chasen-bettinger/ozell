import React, { useState } from "react";
import { Grid, Header, Form } from "semantic-ui-react";

import Feature from "./components/Feature";

const DB_MAP = {
  textarea: "feature",
  input: "title"
};

const initialState = {
  feature: '',
  title: ''
}

const Main = () => {
  const [formValues, setFormValues] = useState({...initialState});
  const handleChange = (e, { name, value }) => setFormValues({ ...formValues, [name]: value });
  const submitForm = () => {
    console.log({ formValues });

    setFormValues({...initialState})
  };

  const updateRating = (id, rating) => {
    // TODO: Axios call to update this user's rating
    console.log({id, rating})
  }

  console.log(formValues);

  return (
    <Grid>
      <Grid.Row>
        <Header as="h1">Roadmap</Header>
      </Grid.Row>
      <Grid.Row columns={"equal"}>
        <Form onSubmit={submitForm} className="fill" widths="equal">
          <Form.Input
            onChange={handleChange}
            name={"title"}
            value={formValues["title"]}
            placeholder="The title of the feature you are requesting..."
          />
          <Form.TextArea
            onChange={handleChange}
            name={"feature"}
            value={formValues["feature"]}
            placeholder="The feature you are requesting..."
          />
          <Form.Button>Add</Form.Button>
        </Form>
      </Grid.Row>
      <Grid.Row>
        <Feature features={3} updateRating={updateRating} />
      </Grid.Row>
    </Grid>
  );
};

export default Main;
