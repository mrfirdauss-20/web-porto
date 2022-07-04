import * as React from 'react';
import TimelineProp from "./Timeline"
import {Timeline} from '@mui/lab'
import {timelines} from './data.js';
import SectionHead from '../SectionHead';
import styles from './style.module.css';
const Experiences = () => {
    return (
       <div className={styles.section}>
            <SectionHead subtitle="Experiences" title="Technical Experiences" text="Here is below my technical experiences."/>
            <Timeline style={{marginBotton: "100px"}} className={styles.timeliness} position="right">
                {timelines.map(({ title, company, time, text, url, isLast }) => (
                    <TimelineProp company={company} title={title} time={time} text={text} url={url} isLast={isLast}/>   
                ))}
            </Timeline>
        </div>
    )
}

export default Experiences;