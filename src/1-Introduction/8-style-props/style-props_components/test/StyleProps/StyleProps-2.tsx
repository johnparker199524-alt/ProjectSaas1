import React from "react";
import StyleProps3 from "./StyleProps-3";
import { IIntroduction } from "../../../../model/IIntroduction";

type Items = IIntroduction[];

const StyleProps2: React.FC<{ items: Items }> = (props) => {
  return (
    <div>
      <StyleProps3
        title={props.items[0].title}
        description={props.items[0].description}
        type={props.items[0].type}
        release={props.items[0].release}
      />

      <StyleProps3
        title={props.items[1].title}
        description={props.items[1].description}
        type={props.items[1].type}
        release={props.items[1].release}
      />

      <StyleProps3
        title={props.items[2].title}
        description={props.items[2].description}
        type={props.items[2].type}
        release={props.items[2].release}
      />

      <StyleProps3
        title={props.items[3].title}
        description={props.items[3].description}
        type={props.items[3].type}
        release={props.items[3].release}
      />
    </div>
  );
};

export default StyleProps2;
