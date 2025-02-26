import React from "react";

export default function LogoWrapper() {
  return (
    <>
      <div
        style={{ cursor: "pointer", marginRight: 25 }}
        onClick={() => (location.href = "https://greycollar.ai/docs")}
      >
        <span style={{ marginRight: 5, verticalAlign: "middle" }}>
          <img
            src={"https://cdn.nucleoid.com/greycollar/media/icon.png"}
            width={30}
            style={{ verticalAlign: "top" }}
          />
        </span>
        <span
          style={{
            fontFamily: "Roboto",
            fontSize: "22px",
            color: "white",
          }}
        >
          GreyCollar
        </span>
        &nbsp;
        <span className={"neon"}>Beta</span>
      </div>
    </>
  );
}
