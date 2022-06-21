import React from 'react'
import { ProjectContent } from '../../components/proyectContent/ProjectContent'
import { ProjectCard } from '../../components/cards/ProjectCard'
import { PROJECTS } from '../../utils/data/data'
import '../../utils/styles/container.scss'
export const ProjectContainer = () => {
    return (
        <div className='container' id='project'>
            <ProjectContent />
            <ProjectCard
                projects={PROJECTS}

            />
        </div>
    )
}