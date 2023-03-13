import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import artGallery from "../assets/img/artGallery.png";
import conferenceGo from "../assets/img/conferenceGo.png"
import socialMedia from "../assets/img/social-media.png"
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon2 from '../assets/img/gitlab-icon.svg';
import carcar from "../assets/img/carcar.png"
import deployIconWhite from '../assets/img/deployIconWhite.png';


export const Projects = () => {

  const fullStackProjects = [
      {
        title: "Conference-Go",
        description:"Application allows the creation of a conference, signing up to attend a conference, requesting to speak at a conference, and listing conferences",
        tech : "RabbitMQ, Python, SQLite, Django",
        gitUrl:"https://gitlab.com/starrsolis/conference-go",
        imgUrl: conferenceGo, alt: "project",
        deployUrl: "https://artgallery-react.netlify.app"
      },
  ];
  const frontendProjects = [
    {
        title: "Art Gallery",
        description: "A website to explore art",
        gitUrl: "https://github.com/starrsolis/art-gallery",
        imgUrl: artGallery, alt: "project",
        deployUrl: "https://artgallery-react.netlify.app"
      },
  ];

  const backendProjects = [
    {
      title: "OurSpace",
      description: "A career-focused social media application for women and gender-expansive individuals in tech",
      tech: "React, FastAPI, Docker, PostgreSQL, Python, REST APIs",
      gitUrl:"https://gitlab.com/bits-please2/ourspace",
      imgUrl: socialMedia, alt: "project",
      deployUrl: "https://artgallery-react.netlify.app"
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
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                      <Col size={12} md={6}>
                        {
                          fullStackProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Col>
                        <Col size={12} md={6}>
                        <p>☆ Developed a conference booking and creation app using Django, focusing on domain-driven design and microservices architecture to improve scalability and maintainability </p>
                          <p>☆ Designed and implemented a scalable database schema using SQL, resulting in a 25% reduction in query response time and increasing overall application performance
                        </p>
                        <p>☆ Adopted Docker for development, facilitating the management of application dependencies and environments, leading to a more efficient and reliable development process
                        </p>
                      </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      <Col size={12} md={6}>
                        {
                          frontendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Col>
                        <Col size={12} md={6}>
                        <p>☆ Developed an art gallery website with a mobile-first design approach and responsive layout for optimal viewing on different devices </p>
                        <p>☆ Designed and implemented a dynamic gallery page that displays artwork images and information in a grid layout, with hover effects and a lightbox feature for viewing larger versions of the images.</p>
                        <p>☆ Implemented a contact form using PHP for server-side processing and validation, and integrated it with the website using AJAX for asynchronous submission and response handling.</p>
                        <p>
                        <a href= "https://artgallery-react.netlify.app" target="_blank"><img src={deployIconWhite} alt="" className="proj-git-img"/></a>
                        </p>
                      </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                      <Col size={12} md={6}>
                        {
                          backendProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                        </Col>
                        <Col size={12} md={6}>
                        <p>☆ Facilitated daily standups and managed team agile workflow using GitLab issue board to track each team and individuals progress on assigned components  </p>
                          <p>☆Utilized FastApi on to increase development speed and reduce bugs </p>
                        <p>☆ Built out a fully functional UI experience using React hooks reducing the need for refactoring as we expanded the application thus increasing the overall readability, testability and efficiency
                        </p>
                      </Col>
                      </Row>
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
