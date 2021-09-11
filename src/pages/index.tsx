import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [input, setInput] = useState("");

  const setData = async () => {
    const response = await axios.get("/api/hello", { params: { data: input } });

    console.log(response);
  };

  return (
    <div>
      <input
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
        value={input}
      />
      <button onClick={() => setData()}>aaaaa</button>
    </div>
  );
};

export default Home;
