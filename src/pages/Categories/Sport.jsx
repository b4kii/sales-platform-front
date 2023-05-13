import { useEffect, useState } from "react";
import {
  ProductsContainer,
  ProductsList,
} from "../../components/Products";
import axios from "axios";

export const Sport = () => {
  return (
    <ProductsContainer>
      <ProductsList />
    </ProductsContainer>
  );
};
