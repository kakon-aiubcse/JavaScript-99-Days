import { ReactNode, useState } from "react";
import ListGroup from "./ListGroup";
interface Props {
  children: ReactNode;
}

const Newcomponent = ({ children }: Props) => {
const [showlist, setShowlist] =  useState(false);

  return (<>
    <button
      onClick={() => {
        setShowlist(!showlist)
      }}
    >
      {children}
    </button>
    {showlist && <ListGroup heading="React Practice" />}</>
  );
};

export default Newcomponent;
