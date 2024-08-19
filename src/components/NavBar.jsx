import logo from "/practica-it-use-logo.png";
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
        <a
          href="#"
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
        </a>
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <a
            href=""
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            HOME
          </a>
          <a
            href=""
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            ABOUT
          </a>
          <a
            href=""
            style={{
              textDecoration: "none",
              fontSize: "18px",
              color: "#fff",
            }}
          >
            SERVICES
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
