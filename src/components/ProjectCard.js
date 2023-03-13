import { Col } from "react-bootstrap";
import gitlab from '../assets/img/gitlab-icon.svg';
import github from '../assets/img/github-icon.svg';
import deploy from '../assets/img/deployment.png';

export const ProjectCard = ({ title, description, gitUrl, imgUrl, deployUrl }) => {
  return (
    <Col>
      <div className="proj-imgbx">
        <img src={imgUrl} alt = "project" className= "proj-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <p></p>
          <a href={gitUrl} target="_blank"><img src={github} alt="" className="proj-git-img"/></a>
     </div>
      </div>
    </Col>
  )
}

/// Col>size={12} sm={6} md={4} ---- When you want to change it back to three projects per tab