import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import artGallery from "../assets/img/artGallery.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon2 from '../assets/img/gitlab-icon.svg';


export const Projects = () => {

  const projects = [
    {
      title: "Project",
      description: "React, Javascript",
      gitUrl:"https://gitlab.com/starrsolis",
      imgUrl: {},alt: "project"
    },
    {
        title: "Art Gallery",
        description: "React, Javascript",
        gitUrl: "https://github.com/starrsolis/art-gallery",
        imgUrl: artGallery, alt: "project",
        deployUrl: "https://artgallery-react.netlify.app"
      },
      {
        title: "Project",
        description: "React, Javascript ",
        gitUrl:"https://gitlab.com/starrsolis",
        imgUrl: {}, alt: "project"
      },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Front-End</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Back-End</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              
            
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
