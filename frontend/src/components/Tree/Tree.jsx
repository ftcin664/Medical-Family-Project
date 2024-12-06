import "./Tree.scss";
import { Nav, Tab } from "react-bootstrap";
import FamilyTreePage from "../FamilyTreePage/FamilyTreePage";
import Requests from "../Requests/Requests";

const Tree = () => {
  return (
    <div className="mt-4">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="pills" className={`bg_secondary same_shadow_border flex-row  py-2 px-3 rounded-pill gap-3 navigation_buttons my-4`}>
          <Nav.Item>
            <Nav.Link className="rounded-pill px-5" eventKey="first">Family Tree</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="rounded-pill px-5" eventKey="second">Requests</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content style={{
            height: "calc(100vh - 221px)", // Adjust 150px for Nav and margins
            overflowY: "auto",
          }}>
          <Tab.Pane eventKey="first">
            <FamilyTreePage />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Requests />
            {/* <span className='same_poppins_1 d-block ps-3 mb-2'>
              New
            </span> */}
            {/* <RequestCard title="Rachel Podrez is inviting you, as a cousin, to be included in the family tree." subTitle='6 hours ago' />
            <RequestCard title="Rachel Podrez is inviting you, as a cousin, to be included in the family tree." subTitle='6 hours ago' />
            <RequestCard title="Rachel Podrez is inviting you, as a cousin, to be included in the family tree." subTitle='6 hours ago' /> */}
          </Tab.Pane>

        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Tree;
