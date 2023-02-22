import React from "react";

const Description = (props) => {
  const data = props.props;
  return (
    <div className="desc">
      <div className="stats">
        <div className="rate">
          <h2>
            ₹<span>{data.pricing}</span>/h
          </h2>
          charge per hour
        </div>
        <div className="experience">
          <h2>
            <span>{data.experience}</span> Years+
          </h2>
          Experience
        </div>
        <div className="total">
          <h2>{data.total_jobs}</h2>
          total Appointment
        </div>
      </div>
      <div className="experties">
        <h2>{data.role_title}</h2>
      </div>
      <div className="about">{data.long_description}</div>
      <div className="languages">
        <h3>Languages</h3>
        <div className="list">
          {data.language.map((el, i) => {
            return <div>{el}</div>;
          })}
        </div>
      </div>
      <div className="education">
        <h2>Education</h2>
        <div className="edu-list">
          <div>
            {data.education.map((el, i) => {
              return (
                <div>
                  <p className="orgnization">{el.university}</p>
                  <p className="course">{el.course}</p>
                  <p className="duration">{el.duration}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="reviews">Reviews will be here</div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="list">
          {data.skills.map((el, i) => {
            return <div>{el}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export { Description };
