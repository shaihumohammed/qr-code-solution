/* eslint-disable react/jsx-no-target-blank */
import image from "../assets/image-qr-code.png";

export default function Card() {
  return (
    <>
      <div className="card-container">
        <img height={250} src={image} alt="" />
        <div className="card-content">
          <h1>Improve your front-end skills by building projects</h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className="attribution">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/shaihumohammed">
            Shaihu Mohammed
          </a>
          .
        </p>
      </div>
    </>
  );
}
