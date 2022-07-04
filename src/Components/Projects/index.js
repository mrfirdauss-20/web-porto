import styles from './index.module.css'
import {data} from './data.js'
import Project from './Project/Project.js'
import SectionHead from '../SectionHead'
const Projects = () =>{ 
    return(
    <div className={styles.projects}>
        <SectionHead subtitle="Projects" title="Recent Projects" text="Here is below my technical experiences."/>
        <div className={styles.column}>
            {data.map(({title,description,url,image})=>{
                return(
                    <Project title={title} desc={description} url={url} image={image}/>
                )
            })}
        </div>
    </div>)
}

export default Projects;