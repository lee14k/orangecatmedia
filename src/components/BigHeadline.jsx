import TripleRowBox from "./TripleRowBox";
import Image from "next/image";
const BigHeadline = ({ children }) => (
    <div>
            <p>We are who we are</p>

<div >
    <div className="flex flex-col justify-end items-end">
      <Image
      src="/cat.png"
      height={200}
      width={400}
      />
    <h1 className="big-headline">{children}</h1>
    </div>
    </div>
    <div className="my-24 ml-48  ">
   < TripleRowBox useTripleRowWrapper={false}
    mainheader={false}
     headOne="15+"
     headTwo="1.2M"
     headThree="100K+"
     spanOne="years of combined experience"
     spanTwo="views on our work monthly"
     spanThree="assets created"
     headColor="#ed5724" // Custom color for heads
     spanColor="black" // Custom color for spans
     />
      </div>
    </div>
);

export default BigHeadline;