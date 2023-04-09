import React from 'react';
import './FooterStyles.css';
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}} />
                        <div>
                            <p>123 Fake Street</p>
                            <h4>Springfield</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone  size={20} style={{color: '#fff', marginRight: '2rem'}} />1-800-123-4567</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk  size={20} style={{color: '#fff', marginRight: '2rem'}} />homer@compuglobalmega.net</h4>
                    </div>
                </div>
                <div className='right'>
                    <h4>About the company</h4>
                    <p>"Bacon ipsum dolor amet ribeye biltong buffalo cow tenderloin meatball. Picanha tongue beef capicola cupim, filet mignon short ribs fatback tri-tip drumstick kevin sausage. Flank shankle shoulder pork chop picanha salami, buffalo frankfurter tail rump brisket pancetta tongue sirloin. Pork leberkas prosciutto venison tri-tip spare ribs kevin swine. Turkey boudin beef ham hock, biltong rump burgdoggen buffalo landjaeger."
                    </p>
                    <div className='social'>
                        <FaFacebook  size={20} style={{color: '#fff', marginRight: '1rem'}} />
                        <FaTwitter  size={20} style={{color: '#fff', marginRight: '1rem'}} />
                        <FaLinkedin  size={20} style={{color: '#fff', marginRight: '2rem'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
