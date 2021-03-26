import React from "react";

import Input from "../../shared/FormElements/Input";
import Button from "../../shared/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

const UpdateItem = () => {
  const ItemUpdateSubmitHandler = () => {
    console.log("Item is updated successfully!!!");
  };
  return (
    <form onSubmit={ItemUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
      />
      <Button type="submit">UPDATE Item</Button>
    </form>
  );
};

export default UpdateItem;
