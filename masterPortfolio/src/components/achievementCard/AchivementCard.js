import React from "react";

export default function AchivementCard({ cardInfo }) {
  function openUrlInNewTab(url) {
    if (url) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  // Check if EVERY link in the footer array is empty/falsy
  const isCardDisabled = cardInfo.footer.every(
    (v) => !v.url || v.url.trim() === ""
  );

  return (
    <div className={`certificate-card ${isCardDisabled ? "no-hover" : ""}`}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="PWA" className="card-image" />
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <p
              key={i}
              onClick={() => openUrlInNewTab(v.url)}
              style={
                !v.url
                  ? { pointerEvents: "none", cursor: "default", opacity: 0.6 }
                  : {}
              }
            >
              {v.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
