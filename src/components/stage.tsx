// import './stage.css'

interface Props {
  organisation: string,
  post: string,
  src: string,
  url: string,
  dateStart: string,
  dateEnd: string ,
  description: string
}

const Stage = (props: Props) =>{
  return(
    <div className="stage">
      <a href={ props.url }>
        <img src={ props.src } alt="" />
      </a>
      <div className="info">
        <div className="organisation">
          {props.organisation}
        </div>
        <div className="post">
          {props.post}
        </div>
        <div className="duration">
          {`${ props.dateStart } - `}
          <span className={props.dateEnd === 'PRESENT' ? 'present' : ''}>{ props.dateEnd }</span>
        </div>
        <div className="description">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default Stage;