/* eslint-disable @next/next/no-img-element */
"use client"; // 👈 use it here
import { DelButton, MainButton } from "@/components/button";
import { createContentApi, getAllContent } from "@/services/content_api";
import moment from "moment";
import React, { ReactNode, useEffect, useState } from "react";
import Swal from "sweetalert2";

export interface IListItem {
  createdAt: string;
  description: string;
  title: string;
  updatedAt: string;
  user_id: string;
  _id: string;
}

const List = () => {
  const [list, setList] = useState<IListItem[]>([]);

  useEffect(() => {
    getAllContents();
  }, []);

  const createContent = async (data: {
    title: string;
    description: string;
  }) => {
    try {
      const res = await createContentApi(data);
      if (res.message) {
        Swal.fire({
          icon: "error",
          title: "Your content cannot create",
          showConfirmButton: false,
          timer: 1800,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Your content has been created",
          showConfirmButton: false,
          timer: 1800,
        });
      }
    } catch (error) {
      console.log("createContent error", error);
    }
  };

  const getAllContents = async () => {
    try {
      const res = await getAllContent();
      if (res.message) {
        Swal.fire({
          icon: "error",
          title: "cannot get your all contents",
          showConfirmButton: false,
          timer: 1800,
        });
      } else {
        res?.length > 0 && setList(res || []);
      }
    } catch (error) {
      console.log("getAllContents error", error);
    }
  };

  const Headerbar = () => {
    return (
      <div className="w-full grid grid-cols-2 py-[2vh]">
        <div className="flex justify-start pl-[2vh]">PRODUCTS</div>
        <div className="flex justify-end pr-[2vh]">
          <MainButton
            onClick={async () => {
              const { value: formValues } = await Swal.fire({
                title: "Create Content",
                html: `
                <div className='text-left font-bold text-lg pb-[1vh]'>Title</div>
                <input placeholder='Title' id="swal-input1" className="my-input">
                <div className='text-left font-bold text-lg pb-[1vh] pt-[2vh]'>Description</div>
                <textarea placeholder='Description...' id="swal-input2" className="my-text-area">
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

              if (formValues) {
                createContent(formValues);
              }
            }}
          >
            Create
          </MainButton>
        </div>
      </div>
    );
  };

  const CardImage = ({ data }: { data: IListItem }) => {
    console.log("data===>", data);
    return (
      <div className="bg-white shadow rounded-lg overflow-hidden w-full">
        <img
          src="https://loremflickr.com/320/240?random=1"
          className="object-cover h-52 w-full"
          alt="xxx"
        />
        <div className="p-6">
          <span className="block text-slate-400 font-semibold text-sm">
            {`${moment(data?.updatedAt).format("MMMM Do YYYY, h:mm:ss a")}`}
          </span>
          <h3 className="mt-3 font-bold text-lg pb-4 border-b border-slate-300 min-h-[4vh]">
            {data?.title || "-"}
          </h3>
          <div className="py-[1vh] border-b border-slate-300 min-h-[7vh]">
            <h3 className="font-bold line-clamp-3 text-gray-400">
              {data?.description || "-"}
            </h3>
          </div>
          <div className="flex mt-4 gap-4 justify-between items-center">
            <MainButton>Edit</MainButton>
            <DelButton>Delete</DelButton>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full">
      <Headerbar />
      <div className="grid grid-cols-4 gap-4">
        {list?.map((l: IListItem, idx: number) => (
          <CardImage key={idx} data={l} />
        ))}
      </div>
    </div>
  );
};

export default List;
