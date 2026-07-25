import "./DynamicData.css";

const Student = () => {
  const name = "Paul";
  const surname = "Sholl";
  const age = 32;

  return (
    <div className="item-name">
      <p style={{textAlign:'center',color:'red',fontWeight:'bolder'}}>{name}</p>
      <p style= {{textAlign:'center',color:'red',fontWeight:'bolder'}}>{surname}</p>
      <p style ={{textAlign:'center',color:'red',fontWeight:'bolder'}}>{age}</p>
    </div>
  );
};
export default Student;
