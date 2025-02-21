import StarWars from "./components/SWCharacters.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {Character} from "./interfaces/SWdata.ts";


const ParentDiv=styled.div`
     background-image: url("./public/porg.png");
`;
const MainDiv=styled.div`
    style: flex;
    width:70%;
    margin: auto;
    border: 5px white solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Character[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://swapi.dev/api/people");
            const {results} : {results: Character[]} = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [data.length]);

    return(

        <ParentDiv>
            <MainDiv>
            <StarWars data={data}/>
            </MainDiv>
        </ParentDiv>

    )
}