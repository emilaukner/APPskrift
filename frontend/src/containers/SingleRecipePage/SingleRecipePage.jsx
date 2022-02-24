import React from "react";
import { useParams } from "react-router-dom";
import IngredientSection from "../../components/IngredientSection/IngredientSection";

const SingleRecipePage = () => {
  const { id } = useParams();

  return (
    <>
      <p>hei</p>
      {IngredientSection()}
  
    </>
  );
};

export default SingleRecipePage;
