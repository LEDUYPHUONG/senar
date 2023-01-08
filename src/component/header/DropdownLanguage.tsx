import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


export default function DropdownLanguage() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Language
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">English</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Vietnamese</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }