import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, text }) => {
  // Function to handle click events
  const handleClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank'); // Open the URL in a new tab
    }
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleClick} style={{cursor: 'pointer'}}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
