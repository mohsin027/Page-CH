// import ButtonFrame from "../components/ButtonFrame";
import Vision from "../Vision/Vision";
import GroupComponent from "./GroupComponent";
// import BackgroundMessageText from "../components/BackgroundMessageText";
// import Nav from "../../components/Nav"
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="main-frame" />
      <div className="h-thng-adnetwork" />
      {/* <ButtonFrame /> */}
{/* <Nav></Nav> */}
      <main className="lorem-ipsum-quote">
        <section className="about-us-content">
          <div className="our-team-content">
            <div className="who-we-are-and-our-team">
              <h1 className="about-us1">
                <span>{`About `}</span>
                <span className="us">Us</span>
              </h1>
              <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id  `}</div>
            </div>
          </div>
          <div className="our-story-content">
            <h1 className="our-story">
              <span>{`Our `}</span>
              <span className="story">Story</span>
            </h1>
            <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id.Sit purus ante dictum in malesuada id.Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id  `}</div>
          </div>
          <Vision/>
          <div className="frame-parent">
            <GroupComponent group15404="src\assets\Rahul.png" rahul="Rahul" />
            <GroupComponent
              group15404="src\assets\Ishaa.png"
              rahul="Ishaa"
              propPadding="var(--padding-lgi) var(--padding-xl) var(--padding-lg) 28px"
              propWidth="217px"
            />
            <GroupComponent
              group15404="src\assets\Priya4.png"
              rahul="Priya"
              propPadding="var(--padding-lgi) var(--padding-xl) var(--padding-lg) 30px"
              propWidth="217px"
            />
            <GroupComponent
              group15404="src\assets\Jackson.png"
              rahul="Jackson"
              propPadding="var(--padding-lgi) 66px var(--padding-lg) 64px"
              propWidth="unset"
            />
          </div>
        </section>
      </main>
      {/* <BackgroundMessageText /> */}
    </div>
  );
};

export default AboutUs;
