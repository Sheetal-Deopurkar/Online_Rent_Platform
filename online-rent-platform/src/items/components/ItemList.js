import React from "react";
import Card from "../../shared/UIElements/Card";
import Item from "./Item";

const ItemList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="item-list center">
        <Card>
          <h2>No items found. Maybe create one</h2>
          <button>Share item</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="item-list">
      {props.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          image={item.imageUrl}
          title={item.title}
          description={item.description}
          address={item.address}
          creator={item.creator}
        />
      ))}
    </ul>
  );
};

export default ItemList;
