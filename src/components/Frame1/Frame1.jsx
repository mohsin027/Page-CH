import "./Frame1.css";

export const Frame1 = () => {
  return (
    <div className="rectangle-group">
      <div className="rectangle-div" />
      <div className="frame-div">
        <div className="k-parent">
          <div className="k">10k +</div>
          <div className="children-are-back-to-school-wrapper">
            <div className="children-are-back">Children are back to school</div>
          </div>
        </div>
        <div className="m-parent">
          <div className="m">2M+</div>
          <div className="total-money-donated-wrapper">
            <div className="total-money-donated">Total money donated</div>
          </div>
        </div>
        <div className="parent">
          <div className="div">100+</div>
          <div className="hospital-has-been-built-wrapper">
            <div className="hospital-has-been">Hospital has been built</div>
          </div>
        </div>
      </div>
    </div>
  )
}