import React from "react";
import Button from "../../shared/FormElements/Button";
import Card from "../../shared/UIElements/Card";

const Item = (props) => {
  return (
    <React.Fragment>
      <li>
        <Card>
          <div>
            <img src={props.image} alt={props.title} />
          </div>
          <div>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div>
            <Button to={`/item/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default Item;
