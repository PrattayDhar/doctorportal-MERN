import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCurd from './InfoCurd';


const Infocurds = () => {
    const curdData=[
        {
            id:1,
            name: 'Opening Hours',
            dec:'Open 9:00 am to 5:00 Pm Everyday',
            icon:clock,
            bgClass:'bg-primary'
        },
        
        {
            id:2,
            name: 'Our Location',
            dec:'Open 9:00 am to 5:00 Pm Everyday',
            icon:marker,
            bgClass:'bg-accent'
        },
        
        {
            id:3,
            name: 'Contact Us',
            dec:'01788161616',
            icon:phone,
            bgClass:'bg-primary'
        }
        
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
            {
                curdData.map(card=><InfoCurd
                key={card.id}
                card={card}
                
                ></InfoCurd>)
            }
        </div>
    );
};

export default Infocurds;