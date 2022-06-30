import React from 'react';
import {
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';

import { Typography } from '@mui/material';

import PropTypes from 'prop-types'
import styles from './style.module.css';

function TimelineProp({title,company,time,text,url,isLast}){
        return (
            <TimelineItem>
                <TimelineOppositeContent>
                    <p className={styles.comp}>{company ? company : ""}</p> 
                    <div className={styles.time}>{time ? time : ""}</div>
                </TimelineOppositeContent>
                <a href={url? url : "#!"} target="_blank" rel="noreferrer">
                     <TimelineSeparator>
                        <TimelineDot variant="outlined" color="primary" />
                        { isLast ? null : <TimelineConnector className={styles.tali} style={{height: "100px"}} />}       
                    </TimelineSeparator>
                </a>
                 <TimelineContent>
                    <Typography variant='h6' component="span" className={styles.pos}>
                        {title}
                    </Typography>
                    <Typography className={styles.text}>
                        {text? text : ""}
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        )
}

TimelineProp.protoTypes={
    title:PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text:PropTypes.string,
    url:PropTypes.string,
};

export default TimelineProp;