import meter from "../assets/img/statusss.png";
import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/pinky.png";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <TrackVisibility>
        {({ isVisible }) => (
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="skill-bx wow zoomIn">
                    <h2>Characteristics</h2>
                    <p>
                      How to describe my super naughty girlfriend?<br></br>
                      Statistics below will show how cute is she.
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="owl-carousel owl-theme skill-slider"
                    >
                      <div className="item">
                        <img src={meter} alt="Image" />
                        <h5>Adorable</h5>
                      </div>
                      <div className="item">
                        <img src={meter1} alt="Image" />
                        <h5>Beautiful</h5>
                      </div>
                      <div className="item">
                        <img src={meter} alt="Image" />
                        <h5>Kind-hearted</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="Image" />
                        <h5>Supportive</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>

      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
