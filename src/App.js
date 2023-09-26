import React from 'react'
import { useState } from 'react'
import './App.css'
import { useRef } from "react"
import {Container, Row} from "reactstrap"

function App() {

  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToProjects = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="App">

      <div className='ui attached pushable' >
            <div className="main">
                  <div className='home'>
                  <Container>
                      <Row>
                          <div className="home-top">
                          <h1 className="name-header">Spencer Lott</h1>
                              <div className="img-container">
                                  <img className="profile-img" src="/images/Spencer-Lott-Headshot-Copy-SQ.jpeg" alt="no image"/>
                              </div>
                          </div>
                      </Row>
                      <Row>
                          <div className="info-bar">
                              <div className="info-bar-details">
                                  <h2>Junior Full-Stack Developer</h2>
                                  <div>
                                      <h3 className="h3-details"><i className="bi bi-pin-map-fill"></i> Huntington-Charleston, WV area |
                                          <a href="https://github.com/spencer-lott" style={{color: "#000"}}><i className="bi bi-github"></i> Github</a> |
                                          <a href="https://www.linkedin.com/in/spencer-k-lott/"><i className="bi bi-linkedin"></i>LinkedIn</a>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </Row>
                      <Row>
                          <section className="projects-container" ref={projectsRef}>
                              <div className="prj-img-container">
                                  <h1 className="prj-header">Bird Bud</h1>
                                  <a href=""><img className="thumbnail" src="/images/BirdBud-Thumbnail.png" alt=""/></a>
                                  <footer className="prj-footer">
                                      <p><i>Front-End Capstone Project</i></p>
                                  <a href="https://github.com/spencer-lott/bird-capstone"><p className="ghub-ptag"><i className="bi bi-github"></i>Github Link</p></a>
                                  </footer>
                              </div>
                              <div className="prj-img-container">
                                  <h1 className="prj-header">Property Manager</h1>
                                  <a href="https://www.loom.com/share/0c9bc0b8eae34a289396a8812156d659"><img className="thumbnail" src="/images/PropertyManager-Thumbnail.png" alt=""/></a>
                                  <footer className="prj-footer">
                                      <p><i>Full-Stack Capstone Project</i></p>
                                  <a href="https://github.com/spencer-lott/property-capstone"><p className="ghub-ptag"><i className="bi bi-github"></i>Github Link</p></a>
                                  </footer>
                              </div>
                          </section>
                      </Row>
                  </Container>
                </div>
            </div>
        </div>
      </div>
  )
}

export default App;
