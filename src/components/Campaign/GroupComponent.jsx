import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  networkNode,
  food,
  line2,
  propPadding,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propColor1,
  propColor2,
}) => {
  const groupButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [propPadding, propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const helpUsToStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const colorChangerStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const linkModifierStyle = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  return (
    <div className="rectangle-parent4">
      <div className="frame-child16" />
      <div className="frame-wrapper19">
        <div className="rectangle-parent5">
          <img
            className="rectangle-icon"
            loading="lazy"
            alt=""
            src={networkNode}
          />
          <button className="group-button" style={groupButtonStyle}>
            <div className="frame-child17" style={rectangleDivStyle} />
            <div className="food">{food}</div>
          </button>
        </div>
      </div>
      <div className="frame-wrapper20">
        <div className="help-us-to-send-food-parent">
          <div className="help-us-to" style={helpUsToStyle}>
            Help us to send food
          </div>
          <div className="frame-parent23">
            <div className="data-aggregator-wrapper">
              <div className="data-aggregator">
                <div className="text-container">
                  <div className="image-processor">
                    <img
                      className="image-processor-child"
                      loading="lazy"
                      alt=""
                      src="/line-1.svg"
                    />
                    <img
                      className="image-processor-item"
                      loading="lazy"
                      alt=""
                      src={line2}
                    />
                  </div>
                </div>
                <div className="color-changer" style={colorChangerStyle}>
                  100%
                </div>
              </div>
            </div>
            <div className="donators">Donator’s</div>
          </div>
        </div>
      </div>
      <div className="image-croppper">
        <div className="link-modifier" style={linkModifierStyle}>
          50
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
