import React from 'react'
import './card.scss'

export const ProjectCard = ({projects}) => {
  return (
    <div className='card'>
                {
                    projects.map((project, i) =>
                        <div
                            className='card-container'
                            key={i}
                        >
                            <img src={project.img} alt={project.alt} />
                            <h1>{project.title}</h1>
                            <p>{project.description}</p>
                            <a href={project.url} target='_blank' rel='noreferrer'>see more</a>
                        </div>
                    )
                }
            </div>
  )
}
