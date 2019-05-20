import React, { useState } from "react";
import { Grid, Header, Form } from "semantic-ui-react";

import Feature from "./components/Feature";

const DB_MAP = {
  textarea: "feature",
  input: "featureTitle"
};

const Main = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e, { name, value }) => setFormValues({ [name]: value });
  const submitForm = () => {
    console.log({ formValues });

    setFormValues({});
  };
  const updateRating = (id, rating) => {
    // TODO: Axios call to update this user's rating
    console.log({id, rating})
  }

  console.log(formValues[DB_MAP["textarea"]]);

  return (
    <Grid>
      <Grid.Row>
        <Header as="h1">Roadmap</Header>
      </Grid.Row>
      <Grid.Row columns={"equal"}>
        <Form onSubmit={submitForm} className="fill" widths="equal">
          <Form.Input
            onChange={handleChange}
            name={DB_MAP["input"]}
            value={formValues[DB_MAP["input"]]}
            placeholder="The title feature you are requesting..."
          />
          <Form.TextArea
            onChange={handleChange}
            name={DB_MAP["textarea"]}
            value={formValues[DB_MAP["textarea"]]}
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
