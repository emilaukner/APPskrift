import React from "react";
import FullWidthImageHeader from "../../components/FullWidthImageHeader/FullWidthImageHeader";
import Food from "../../assets/Food.png";
import SingleRecepieModule from "../../components/SingleRecepieModule/SingleRecepieModule";
import Dish from "../../assets/DishDeleteMe.png";

const FrontPage = () => {
  return (
    <>
      <FullWidthImageHeader imgHeader={Food} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "10%",
          paddingBottom: "4%",
        }}
      >
        <SingleRecepieModule
          title="Rasberry pie"
          image={Dish}
          meal="Dessert"
          cousine="European"
          timeEstimate={30}
          difficulty="E"
          likedByUser={false}
          numberOfLikes={253}
        />
        <SingleRecepieModule
          title="Rasberry pie"
          image={Dish}
          meal="Dessert"
          cousine="European"
          timeEstimate={30}
          difficulty="H"
          likedByUser={true}
          numberOfLikes={253}
        />
        <SingleRecepieModule
          title="Rasberry pie"
          image={Dish}
          meal="Dessert"
          cousine="European"
          timeEstimate={30}
          difficulty="H"
          likedByUser={true}
          numberOfLikes={253}
        />
        <SingleRecepieModule
          title="Rasberry pie"
          image={Dish}
          meal="Dessert"
          cousine="European"
          timeEstimate={30}
          difficulty="H"
          likedByUser={true}
          numberOfLikes={253}
        />
      </div>
    </>
  );
};

export default FrontPage;
