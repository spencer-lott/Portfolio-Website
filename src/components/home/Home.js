import { Container, Row } from "reactstrap"

export const Home = () => {

return (
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
                            <h2><em>Junior Full-Stack Developer</em></h2>
                            <div>
                                <h3 className="h3-details"><i className="bi bi-pin-map-fill"></i> Huntington-Charleston, WV area |
                                    <a target="_blank" rel='noreferrer' href="https://github.com/spencer-lott" style={{color: "#000"}}><i className="bi bi-github"></i> Github</a> |
                                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/spencer-k-lott/"><i className="bi bi-linkedin"></i>LinkedIn</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="contact-footer">
                        <ul>(503) 935-3045</ul>
                        <ul>spklott@gmail.com</ul>
                    </div>
                </Row>
            </Container>
        </div>
    </div>

    )
}
