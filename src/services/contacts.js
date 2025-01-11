import { ContactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  // payload example
  // {
  //     "name": "DATA the Android",
  //     "phoneNumber": "+380000000221",
  //     "email": "data@starfleet.mil",
  //     "isFavourite": false,
  //     "contactType": "personal"
  //  }
  const student = await ContactsCollection.create(payload);
  return student;
};
