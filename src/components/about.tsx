import Stage from './stage';
// import './about.css'

const About = () =>{
  return(
    <section id='about' className="about">
      <span className="section-title">ABOUT ME</span>
      <p>Here you will find more information about me, what I do, Where I worked, and my current skills mostly in terms of programming and technology</p>
      <div className="grid-about">
        <div className="education">
          <h3 className='title3'>Education :</h3>
          <Stage 
              organisation='Higher institute of computer science' 
              post='Master Degree in Open Source Programs' 
              src='./uvt.png' 
              url='https://www.armadadelivery.com/' 
              dateStart='OCT 2023' 
              dateEnd='PRESENT' 
              description={'A Fullstack MERN position involves developing web applications using MongoDB, Express.js, React.js, and Node.js, covering both frontend and backend tasks.'} 
          />
          <Stage 
              organisation='Faculty of sciences of Tunis' 
              post='Bachelor Degree in Computer Science' 
              src='./fst.png' 
              url='https://fst.rnu.tn/en' 
              dateStart='SEP 2020' 
              dateEnd='JUN 2023' 
              description={'A Bachelor\'s Degree in Computer Science is a three-year undergraduate program that teaches students computer programming, software development, and problem-solving skills, preparing them for careers in IT, software development, and related fields.'} 
          />
        </div>
        <div className="experience">
          <h3 className='title3'>Work Experience :</h3>
          <Stage 
              organisation='Armada Delivery Solution' 
              post='Junior Web Developer' 
              src='./armada.png' 
              url='https://www.armadadelivery.com/' 
              dateStart='JUN 2023' 
              dateEnd='PRESENT' 
              description={'Developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js (MERN stack). Created RESTful APIs, managed databases, and crafted dynamic user interfaces for seamless user experiences. Collaborated with cross-functional teams to deliver innovative web solutions.'} 
          />
          <Stage 
              organisation='Armada Delivery Solution' 
              post='Intern Web Developer' 
              src='./armada.png' 
              url='https://www.armadadelivery.com/' 
              dateStart='FEB 2023' 
              dateEnd='MAI 2023' 
              description={'A Fullstack MERN position involves developing web applications using MongoDB, Express.js, React.js, and Node.js, covering both frontend and backend tasks.'} 
          />
          <Stage 
              organisation='Raiseguard' 
              post='Intern Backend Developer' 
              src='./raisegard.jpeg' 
              url='https://raiseguard.innovup.com.tn/' 
              dateStart='JULY 2023' 
              dateEnd='AUG 2023' 
              description={'Designed and maintained server-side components and databases, ensuring optimal web application performance and functionality. Collaborated with cross-functional teams to enhance user experience.'} 
          />
        </div>
      </div>
      <div className="more">
        <div className="know-me">
          <h3 className='skills-title'>Get To Know Me!</h3>
          <p className='know-me-p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at augue erat. Duis facilisis purus a leo scelerisque
            commodo. Ut venenatis nec nunc id blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Donec tempus elementum purus, vitae consequat neque euismod eget. Nunc feugiat rhoncus faucibus. Fusce eleifend et
              dolor nec feugiat. Aenean eget nisi tincidunt, lacinia erat non, ornare nulla. Sed rhoncus aliquam sem aliquet pretium. 
              Nulla facilisi. Phasellus sit amet purus nec augue maximus congue. Curabitur ipsum nisl, fermentum vitae luctus eget, 
              vestibulum eget nibh. Maecenas quis nunc mollis, semper mauris id, tempor nisi. Nulla condimentum laoreet nisi, vitae 
              luctus enim tempus sit amet. Maecenas rutrum, lacus nec ultrices commodo, mi massa elementum ligula, id dignissim ante 
              nibh non urna.<br/><br/>
              Vestibulum rutrum iaculis pellentesque. Nam sed nisl ex. Maecenas faucibus eleifend sapien, a lobortis diam accumsan quis. 
              Proin sed feugiat lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris bibendum 
              gravida nulla, ac elementum neque bibendum vitae. Sed a ornare sem. Suspendisse ut venenatis est. Pellentesque interdum luctus 
              lorem sit amet fermentum. 
          </p>
        </div>
        <div   
         className="skills">
          <ul className='skills-list'>
            <li>
              <img src="./html.png" alt="html" />
            </li>
            <li>
              <img src="./css.png" alt="css" />
            </li>
            <li>
              <img src="./js.png" alt="js" />
            </li>
            <li>
              <img src="./nodejs.png" alt="nodejs" />
            </li>
            <li>
              <img src="./express.png" alt="express" />
            </li>
            <li>
              <img src="./react.png" alt="react" />
            </li>
            <li>
              <img src="./vite.png" alt="vite" />
            </li>
            <li>
              <img src="./vitest.png" alt="vitest" />
            </li>
            <li>
              <img src="./golang.png" alt="golang" />
            </li>
            <li>
              <img src="./github.png" alt="github" />
            </li>
            <li>
              <img src="./git.png" alt="git" />
            </li>
            <li>
              <img src="./postegresql.png" alt="postegresql" />
            </li>
            <li>
              <img src="./mongo.png" alt="mongo" />
            </li>
            <li>
              <img src="./aws.png" alt="aws" />
            </li>
          </ul>
          <ul className='skills-list' aria-hidden='true'>
            <li>
              <img src="./html.png" alt="html" />
            </li>
            <li>
              <img src="./css.png" alt="css" />
            </li>
            <li>
              <img src="./js.png" alt="js" />
            </li>
            <li>
              <img src="./nodejs.png" alt="nodejs" />
            </li>
            <li>
              <img src="./express.png" alt="express" />
            </li>
            <li>
              <img src="./react.png" alt="react" />
            </li>
            <li>
              <img src="./vite.png" alt="vite" />
            </li>
            <li>
              <img src="./vitest.png" alt="vitest" />
            </li>
            <li>
              <img src="./golang.png" alt="golang" />
            </li>
            <li>
              <img src="./github.png" alt="github" />
            </li>
            <li>
              <img src="./git.png" alt="git" />
            </li>
            <li>
              <img src="./postegresql.png" alt="postegresql" />
            </li>
            <li>
              <img src="./mongo.png" alt="mongo" />
            </li>
            <li>
              <img src="./aws.png" alt="aws" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;