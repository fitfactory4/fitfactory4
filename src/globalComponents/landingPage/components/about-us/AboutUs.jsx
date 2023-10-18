import { InfoIconBox } from "../../../InfoIconBox";
import discount from "../../../../images/discount.svg";

export const AboutUs = () => {
  const iconBoxes = [
    {
      image: discount,
      text: "FREE WI-FI",
      className: "info-box-1",
    },
    {
      image: discount,
      text: "+3 TRAINERS",
      className: "info-box-2",
    },
    {
      image: discount,
      text: "20% DISCOUNT",
      className: "info-box-3",
    },
    {
      image: discount,
      text: "BEST COMMUNITY",
      className: "info-box-4",
    },
    {
      image: discount,
      text: "EXPERTS",
      className: "info-box-5",
    },
  ];

  return (
    <main className="about" id="about-us">
      <div className="about-top-content">
        <h2 className="about-title-text">ABOUT US</h2>
        <div className="about-line"></div>
      </div>
      <div className="info">
        <div className="info-top">
          <h3 className="info-title">
            <span className="info-span"> RESPECT</span> YOUR BODY, IT’S THE ONLY
            ONE YOU GET
          </h3>
          <div className="info-flex">
            <div className="info-line"></div>
            <div className="info-text">
              Aliquam erat volutpat. Donec elit nibh, luctus eu nisi eu, tempus
              condimentum ipsum. Nunc euismod viverra ante vel imperdiet. In
              pretium sagittis neque nec lacinia. Integer lorem odio, lobortis
              et odio eu, ullamcorper placerat arcu.
            </div>
          </div>
          <div className="info-wrapper">
            <div className="info-wrapper-top">
              {iconBoxes.map((iconBox, index) => (
                <InfoIconBox
                  key={index}
                  image={iconBox.image}
                  text={iconBox.text}
                  className={iconBox.className}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
