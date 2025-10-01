'use client'

import Image from 'next/image'

export default function SkillsSection() {
  const skills = {
    dataManagement: ['Data Visualization', 'Data Analysis', 'Data Manipulation', 'Power BI'],
    backend: ['RESTFul API', 'Model Deployment', 'OAUTH implementation', 'Web Scrapping'],
    machineLearning: ['Predictive Modeling', 'Sentimental Analysis', 'Natural Language Processing', 'Model Diagnostics'],
    language: ['Python', 'SQL | Redis | MongoDB', 'Framework - FastAPI', 'Javascript']
  }

  return (
    <div className="container">
      <div className="services-flex">
        <div className="one-third">
          <div className="row">
            <hr />
            <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
              <span>Skills</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="services animate-box">
                <h3>Data Management</h3>
                <ul>
                  {skills.dataManagement.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="services animate-box">
                <h3>Backend</h3>
                <ul>
                  {skills.backend.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="services animate-box">
                <h3>Machine Learning</h3>
                <ul>
                  {skills.machineLearning.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div className="services animate-box">
                <h3>Language</h3>
                <ul>
                  {skills.language.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p>
              Explore advanced projects on the GitHub profile, including{' '}
              <a href="https://github.com/AnamolZ/retainAI" target="_blank" rel="noopener noreferrer">
                retainAI
              </a>
              , which leverages transfer learning and memory retention to adapt models to new data while preserving prior knowledge.
              This enables the model to evolve without losing critical insights. In addition,{' '}
              <a href="https://github.com/AnamolZ/newsPulse" target="_blank" rel="noopener noreferrer">
                newsPulse
              </a>{' '}
              streamlines data pipelines for real-time news distribution across social media platforms.
              Together, these projects highlight innovative approaches to machine learning, data processing, and AI-driven solutions.
              For more, visit the GitHub profile:{' '}
              <a href="https://github.com/AnamolZ" target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
              .
            </p>
          </div>
        </div>
        <div className="one-forth services-img" style={{ width: '436px', height: 'auto', overflow: 'hidden' }}>
          <Image
            src="/images/serviceImage.png"
            className="img-responsive"
            alt="Services Image"
            width={436}
            height={600}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  )
}
