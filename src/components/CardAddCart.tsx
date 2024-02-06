/* eslint-disable @next/next/no-img-element */
import { numberToCommasNumber } from "@/lib/utils";

const CardAddCart = ({
  title = "",
  price = "",
  onClick,
}: {
  title: string;
  price: string;
  onClick?: (value?: any) => void;
}) => {
  return (
    <div className="grid 2xl:justify-items-end justify-items-center 2xl:pr-[2vh]">
      <img
        src={"https://loremflickr.com/320/240?random=1"}
        style={{ objectFit: "cover" }}
        className="rounded-t-lg"
        alt="detail"
        width={650}
        height={650}
      />
      <div
        style={{
          backgroundColor: "#232326",
          width: 650,
          padding: "3vh",
          color:'white'
        }}
        className="rounded-b-lg"
      >
        <h1>{title}</h1>
        <div
          style={{
            fontSize: "1.5vh",
            fontWeight: "bold",
            marginBottom: "0.8vh",
            color:'white'
          }}
        >
          {"SQUARE ENIX CO., LTD."}
        </div>
        <div
          style={{ color:'white',fontSize: "1.5vh", fontWeight: "bold", marginBottom: "1vh" }}
        >
          {"29/2/2024 12:00 AM"}
        </div>
        <div style={{ padding: "1vh 0" }}>
          <span
            style={{
              border: "1px solid white",
              padding: "0.2vh 1vh",
              marginRight: "1vh",
              fontSize: "1.2vh",
              color:'white'
            }}
          >
            PS5
          </span>
          <span
            style={{
              border: "1px solid white",
              padding: "0.2vh 1vh",
              marginRight: "1vh",
              color:'white'
            }}
          >
            My Shop Entertainment
          </span>
        </div>
        <div
          style={{
            backgroundColor: "#3B3A3C",
            fontSize: 25,
            width: 250,
            textAlign: "center",
            borderRadius: 30,
            marginTop: "2vh",
            padding: "1vh 0",
            color:'white'
          }}
        >
          {price && numberToCommasNumber(Number(price))}
          {" THB"}
        </div>
        <div
          style={{
            backgroundColor: "#FF8300",
            fontSize: "2vh",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
            borderRadius: 30,
            padding: "1.5vh 0",
            marginTop: "3vh",
            color:'white'
          }}
          className="cursor-pointer"
          onClick={onClick}
        >
          Add to card
        </div>
      </div>
    </div>
  );
};

export default CardAddCart;
