import React from "react";
import { useParams } from "react-router-dom";
import DirectionSection from "../../components/DirectionSection/DirectionSection";
import IngredientSection from "../../components/IngredientSection/IngredientSection";

const SingleRecipePage = () => {
  const { id } = useParams();

  return (
    <>
      <p>hei</p>
      {IngredientSection()}
      {DirectionSection()}
  
    </>
  );
};

export default SingleRecipePage;
