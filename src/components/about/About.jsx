import React from 'react'
import './about.scss'
import aboutImg from '../../assets/about.png'

export const About = () => {
    return (
        <div className='about-container' id='about'>
            <div className="about-content-img">
                <img src={aboutImg} alt="About me" className='about-img' />
            </div>
            <div className="about-content-text">
                    <h1>about me</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque praesentium dolor architecto neque, eius repellat eligendi corporis maxime sed, accusamus cupiditate blanditiis ratione odit quo aperiam nam? Tenetur, ipsa!
                        Fuga, odio asperiores </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio doloremque praesentium dolor architecto neque, eius repellat eligendi corporis maxime sed, accusamus cupiditate Tenetur, ipsa!
                        Fuga, odio animi placeat quidem dolorem debitis alias minus soluta sit quod incidunt quibusdam consequatur excepturi ut veniam pariatur. Reiciendis rem est adipisci sit repellendus quasi dolorum saepe?</p>
            </div>

        </div>
    )
}