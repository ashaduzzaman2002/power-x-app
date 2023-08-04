import React, { useEffect, useState } from "react";
import "./followus.css";
import Header from "../../components/header/Header";
import { dbObject } from "../../helper/constant";


const FollowUs = () => {
  const [data, setData] = useState([])

  const getData = async () => {
    try {
      const { data } = await dbObject('/follow-us/fetch.php')
      if (!data.error) return setData(data?.response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <Header title="Follow Us" path="/profile" />

      <div className="follow-cards">
        {
          data?.map(item => (
            <a key={item.id} href={item.link} target="blank" className="follow-card">
              <div>
                <i className="bi bi-telegram"></i>
              </div>
              <h2 className="mb-0">{item.channel}</h2>
            </a>
          ))
        }
      </div>
    </div>
  );
};

export default FollowUs;
