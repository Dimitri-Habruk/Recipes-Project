
import homeImage from "../assets/homeImage.jpg";

const Home = () => {
  return (
    <>
      <img src={homeImage} alt="" style={{ width: "100%", height: "500px" }} />
      <h1 style={{width:'40%', position: "absolute", top:'230px', left:'22%', color: "white", fontSize:'17px' }}>
      During the development of this website, I utilized several technologies and tools, including spoonacular API, JavaScript, React, React UI library - ANTD and - Material UI. The website features various filters to display the elements, including a powerful search function on the ingredients page. Feel free to explore the website and discover how these technologies were used to create a seamless and intuitive experience for the user.
      </h1>
    </>
  );
};

export default Home;
