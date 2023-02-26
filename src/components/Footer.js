import "../styles/footer.css";
import githubLogo from '../assets/github.png'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="infoFooter">
        <h2>Contact information</h2>
        <p> 1 Rue Rivoli</p>
        <p> 75001 Paris</p>
        <p>France</p>
        <p>+33 (0) 1 234 567</p>
        <p> made by Dimitri Habruk
          <a href="https://github.com/Dimitri-Habruk" target={"_blank"}>
            <img src={githubLogo} alt="" style={{ width: "25px" }}/>
          </a>
        </p>

      </div>
      <div className="followUsFooter">
        <h2>Follow us</h2>

        <div className="socialLinks">
          <a
            target={"_blank"}
            className="socialLink"
            href="https://twitter.com/"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
              style={{ width: "20px" }}
              alt=""
            />
            Twitter{" "}
          </a>

          <a target={"_blank"} href="https://www.facebook.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2504/2504903.png"
              style={{ width: "20px" }}
              alt=""
            />
            Facebook
          </a>

          <a target={"_blank"} href="https://www.instagram.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
              style={{ width: "20px" }}
              alt=""
            />
            Instagram
          </a>
        </div>
      </div>
      <div className="footerMap">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.6185272223015!2d2.316888115491582!3d48.84641467928628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e670329ba0e081%3A0xbeee93e4eafd6d6f!2sH%20Kitchen!5e0!3m2!1sfr!2sfr!4v1677433570469!5m2!1sfr!2sfr"
          className="mapFooter"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
