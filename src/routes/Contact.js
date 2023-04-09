import React from 'react';
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import ContactComponent from '../components/Contact'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='CONTACT US' text='Have a question?'/>
            <ContactComponent />
            <Footer />
        </div>
    );
};

export default Contact;
