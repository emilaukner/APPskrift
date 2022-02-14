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
        <SingleRecepieModule
          title="Rasberry pie"
          meal="Dessert"
          cousine="European"
          timeEstimate="30"
          difficulty="E"
          liked={false}
        />
        <SingleRecepieModule
          title="Rasberry pie"
          meal="Dessert"
          cousine="European"
          timeEstimate="30"
          difficulty="M"
          liked={true}
        />
      </div>
    </>
  );
};

export default FrontPage;
