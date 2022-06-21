import React from 'react'
import './form.scss'

export const Form = () => {
    return (

        <div className="form-container">
            <h4>Contact</h4>
            <p>Lets Work Together!</p>
            <form>
                <label htmlFor="name">nombre:</label>
                <input type="text" name="name" id="name" placeholder="your name here" required />
                <label htmlFor="email">email:</label>
                <input type="email" name="email" id="email" placeholder='your email here' required />
                <label htmlFor="question"></label>
                <textarea name="question" id="" cols="30" rows="10" required></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>


    )
}
