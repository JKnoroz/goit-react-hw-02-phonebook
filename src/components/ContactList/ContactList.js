import React from "react";
// import PropTypes from "prop-types";
// import s from  "./ContactList.module.css";

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name} {number}
      </li>
    ))}
  </ul>
);

export default ContactList;
