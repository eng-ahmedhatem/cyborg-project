import React from "react";
import { SectionTitle , BtnColor } from "../../components_links";
import Row from "./Row";
export default function Your_Gaming() {
  const rowsData = [
    {
      key: 1,
      img: "../../../../public/home/Your Gaming/game-01.jpg",
      name: "data 2",
      type: "sandbox",
      date: "24/08/2036",
      hours: "634 H 22 Mins",
      status: "Downloaded",
      btnTitle: "downloaded"
    },
    {
      key: 2,
      img: "../../../../public/home/Your Gaming/game-02.jpg",
      name: "Fortnite",
      type: "sandbox",
      date: "24/08/2036",
      hours: "740 H 52 Mins",
      status: "Not downloaded",
      btnTitle: "download"
    },
    {
      key: 3,
      img: "../../../../public/home/Your Gaming/game-03.jpg",
      name: "CS-GO",
      type: "sandbox",
      date: "24/08/2036",
      hours: "892 H 14 Mins",
      status: "Downloaded",
      btnTitle: "downloaded"
    },
  ];
  const data = rowsData.map(row => <Row {...row} />);
  return (
    <section className="YourGaming">
      <SectionTitle title_light="Your Gaming" title_color="Library" />
      <div className="rows">
        {data}
      </div>
      <BtnColor btnTitle = "View your library" btnType="btn_color" width="185px" height = "45px"/>
    </section>
  );
}
