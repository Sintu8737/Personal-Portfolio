import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Edtech",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">edorbit Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">miFIN LOS</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">ACGIL-HomePage</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* <Tab.Pane eventKey="first">
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
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="first">
                        <p>
                          An integrated set of interactive online services
                          designed for educational purposes.
                          <br />
                          Provides content in the form of visualizations using -
                          Augmented Reality (AR).
                          <br />
                          Aims to enhance students' memory retention and
                          understanding through immersive learning experiences.
                          <br />
                          Technologies: React, TypeScript, Tailwind, Three.js,
                          Hero UI
                        </p>
                        <a
                          href="https://edorbit.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Live Project →
                        </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Worked on a loan origination product designed to
                          streamline loan initiation processes.
                          <br />
                          Developed key features such as Customer Onboarding,
                          Application Submission, Credit Assessment, and
                          Approval Workflow.
                          <br />
                          Utilized React Query, Redux Toolkit and Zustand for
                          efficient data fetching and state management.
                          <br />
                          Built responsive and accessible UI components using
                          Chakra UI.
                          <br />
                          Used React with TypeScript to ensure type safety and
                          maintainable code.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Interactive Website Built a modern, responsive
                          portfolio website featuring: Dynamic UI with animated
                          gradients and smooth transitions Structured navigation
                          using React Router for seamless page routing Engaging
                          hero section with visual highlights of key skills
                          Custom animations to enhance user experience
                          Responsive design ensuring optimal viewing across
                          devices
                          <p>
                            Tech Stack: React.js, Tailwind CSS, React Router DOM
                          </p>
                        </p>
                        <a
                          href="https://acgil-homepage.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          View Live Project →
                        </a>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
