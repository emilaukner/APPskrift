import React from "react";
import { useParams } from "react-router-dom";

const SingleRecipePage = () => {
  const { id } = useParams();

  return (
    <>
      <p style={{ paddingBottom: 500 }}>Page {id}</p>
      <br />
    </>
  );
};

export default SingleRecipePage;
