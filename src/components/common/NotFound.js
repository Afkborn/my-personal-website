import React, { useEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import PageNames from "../../constants/PageNames";

function NotFound() {
  useEffect(() => {
    document.title = PageNames.notFound;
  }, []);

  return (
    <Container fluid>
      <div className="text-center mt-5">
        <img
          src="./icons/404.svg"
          style={{ height: 300, width: 300 }}
          alt="404"
        />
        <h3> Böyle bir sayfa bulunamadı, URL'yi kontrol eder misin :) </h3>
        <div className="mt-5">
          <Link to={"/"} className="notfound-link">
            Anasayfaya gitmek için tıkla
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default NotFound;
