function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer
        style={{
          background: "black",
          color: "white",
          padding: "1rem",
          textAlign: "center",
          marginTop:"0.5rem"
        }}
      >
        <div>
          <p>Product App. All right reserved. {currentYear}.</p>
        </div>
        <div>
          <a href="">Privacy Policy</a>
          <a href="">Terms of Services</a>
        </div>
      </footer>
    </>
  );
}
export default Footer;
