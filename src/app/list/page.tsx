"use client"; // 👈 use it here
import Button from "@/components/button";
import { createContentApi, getAllContent } from "@/services/content_api";
import React, { useEffect } from "react";
import Swal from "sweetalert2";

const List = () => {
  useEffect(()=>{
    getAllContents();
  },[]);

  const createContent = async (data: { title: string; description: string }) => {
    try {
      const res = await createContentApi(data);
      if(res.message) {
        Swal.fire({
          icon: "error",
          title: "Your content cannot create",
          showConfirmButton: false,
          timer: 1800
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Your content has been created",
          showConfirmButton: false,
          timer: 1800
        });
      }
    } catch (error) {
      console.log("createContent error", error);
    }
  };

  const getAllContents = async () => {
    try {
      const res = await getAllContent();
      if(res.message) {
        Swal.fire({
          icon: "error",
          title: "cannot get your all contents",
          showConfirmButton: false,
          timer: 1800
        });
      } else {
       console.log("ressss",res)
      }
    } catch (error) {
      console.log("getAllContents error", error);
    }
  };

  return (
    <div className="w-full grid grid-cols-2 py-[2vh]">
      <div className="flex justify-start pl-[2vh]">PRODUCTS</div>
      <div className="flex justify-end pr-[2vh]">
        <Button
          onClick={async () => {
            const { value: formValues } = await Swal.fire({
              title: "Create Content",
              html: `
                <div class='text-left font-bold text-lg pb-[1vh]'>Title</div>
                <input placeholder='Title' id="swal-input1" class="my-input">
                <div class='text-left font-bold text-lg pb-[1vh] pt-[2vh]'>Description</div>
                <textarea placeholder='Description...' id="swal-input2" class="my-text-area">
              `,
              focusConfirm: false,
              preConfirm: () => {
                let title = (
                  document.getElementById("swal-input1") as HTMLInputElement
                )?.value;
                let desc = (
                  document.getElementById("swal-input2") as HTMLInputElement
                )?.value;
                const values = { title: title, description: desc };
                return values;
              },
            });

            if(formValues){
              createContent(formValues);
            }
          }}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default List;
