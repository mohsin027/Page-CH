// import DataAggregator from "./DataAggregator";
import "./FourImage.css";

const FourImage = () => {
  return (
    <div className="rectangle-container">
      <div className="frame-child1" />
      <div className="frame-wrapper1">
        <div className="ellipse-parent">
          <img
            className="frame-child2"
            loading="lazy"
            alt=""
            src="/ellipse-14@2x.png"
          />
          <img
            className="frame-child3"
            loading="lazy"
            alt=""
            src="/ellipse-15@2x.png"
          />
        </div>
      </div>
      <div className="frame-parent2">
        <div className="frame-wrapper2">
          <div className="frame-parent3">
            {/* <DataAggregator /> */}
            <img
              className="frame-child4"
              loading="lazy"
              alt=""
              src="/ellipse-16@2x.png"
            />
          </div>
        </div>
        <div className="million-people-in">
          828 Million people in the world are still hungry
        </div>
      </div>
    </div>
  );
};

