import React, { createContext } from 'react'
import { useImmer } from 'use-immer';

export const contactContext = createContext({
    contacts: [], setContacts: () => { },
    loading: false, setLoading: () => { },
    contact: [], setContact: () => { }
}
);
const ContactProvider = ({ children }) => {
    const [contacts, setContacts] = useImmer([]);
    const [loading, setLoading] = useImmer(false);
    const [contact, setContact] = useImmer([]);
    return (
        <contactContext.Provider value={{ contacts, setContacts, 
        loading, setLoading, 
        contact, setContact }}>
            {children}
        </contactContext.Provider>
    )
}

export default ContactProvider