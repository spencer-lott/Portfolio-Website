import "./projects.css"

export const Projects = () => {
    return (
            <section className="projects-container" >
                <div className="prj-img-container">
                    <h1 className="prj-header">Bird Bud</h1>
                    <a target="_blank" rel='noreferrer' href="https://www.loom.com/share/d6b6538ba21e4586ac70f2272b0329c3?sid=b2c15e4e-6168-482a-a6e8-c83616ec19e9"><img className="thumbnail" src="/images/BirdBud-Thumbnail.png" alt=""/></a>
                    <footer className="prj-footer">
                        <p><i>Client Side Capstone Project</i></p>
                    <a target="_blank" rel='noreferrer' href="https://github.com/spencer-lott/bird-capstone"><p className="ghub-ptag"><i className="bi bi-github"></i>Github Link</p></a>
                    </footer>
                </div>
                <div className="prj-img-container">
                    <h1 className="prj-header">Property Manager</h1>
                    <a target="_blank" rel='noreferrer' href="https://www.loom.com/share/0c9bc0b8eae34a289396a8812156d659?sid=ef007d20-61fc-4c38-8a48-7b196177133f"><img className="thumbnail" src="/images/PropertyManager-Thumbnail.png" alt=""/></a>
                    <footer className="prj-footer">
                        <p><i>Server Side Capstone Project</i></p>
                    <a target="_blank" rel='noreferrer'href="https://github.com/spencer-lott/property-capstone"><p className="ghub-ptag"><i className="bi bi-github"></i>Github Link</p></a>
                    </footer>
                </div>
            </section>
)

}