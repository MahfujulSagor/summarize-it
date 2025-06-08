import "./style.css";
import React from "react";
import { useState } from "react";


function IndexPopup() {
  const [data, setData] = useState("");

  return (
    <div>
      <nav>
          <div className="">Summarize-It🖥️</div>
          <div>
            <div>⚙️</div>
            <div>🔦</div>
          </div>
      </nav>
    </div>
  )
}

export default IndexPopup;
