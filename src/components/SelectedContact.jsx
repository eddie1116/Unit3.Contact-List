import React from "react";
import { useState } from "react";
import {useEffect} from 'react'

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      const response = await fetch(
      `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );
      const data = await response.json();
      setContact(data);
    }
    fetchContact();
  }, [selectedContactId]);

  console.log(contact);

  return (
    <div>
      {contact ? (
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
          <button onClick={() => setSelectedContactId(null)}>
            Go back to list view
          </button>
        </tr>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}