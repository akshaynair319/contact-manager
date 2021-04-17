import Contact from "../models/Contacts.js";

export const getContacts = (req, res) => {
  Contact.find()
    .sort({ date: -1 })
    .then((items) => res.json(items));
};

export const addContact = (req, res) => {
  const newContact = new Contact({
    name: req.body.name,
    email: req.body.email,
    image: req.body.image,
  });

  newContact.save().then((contact) => res.json(contact));
};

export const deleteContact = (req, res) => {
  Contact.findById(req.params.id)
    .then((contact) => contact.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
};
