import React,{useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
const SrchBar = () => {
  const [data,setData] = useState("");
  const inputEvent= (e)=>{
    const d = e.target.value;
    console.log(d);
    setData(d);
  }
  return (
    <>
      <div>
        <div className="search-box">
          <button className="btn-search"><SearchIcon/></button>
          <input type="text" onChange={inputEvent} value={data} className="input-search" placeholder="Type to Search..." />
        </div>
      </div>


    </>
  );
}

export default SrchBar;