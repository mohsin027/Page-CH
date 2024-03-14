import "./MoreLife.css";
import {GroupComponent1} from "./GroupComponent1";

export const MoreLife = () => {
  return (
    <section className="landing-page-inner1">
      <div className="frame-parent15">
        <div className="frame-wrapper16">
          <div className="frame-parent16">
            <div className="frame-parent17">
              <div className="we-believe-that-we-can-save-mo-wrapper">
                <h1 className="we-believe-that">
                  We Believe that We can Save More Life’s with you
                </h1>
              </div>
              <div className="frame-parent18">
                <GroupComponent1
                  image4="src\assets\image 4.png"
                  becomeVolunteer="Become Volunteer"
                />
                <GroupComponent1
                  image4="src\assets\image 5.png"
                  becomeVolunteer="Quick Fundraise"
                />
                <GroupComponent1
                  image4="src\assets\image 6.png"
                  becomeVolunteer="Start Donating"
                />
              </div>
            </div>
            <div className="instance-container">
              <button className="button-wrapper3">
                <div className="button6">Donate Now</div>
              </button>
            </div>
          </div>
        </div>
        <div className="frame-wrapper17">
          <div className="frame-parent19">
            <div className="ellipse-parent4">
              <div className="frame-child15" />
              <div className="wrapper-rectangle-9">
                <img
                  className="wrapper-rectangle-9-child"
                  loading="lazy"
                  alt=""
                  src="src\assets\Rectangle 7.png"
                />
              </div>
              <div className="wrapper-rectangle-10">
                <img
                  className="wrapper-rectangle-10-child"
                  loading="lazy"
                  alt=""
                  src="src\assets\Rectangle 8.png"
                />
              </div>
            </div>
            <h1 className="join-our-community">
              Join our community for donating and be a part of a positive change
              in the world. With over
            </h1>
          </div>
        </div>
        <div className="frame-parent20">
          <div className="frame-parent21">
            <div className="wrapper-rectangle-7-wrapper">
              <div className="wrapper-rectangle-7">
                <img
                  className="wrapper-rectangle-7-child"
                  loading="lazy"
                  alt=""
                  src="src\assets\Rectangle 9.png"
                />
              </div>
            </div>
            <div className="wrapper-rectangle-8">
              <img
                className="wrapper-rectangle-8-child"
                loading="lazy"
                alt=""
                src="src\assets\Rectangle 10.png"
                />
            </div>
          </div>
          <div className="frame-wrapper18">
            <div className="frame-parent22">
              <div className="group">
                <i className="i">130,987 +</i>
                <div className="people-already-joined-wrapper">
                  <h1 className="people-already-joined">
                    People already joined
                  </h1>
                </div>
              </div>
              <div className="instance-frame">
                <button className="button-wrapper4">
                  <div className="button7">Yes i want join community</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

