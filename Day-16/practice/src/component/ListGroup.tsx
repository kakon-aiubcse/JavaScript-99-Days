import { MouseEvent, useState } from "react";

//Props
interface Props{
  heading : string;
}

function ListGroup({heading}:Props) {
  let marks = [52, 43, 43, 53, 33, 56, 34];
  //event handling
  let handleClick = (_event: MouseEvent<HTMLElement>, result: number, index:number) => {
    console.log(`clicked on ${result} `);
    setSelectedIndex(index); 
  };
  //hook useState
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1 className="text-primary">{heading}</h1>
      <ul className="list-group">
        <h2>Array of marks: {marks.join(", ")}</h2>
        {marks.length === 0 && (
          <h3 className="text-warning">Nothing has been found</h3>
        )}

        {marks.map(
          (result, index) =>
            result % 2 === 0 && (
              <li
              className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
             
                key={index}
                onClick={(event) => handleClick(event, result,index)}
              >
                Result of even numbers: {result} - Found at index: {index}
              </li>
            )
        )}
      </ul>
    </>
  );
}

export default ListGroup;
