import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "News Application",
      description: "Design & Development",
      imgUrl: projImg1,
      githubUrl: "https://github.com/Mukulsh26/GetNews-App",
    },
    {
      title: "Tesla Website",
      description: "Design & Development",
      imgUrl: projImg2,
      githubUrl: "https://reactjs-tesla-clone-omega.vercel.app/",
    },
    {
      title: "Zinger - Food Ordering App",
      description: "Design & Development",
      imgUrl: projImg3,
      githubUrl: "https://github.com/Mukulsh26/Zinger-food-Ordering-app",
    },
    {
      title: "Dynamic page demo for client",
      description: "Design & Development",
      imgUrl: projImg6,
      githubUrl: "https://star-clinch-assignment.vercel.app/",
    },
    {
      title: "Dashboard demo for client",
      description: "Design & Development",
      imgUrl: projImg5,
      githubUrl: "https://fitpeo-assignment-mukulsh26s-projects.vercel.app/",
    },
    {
      title: "EVTI Website for client",
      description: "Design & Development",
      imgUrl: projImg4,
      githubUrl: "http://www.evti.in/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Throughout my career, I've had the opportunity to work on a variety of projects that showcase my skills in Next.js, React.js, Node.js, Formik, DataBase and API Integration. These projects have allowed me to develop and demonstrate my expertise in designing and implementing innovative solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Professional Projects</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
