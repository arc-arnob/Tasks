import React from 'react';
import {Link} from "react-router-dom";

import { ListGroup, ListGroupItem } from 'reactstrap';

const Menu = () => {
  return (
    <ListGroup>
      <Link className="list-group-item list-gropu-item-action" tag='a' to="/">Home</Link>
      <Link className="list-group-item list-gropu-item-action" tag='a' to="/add-course">Add Task</Link>
      <Link className="list-group-item list-gropu-item-action" tag='a' to="/view-courses">View Tasks</Link>
      <Link className="list-group-item list-gropu-item-action" tag='a' to="#">Contact</Link>
    </ListGroup>);
}

export default Menu;
