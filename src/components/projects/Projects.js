import { Container } from "reactstrap"

export const Projects = () => {
    return (

        <Container>
    <section className="projects-container" >
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
</Container>

)

}