"use client"; // 👈 use it here
import { getAllProduct } from "@/services/product";
import React, { useEffect } from "react";

const ListItem = () => {
  useEffect(() => {
    getDataInfo();
  }, []);

  const getDataInfo = async () => {
    try {
      const res = await getAllProduct();
      console.log("res====>", res);
    } catch (err) {
      console.log("err next", err);
    }
  };
  return (
    <div className="grid justify-items-stretch">
      <div className="justify-self-center">ListItem</div>
    </div>
  );
};

export default ListItem;
