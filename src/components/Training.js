import React from 'react'
import './TrainingStyles.css'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

import {Link} from 'react-router-dom'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>low-income nobodies word hole california cheeseburger such a violent motif menapplause brain burger with extra pus zazz clouseauesque foodrinkery bathiola bolognium snacktacular sacrilicious dead serious about continuing our 'sign of evil' countdown forty-two bathtubs, please car hole jebus california cheeseburger skittlebrau homerhol debigulator dickety bartesque biz-zay i kicked a giant mouse in the butt christmas ape goes to summer camp wizard's key they tried</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Training;
