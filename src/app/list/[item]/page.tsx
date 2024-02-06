/* eslint-disable @next/next/no-img-element */
"use client"; // 👈 use it here
import React, { useEffect, useState } from "react";
import { getContentId } from "@/services/content_api";
import Swal from "sweetalert2";
import { IListItem } from "@/lib/interface";
import CardAddCart from "@/components/CardAddCart";
import { DelButton } from "@/components/button";
import { useRouter } from "next/navigation";

export const getContents = async (id: string) => {
  try {
    let res = await getContentId(id);
    if (res.message) {
      Swal.fire({
        icon: "error",
        title: "cannot get your all contents",
        showConfirmButton: false,
        timer: 1800,
      });
    }
    return res;
  } catch (error) {
    console.log("getAllContents error", error);
  }
};

const Page = ({ params }: { params: { item: string } }) => {
  const router = useRouter();
  const [info, setInfo] = useState<IListItem>();

  useEffect(() => {
    getContents(params?.item);
  }, [params?.item]);

  const getContents = async (id: string) => {
    try {
      let res = await getContentId(id);
      console.log("res===", res);
      if (res.message) {
        Swal.fire({
          icon: "error",
          title: "cannot get your all contents",
          showConfirmButton: false,
          timer: 1800,
        });
      }
      setInfo(res);
    } catch (error) {
      console.log("getAllContents error", error);
    }
  };

  return (
    <div className="w-full h-full px-[2vh]">
      <div className="grid justify-end pt-[3vh]">
        <DelButton onClick={()=>router.push(`/`)}>Back</DelButton>
      </div>
      <div
        className="w-full h-full grid grid-cols-2 pt-[3vh] pb-[3vh]
        items-end content-center"
      >
        <CardAddCart title={""} price={"123"} onClick={() => {}} />
        <MyTable data={mockData} />
      </div>
    </div>
  );
};

export default Page;

export const MyTable = ({ data }: any) => {
  return (
    <div className="grid justify-items-start pl-[2vh]">
      <div className="pb-[2vh] text-[3vh] font-bold text-[#FF8300]">Bonus</div>
      <table className="table-fixed">
        <thead className={tableClass}>
          <tr className={tableClass}>
            {data?.columns?.map(
              (item: { key: string; name: string }, idx: number) => {
                return (
                  <th key={idx} className={tableClass}>
                    {item?.key}
                  </th>
                );
              }
            )}
          </tr>
        </thead>
        <tbody className={tableClass}>
          {data?.data?.map((item: string[], idx: number) => {
            return (
              <tr key={idx} className={tableClass}>
                {item?.map((child: string, idx: number) => {
                  return (
                    <td key={idx} className={tableClass}>
                      {child}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// #a3e635
export const tableClass = `border-2 border-[white] 
p-[1vh] text-[white] bg-[#232326]`;
export const mockData = {
  columns: [
    {
      key: "id",
      name: "",
    },
    {
      key: "no",
      name: "No.",
    },
    {
      key: "title",
      name: "Title",
    },
    {
      key: "desc",
      name: "Description",
    },
    {
      key: "date",
      name: "Created Date",
    },
  ],
  data: [
    [
      "f22ecad5-cbb6-402b-995f-6867792bc9c6",
      1,
      "Job 1",
      "This is job 1",
      "1 Oct 2023 12:03:48",
    ],
    [
      "6a412fa7-2c3b-4e38-8973-2b32479bffab",
      2,
      "Job 2",
      "This is job 2",
      "11 Oct 2023 10:03:48",
    ],
    [
      "2c302941-3ba7-413d-84a6-20503355b08a",
      3,
      "Job 3",
      "This is job 3",
      "14 Oct 2023 18:34:48",
    ],
    [
      "eff7e063-3e18-4790-95b4-abf62470e874",
      4,
      "Job 4",
      "This is job 4",
      "1 Oct 2023 09:26:48",
    ],
  ],
};
