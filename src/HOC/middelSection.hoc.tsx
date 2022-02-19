import React, {HTMLProps} from 'react'
import { SectionTwo } from './newsPostsSection.hoc'
import { PopularPostSection } from './popularPostsSection.hoc'
import '../styles/middelSection.scss';

interface Props extends HTMLProps<HTMLDivElement>{}

export const MiddelSection: React.FC = (props: Props) => {
    return (
        <div className='middel_section_container'>
            <SectionTwo/>
            <PopularPostSection/>
        </div>
  )
}
