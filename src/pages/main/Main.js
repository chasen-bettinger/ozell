import React, { useState } from "react";
import { Grid, Header, Form } from "semantic-ui-react";

import Feature from "./components/Feature";

const DB_MAP = {
  textarea: "feature"
};

const Main = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e, { name, value }) => setFormValues({ [name]: value });
  const submitForm = () => {
    console.log({ formValues });

    setFormValues({});
  };

  console.log(formValues[DB_MAP["textarea"]]);

  return (
    <Grid>
      <Grid.Row>
        <Header as="h1">Roadmap</Header>
      </Grid.Row>
      <Grid.Row columns={"equal"}>
        <Form onSubmit={submitForm} className="fill" widths="equal">
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
        <Feature />
      </Grid.Row>
    </Grid>
  );
};

export default Main;
