import GroupComponent from "./GroupComponent";
import "./Campaign.css";
import rectangle7 from "../../assets/Rectangle 11.png";
import rectangle8 from "../../assets/Rectangle 12.png";
import rectangle9 from "../../assets/Rectangle 13.png";
import rectangle10 from "../../assets/Rectangle 14.png";

const Campaign = () => {
  return (
    <section className="landing-page-inner2">
      <div className="frame-parent24">
        <div className="our-campaign-wrapper">
          <h1 className="our-campaign">Our Campaign</h1>
        </div>
        <div className="frame-parent25">
          <GroupComponent
            networkNode={rectangle7}
            food="Food"
            line2="/line-2.svg"
          />
          <div className="rectangle-parent6">
            <div className="frame-child18" />
            <div className="frame-wrapper21">
              <div className="rectangle-parent7">
                <img
                  className="frame-child19"
                  loading="lazy"
                  alt=""
                  src={rectangle8}
                />
                <button className="rectangle-parent8">
                  <div className="frame-child20" />
                  <div className="clothes">Clothes</div>
                </button>
              </div>
            </div>
            <div className="frame-wrapper22">
              <div className="help-us-to-send-food-group">
                <div className="help-us-to1">Help us to send food</div>
                <div className="frame-parent26">
                  <div className="frame-wrapper23">
                    <div className="frame-parent27">
                      <div className="frame-wrapper24">
                        <div className="vector-parent">
                          <img
                            className="line-icon"
                            loading="lazy"
                            alt=""
                            src="/line-1.svg"
                          />
                          <img
                            className="frame-child21"
                            alt=""
                            src="/line-4.svg"
                          />
                        </div>
                      </div>
                      <div className="donators1">Donator’s</div>
                    </div>
                  </div>
                  <div className="div1">100%</div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="div2">50</div>
            </div>
          </div>
          <GroupComponent
            networkNode={rectangle9}
            food="Education"
            line2="/line-6.svg"
            propPadding="var(--padding-7xs) var(--padding-smi) var(--padding-8xs) var(--padding-xs)"
            propBackgroundColor="#ff8a00"
            propBackgroundColor1="#ff8a00"
            propColor="#ff8a00"
            propColor1="#ff8a00"
            propColor2="#ff8a00"
          />
          <div className="rectangle-parent9">
            <div className="frame-child22" />
            <img
              className="frame-child23"
              loading="lazy"
              alt=""
              src={rectangle10}
            />
            <div className="frame-parent28">
              <div className="frame-parent29">
                <button className="rectangle-parent10">
                  <div className="frame-child24" />
                  <div className="medical">Medical</div>
                </button>
                <div className="help-us-to2">Help us to send food</div>
              </div>
              <div className="position-manager">
                <div className="text-formatter">
                  <div className="image-filter">
                    <div className="link-validator">
                      <div className="shape-combiner">
                        <img
                          className="shape-combiner-child"
                          alt=""
                          src="/line-1.svg"
                        />
                        <img
                          className="shape-combiner-item"
                          alt=""
                          src="/line-6-1.svg"
                        />
                      </div>
                    </div>
                    <div className="donators2">Donator’s</div>
                  </div>
                </div>
                <div className="text-aligner">100%</div>
              </div>
            </div>
            <div className="div3">50</div>
          </div>
        </div>
        <div className="shape-splitter">
          <button className="button-wrapper5">
            <div className="button8">Show More</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Campaign;
