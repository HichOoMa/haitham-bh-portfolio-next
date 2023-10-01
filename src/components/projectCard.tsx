/* eslint-disable react/jsx-no-undef */
import { GitHub, Language } from '@mui/icons-material'
import Image from 'next/image'

// import './projectCard.scss'

interface Props {
  name: string,
  backgroundImg: string,
  github ?: string,
  demo ?: string,
  date : string,
  tech: string[]
}
const ProjectCard = (props: Props) =>{

  const technologies = (techs: string[]) => {
    // eslint-disable-next-line react/jsx-key
    return techs.map(tech=>{return <Image src={`/${tech}.png`} width={0} height={0} sizes='40px' style={{ height: '100%', width:'auto'}} alt={tech} key={tech}/>})
    // return techs.map(tech=>{return <Image />})
  }

  return (
    <div className="card" style={{ background: `url(${props.backgroundImg})`,  backgroundSize: "cover" }}>
      <a className="card-details">
        <span className="card-date">{ props.date }</span>
        <span className="card-title">{ props.name }</span>
        <span className='card-links'>
        </span>
      </a>
      <a className="card-hover-action">
        <div className="card-hover-top">
          <div className='card-hover-details'>
            <span className="card-hover-date">{ props.date }</span>
            <span className="card-hover-title">{ props.name }</span>
          </div>
          <span className='card-hover-links'>
            { props.github && <a href={props.github}><GitHub className='item' /></a> }
            { props.demo && <a href={props.demo}><Language className='item' /></a> }
          </span>
        </div>
        <div className="card-hover-bottom">
          <span className="card-hover-technologies">
            { technologies(props.tech) }
          </span>
        </div>
      </a>
    </div>
    
  )
}

export default ProjectCard;
