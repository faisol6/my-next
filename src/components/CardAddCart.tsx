/* eslint-disable @next/next/no-img-element */
import { IListItem } from "@/lib/interface";
import moment from "moment";

const CardAddCart = ({ dataInfo }: { dataInfo?: IListItem }) => {
  console.log("dataInfo", dataInfo);
  return (
    <div className="grid 2xl:justify-items-end justify-items-center 2xl:pr-[2vh]">
      <img
        src={"https://loremflickr.com/320/240?random=1"}
        style={{ objectFit: "cover" }}
        className="rounded-t-lg 2xl:w-[650px] 2xl:h-[650px] lg:w-[650px] lg:h-[650px] md:w-[650px] md:h-[650px]"
        alt="detail"
      />
      <div
        style={{
          backgroundColor: "#232326",
          padding: "3vh",
          color: "white",
        }}
        className="rounded-b-lg 2xl:w-[650px] lg:w-[650px] md:w-[650px]"
      >
        {/* <div
          style={{
            fontSize: "1.5vh",
            fontWeight: "bold",
            marginBottom: "0.8vh",
            color:'white'
          }}
        >
          {dataInfo?.title||""}
        </div> */}
        <div
          style={{
            color: "white",
            fontSize: "1.5vh",
            fontWeight: "bold",
            marginBottom: "1vh",
          }}
        >
          {dataInfo?.updatedAt
            ? moment(dataInfo?.updatedAt).format("MMMM Do YYYY, h:mm:ss a")
            : ""}
        </div>
        <div style={{ padding: "1vh 0" }}>
          <span
            style={{
              border: "1px solid white",
              padding: "0.2vh 1vh",
              marginRight: "1vh",
              fontSize: "1.2vh",
              color: "white",
            }}
          >
            PS5
          </span>
          <span
            style={{
              border: "1px solid white",
              padding: "0.2vh 1vh",
              marginRight: "1vh",
              fontSize: "1.2vh",
              color: "white",
            }}
          >
            My Shop Entertainment
          </span>
        </div>
        <div
          style={{
            backgroundColor: "#3B3A3C",
            // fontSize: 25,
            // width: 250,
            textAlign: "center",
            borderRadius: 5,
            marginTop: "2vh",
            padding: "2vh",
            color: "white",
          }}
        >
          {dataInfo?.description || ""}
        </div>
        <div
          style={{
            backgroundColor: "#FF8300",
            fontSize: "2vh",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            borderRadius: 5,
            padding: "1.5vh 0",
            marginTop: "3vh",
            color: "white",
          }}
          className="cursor-pointer"
        >
          {dataInfo?.title || ""}
        </div>
      </div>
    </div>
  );
};

export default CardAddCart;
