import React from "react";
import { SectionTitle , BtnColor } from "../../components_links";

import Row from "./Row";
export default function TopDownloaded() {
  return (
    <div className="TopDownloaded">
      <SectionTitle title_light="Top" title_color="Downloaded" />
      <div className="rows">
    <Row img="../../../../public/home/Your Gaming/game-01.jpg" download="2.2m" rating="4.9"  type="Fortnite" />
      </div>
      <BtnColor btnTitle = "View all games"  btnType={"btn_transparent"} height="45px" width="150px"/>
    </div>
  );
}
