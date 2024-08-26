import logo from "/PITlogo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "coral",
          padding: "10px 20px",
        }}
      >
        <NavLink
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          <img
            src={logo}
            alt="practical-logo"
            style={{
              width: "60px",
              height: "60px",
              display: "block",
              textIndent: -"9999px",
            }}
          />
        </NavLink>
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <NavLink
            to="/products"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            PRODUCTS
          </NavLink>
          <NavLink
            to="/about"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/services"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/add-product"
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            ADD PRODUCT
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
