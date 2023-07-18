import React, { useEffect } from 'react';
import { Text } from 'react-native';
import * as Contacts from 'expo-contacts';

function ContactsComponent() {
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });

          if (data.length > 0) {
            const contact = data[0];
            console.log(contact);
          }
        } else {
          console.log("Contacts permission not granted.");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <>
      <Text>TEST</Text>
    </>
  );
}

export default ContactsComponent;
