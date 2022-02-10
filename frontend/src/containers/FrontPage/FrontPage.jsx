import React from "react";
import FullWidthImageHeader from "../../components/FullWidthImageHeader/FullWidthImageHeader";
import Food from "../../assets/Food.png";
import SingleRecepieModule from "../../components/SingleRecepieModule/SingleRecepieModule";

const FrontPage = () => {
  return (
    <>
      <FullWidthImageHeader imgHeader={Food} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "10%",
        }}
      >
        <SingleRecepieModule />
        <SingleRecepieModule />
        <SingleRecepieModule />
        <SingleRecepieModule />
      </div>
    </>
  );
};

export default FrontPage;
