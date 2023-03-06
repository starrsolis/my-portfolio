import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, gitUrl, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p>{gitUrl}</p>
        </div>
      </div>
    </Col>
  )
}