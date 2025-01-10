import { getAllContacts, getContactById } from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res) => {
  const contacts = await getAllContacts();

  res.json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);

  // Відповідь, якщо не знайдено
  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  // Відповідь, якщо знайдено
  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
