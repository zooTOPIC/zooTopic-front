import React from "react";

function News({ news }) {
  const [title, link, img, time, contents] = news;
  // console.log(link)

  const LinkClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="p-3 bg-white shadow-sm rounded-md">
      <a onClick={LinkClick} href={link} style={{ textDecoration: "none", color: "black", cursor: "pointer" }}>
        <div className="card" style={{ height: "350px" }}>
          <title>{title}</title>
          <rect width="100%" height="100%" filld="#55595c" />
          <img className="img-fluid" style={{ height: "200px", display: "block", padding: "5px", margin: "auto" }} src={img} alt="기사 사진" />
          <div className="card-body">
            <div className="card-text" style={{ height: "100px" }}>{title}</div>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-body-secondary">{time}</small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default News;
