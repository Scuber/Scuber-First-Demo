'use client'

import { Ubuntu } from "next/font/google";
import styles from './prediction.module.css';
import Button from "../components/button";
import { useState, useEffect } from "react";
import axios from "axios";

const Ubuntu_font = Ubuntu({
  weight: '400',
  subsets: ['latin']
});

export default function Prediction() {

  const [scuber, setScuber] = useState<any | null>(null);

  useEffect(() => {
    getScuber();
  }, []);

  const getScuber = () => {
    var config = {
      method: 'GET',
      url: process.env.NEXT_PUBLIC_API_URL + '/scuber'
    }

    axios(config)
      .then((res: any) => {
        console.log(res.data);
        setScuber(res.data);
      })
      .catch((err: any) => {
        
      })
  };

  const onHouseClick = (option: string) => {
    switch(option) {
      case "scuber":
        postScuber(1);
        break;
      case "ignore":
        postScuber(2);
        break;
      case "invalid":
        postScuber(3);
        break;
      default:
        break;
    }
  }

  const postScuber = (status: number) => {
    var config = {
      method: 'POST',
      url: process.env.NEXT_PUBLIC_API_URL + '/scuber',
      data: {
        url: scuber.scuber.url,
        status: status
      }
    }

    axios(config)
      .then((res: any) => {
        setScuber(null);
        getScuber();
      })
      .catch((err: any) => {
        
      })
  }

  return (
    <div className={`${Ubuntu_font.className} ${styles.container}`}>
        <div className="flex flex-col gap-5">
          <div>
            <div>
              {scuber ?
                <div>
                  <div>
                    {scuber.scuber.address}
                    </div>
                  <img src={scuber.scuber.url} />
                  <div style={{color: "white",backgroundColor: scuber.prediction === "good" ? "green": "red"}}>
                    Prediction: {scuber.prediction}
                  </div>
                </div> : <div>LOADING IMAGE...</div>
              }
            </div>
          </div>
          <div className="flex gap-2">
            <Button style={{backgroundColor: 'green'}} label="Good" onClick={()=>{onHouseClick("scuber")}} />
            <Button style={{backgroundColor: 'red'}} label="Bad" onClick={()=>{onHouseClick("ignore")}} />
          </div>
        </div>
    </div>
  );
}