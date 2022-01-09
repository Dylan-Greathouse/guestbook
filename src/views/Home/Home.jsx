import React from 'react';
import { GuestList } from '../../components/GuestList/GuestList';
import { GuestBook } from '../../components/GuestBook/GuestBook';
import { GuestProvider } from '../../context/GuestContext';

export const Home = () => {
    return (
        <GuestProvider>
            <GuestBook />
            <GuestList />
        </GuestProvider>
    )
}