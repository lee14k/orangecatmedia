import TripleRowBox from "./TripleRowBox";
import Image from "next/image";
const BigHeadline = () => (
    <div>


    <div className="flex justify-center items-center">
      <Image
      src="/ocm.png"
      height={600}
      width={600}
      />
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