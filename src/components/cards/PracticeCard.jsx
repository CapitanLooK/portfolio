import React from 'react'
import './card.scss'

export const PracticeCard = ({practices}) => {
  return (
    <div className='card'>
                {
                    practices.map((practice, i) =>
                        <div
                            className='card-container'
                            key={i}
                        >
                            <img src={practice.img} alt={practice.alt} />
                            <h1>{practice.title}</h1>
                            <p>{practice.description}</p>
                            <a href={practice.url} target='_blank' rel='noreferrer'>see more</a>
                        </div>
                    )
                }
            </div>
  )
}
