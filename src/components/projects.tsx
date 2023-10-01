import ProjectCard from './projectCard';
// import './projects.css'

const Projects = () => {
  return(
    <section id='projects' className='projects'>
      <span className="section-title">PROJECTS</span>
      <div className="projects-list">
        <ProjectCard 
          name='Portfolio UI — personel curriculum vitae'
          backgroundImg='./portfolioMockup.jpg'
          date='2023'
          tech={['react', 'vite', 'css']}
        />
      </div>
    </section>
  )
}

export default Projects;