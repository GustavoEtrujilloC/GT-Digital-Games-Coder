import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <img className="imgLogo" src="../logo.png" alt="gt-digital-games"></img>
      </Link>
    </>
  );
};

export default Logo;
