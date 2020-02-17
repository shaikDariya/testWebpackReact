import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {NavLink as Link} from 'react-router-dom';
const TodoTabs = () => {
  return (
    <div className="row">
      <Nav variant="tabs">
        <Nav.Item>
          <Link className="nav-link" to="/todo">
            Todo
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/history">
            History
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default TodoTabs;
