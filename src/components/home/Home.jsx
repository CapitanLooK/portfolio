import React from 'react'
import { NavBar } from '../navbar/NavBar'
import './home.scss'

export const Home = () => {
    return (
        <div className='home-container' id='home'>
            <div className="home-background">
                <NavBar />
                <div className="home-content">
                    <h1>welcome!</h1>
                    <h2>Hi, I'm Alejandro</h2>
                    <h3>React Developer.</h3>
                    <h4>from buenos aires, argentina</h4>
                </div>

            </div>
        </div>
    )
}