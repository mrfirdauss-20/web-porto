import * as React from 'react';
import TimelineProp from "./Timeline"
import {Timeline} from '@mui/lab'
import {timelines} from './data.js';
import styles from './style.module.css';
const Experiences = () => {
    return (
       <React.Fragment >
            <h2 className={styles.subtitle}>
                Positions
            </h2>
            <h1 className={styles.title}>
                Where I Am Experienced At
            </h1>
            <p className={styles.p}>
            Here is below my technical experiences.
            </p>
            <Timeline style={{marginBotton: "100px"}} position="right">
                {timelines.map(({ title, company, time, text, url, isLast }) => (
                    <TimelineProp company={company} title={title} time={time} text={text} url={url} isLast={isLast}/>   
                ))}
            </Timeline>
        </React.Fragment>
    )
}

export default Experiences;