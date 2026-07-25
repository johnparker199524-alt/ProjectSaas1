

import "./DynamicData.css";

const DynamicData = () => {
  const name = "George";
  const surname = "Wellington";
  const age = 32;

  return (
    <div>
      <div className="item-name">{name}</div>
      <div className="item-surname">{surname}</div>
      <div className="item-age">{age}</div>
    </div>
  );
};

export default DynamicData;
