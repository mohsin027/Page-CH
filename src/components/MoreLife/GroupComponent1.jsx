import "./GroupComponent1.css";

export const GroupComponent1 = ({
  image4,
  becomeVolunteer,
 
}) => {
  return (
    <div className="rectangle-parent3">
      <div className="frame-child14" />
      <div className="image-4-wrapper">
        <img className="image-4-icon" loading="lazy" alt="" src={image4} />
      </div>
      <div className="become-volunteer-wrapper">
        <div className="become-volunteer">{becomeVolunteer}</div>
      </div>
      <div className="lorem-ipsum-dolor3">{`Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem   `}</div>
    </div>
  );
};

