import React from "react";
import Modal from "../Modal/Modal"
import "./AboutUs.css";
export const AboutUs = ({onClose}) => {

  return (
    <Modal onClose={onClose}>
    <div className="about_us">
      <div className="heading">
        <h2>About Gradientify</h2>
      </div>
      <img />
      <p>
        Add a description for the scenario and the users actions. Shouldn’t
        exceed two lines of text.Add a description for the scenario and the
        users actions. 
      </p>
      <div className="info">
        <h3>How can i use css gradient generator ?</h3>
        <p>
          Add a description for the scenario and the users actions. Shouldn’t
          exceed two lines of text.Add a description for the scenario and the
          users actions. Shouldn’t exceed two lines of text.Add a description
          for the scenario and the users actions. 
        </p>

        <h3>How can i use css gradient generator ?</h3>
        <p>
          Add a description for the scenario and the users actions. Shouldn’t
          exceed two lines of text.Add a description for the scenario and the
          users actions. Shouldn’t exceed two lines of text.Add a description
          for the scenario and the users actions. Shouldn’t exceed two lines of
          text.Add a description for the scenario and the users actions.
          Shouldn’t exceed two lines of text
        </p>
      </div>
    </div>
    </Modal>
  );
};
