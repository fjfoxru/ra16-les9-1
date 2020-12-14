import React, { useState } from 'react'
import LinksContext from '../../contexts/LinksContext';


function LinksProvider (props) {
    const [links, setLinks] = useState([
        {
            link: '/',
            name: 'Главная'
        },
        {
            link: '/drift',
            name: 'Дрифт-такси'
        },
        {
            link: '/timeattack',
            name: 'Time Attack'
        },
        {
            link: '/forza',
            name: 'Forza Karting'
        },

    ]);

    return (
        <LinksContext.Provider value={links}>
            {props.children}
        </LinksContext.Provider>
    )


}

export default LinksProvider;