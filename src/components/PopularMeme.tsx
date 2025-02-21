import styled from "styled-components";
import {Meme} from "../interfaces/Meme.ts";

const AllMemesDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: azure;
`;

const SingleMemeDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px pink solid;
    font: small-caps calc(2px + 1vw) impact;
    text-align: center;
`;

export default function PopularMeme(props : { data:Meme[] } ){
    return (
        <AllMemesDiv >
            {
                props.data.map((mem: Meme) =>
                    <SingleMemeDiv key={mem.id} >
                        <h1>{mem.name}</h1>
                        <p>Box Count: {mem.box_count}</p>
                        <img src={mem.url} alt={`image of ${mem.name}`} />
                    </SingleMemeDiv>
                )
            }
        </AllMemesDiv>
    );
}
