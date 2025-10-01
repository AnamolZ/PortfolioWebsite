'use client'

import Image from 'next/image'

export default function ExtracurricularsSection() {
  const activities = [
    {
      image: '/images/DSC01484.jpg',
      title: 'TBC X LBU Student Exchange Programme 2024',
      link: 'https://www.thebritishcollege.edu.np/news/tbc-x-lbu-student-exchange-programme-2024',
      description: [
        'I participated in the student exchange program at The British College (TBC) in collaboration with Leeds Beckett University (LBU), UK. During the program, I worked on the "Smart Gardening System" project, part of a team focused on integrating IoT technology for efficient gardening solutions.',
        'This experience allowed me to collaborate with students from diverse backgrounds, apply my computing knowledge, and gain insights into Nepal\'s unique academic environment. It was a valuable opportunity for both personal and professional growth.'
      ],
      imageFirst: true
    },
    {
      image: '/images/Marathon.jpg',
      title: 'Kantipur Half Marathon 2022',
      link: 'https://www.thebritishcollege.edu.np/event/kantipur-half-marathon-2022-in-association-with-the-british-college',
      description: [
        'I participated in "The Kantipur Half Marathon 2022," an event sponsored by The British College to raise funds and awareness about the critical issue of climate change in Nepal. This marathon aimed to address the severe impacts of climate change, from the mountains to the Terai, and engage the community in taking action.',
        'It was an enriching experience to contribute to such a meaningful cause, and I was proud to be part of an event that brought people together to support climate action.'
      ],
      imageFirst: false
    },
    {
      image: '/images/image.png',
      title: 'Code for Good',
      link: 'https://github.com/AnamolZ',
      description: [
        'Driven by a passion for coding, I constantly seek to refine my skills through hands-on projects, open-source contributions, and freelance work. Whether building backend solutions with Python and FastAPI or exploring machine learning, I embrace coding as both a profession and a way to solve real-world problems.',
        'Outside of coding, life has taught me valuable lessons through unexpected sources. My bond with my parrot, for instance, was one of the most profound connections I\'ve ever experienced. Though she is no longer with me, the love and joy she brought continue to inspire me. Her presence taught me patience, care, and how to appreciate the little things in life. Those lessons stay with me, guiding both my personal growth and my approach to challenges.'
      ],
      imageFirst: false
    }
  ]

  return (
    <section id="service" className="parallax-section">
      <div className="container">
        <div className="row">
          <hr />
          <div className="col-md-12 col-md-offset-0 animate-box intro-heading">
            <span>Extracurriculars</span>
          </div>

          {activities.map((activity, index) => (
            <div key={index}>
              <div className="row">
                {activity.imageFirst ? (
                  <>
                    <div className="col-md-4 col-sm-8">
                      <div className="about-image-thumb">
                        <Image
                          src={activity.image}
                          className="img-responsive animated"
                          alt={`Image about ${activity.title}`}
                          width={400}
                          height={400}
                          style={{ marginBottom: '20px', maxHeight: index === 2 ? '450px' : 'auto' }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <div className="about-thumb">
                        <div className="section-title animated">
                          <a target="_blank" href={activity.link} rel="noopener noreferrer">
                            <h2>{activity.title}</h2>
                          </a>
                          <br />
                          {activity.description.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-8 col-sm-12">
                      <div className="about-thumb">
                        <div className="section-title animated">
                          <a target="_blank" href={activity.link} rel="noopener noreferrer">
                            <h2>{activity.title}</h2>
                          </a>
                          <br />
                          {activity.description.map((paragraph, pIndex) => (
                            <p key={pIndex}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-8">
                      <div className="about-image-thumb">
                        <Image
                          src={activity.image}
                          className="img-responsive animated"
                          alt={`Image about ${activity.title}`}
                          width={400}
                          height={400}
                          style={{ maxHeight: index === 2 ? '450px' : 'auto' }}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
              <br />
              <br />
              {index < activities.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
