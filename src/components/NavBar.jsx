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
          LOGO
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
