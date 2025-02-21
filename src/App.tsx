import PopularMeme from "./components/PopularMeme.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Meme} from "./interfaces/Meme.ts";

const ParentDiv=styled.div`
  width: 80vw;
  margin: auto;
  border: 5px plum solid;
`;


export default function App() {

  const [data, setData] = useState<Meme[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
        const rawData = await fetch("https://api.imgflip.com/get_memes");
        const json = await rawData.json();
        setData(json.data.memes);
    }
    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, []);

  return (
    <ParentDiv>
      <PopularMeme data={data}/>
    </ParentDiv>
  );
}


