import style from "./project.module.css"
import SecondaryButton from '../../secondaryButton';
const Project = ({image, title, desc,url}) =>{
    return(
    <div className={style.card}>
        <img className={style.img} src={image}/>
        <h1 className={style.title}>{title}</h1>
        <p className={style.description}>{desc}</p> 
        {url ? <SecondaryButton text="Click here" link={url}/> : null}
    </div>)
}



export default Project;