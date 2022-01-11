import React from "react";
import { useGuests } from "../../context/GuestContext";
import { Guest } from "../guest/Guest";

export const GuestList = () => {
    const { guests } = useGuests()

    return (
        <div>
            <ul>
                {guests.map((guest) => {
                    return (
                        <li key={`${guest.name}-${guest.message}`}>
                            <Guest guest={guest} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}