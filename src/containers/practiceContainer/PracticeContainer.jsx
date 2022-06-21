import React from 'react'
import { PracticeContent } from '../../components/practiceContent/PracticeContent'
import { PracticeCard } from '../../components/cards/PracticeCard'
import { PRACTICES } from '../../utils/data/data'
import '../../utils/styles/container.scss'

export const PracticeContainer = () => {
    return (
        <div className='container' id='practice'>
            <PracticeContent />
            <PracticeCard
                practices={PRACTICES}

            />
        </div>
    )
}