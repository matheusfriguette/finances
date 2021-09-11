import axios from "axios";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    const get = async () => {
      const response = await axios.get("/api/hello");

      console.log(response);
    };

    get();
  }, []);

  return <div>aaa</div>;
};

export default Home;
