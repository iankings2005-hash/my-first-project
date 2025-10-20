import Image from "next/image";
import TestApp from "./test";

let list = [
    {
        "name": "Timo",
        "age": 22
    },
    {
        "name": "Ian",
        "age": 20
    }
]

export default function Home() {
  return (
   <div>
      <TestApp users={list} rand_number={0.001}/>
   </div>
  );
}
