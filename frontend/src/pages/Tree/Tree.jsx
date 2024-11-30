import "./Tree.scss";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import UserImage1 from "../../assets/images/User-Image.png";
import ThreeDots from "../../assets/images/3 dots.svg";
import Verified from "../../assets/icons/post/Verified.svg";
import TreeCard from "../../components/TreeCard/TreeCard";
import Requests from "../../components/Requests/Requests";
import FamilyTreePage from "../../components/FamilyTreePage/FamilyTreePage";

const Tree = () => {
  return (
    <div className="mt-4">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav
          variant="pills"
          className={`bg_secondary same_shadow_border flex-row  py-2 px-3 rounded-pill gap-3 navigation_buttons my-4`}
        >
          <Nav.Item>
            <Nav.Link className="rounded-pill px-5" eventKey="first">
              Family Tree
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="rounded-pill px-5" eventKey="second">
              Requests
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          {/* <Tab.Pane eventKey="first">
            <FamilyTreePage />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Requests />
          </Tab.Pane> */}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Tree;
