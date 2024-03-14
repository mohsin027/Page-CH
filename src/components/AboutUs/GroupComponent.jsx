import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({ group15404, rahul, propPadding, propWidth }) => {
  const groupButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div className="frame-group">
      <img className="frame-child" loading="lazy" alt="" src={group15404} />
      <button className="rectangle-parent" style={groupButtonStyle}>
        <div className="frame-item" />
        <div className="rahul">{rahul}</div>
      </button>
    </div>
  );
};

export default GroupComponent;
