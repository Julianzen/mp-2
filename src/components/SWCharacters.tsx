import styled from "styled-components";
import {Character} from "../interfaces/SWdata.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-image: url("/A4aa99b6ad2d2cbc7cb04a41571885a8f.jpg");
`;

const SingleCharDiv=styled.div<{status: string}>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props)=>(props.status === "Alive" ? 'darkorange' : 'black')};
    color: ${(props) => (props.status !== "Alive" ? 'white' : 'black')};
    border: 3px white solid;
    font: italic small-caps bold calc(0.8px + 1vw) "Exo 2", sans-serif;
    text-align: center;
`;

export default function SWCharacters(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) =>
                    <SingleCharDiv key={char.id} status={char.status}>
                        <h1>{char.name}</h1>
                        <p>{"Birth year: "+char.birth_year}</p>
                        <p>{"Gender: "+char.gender}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}