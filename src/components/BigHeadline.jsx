import TripleRowBox from "./TripleRowBox";
const BigHeadline = ({ children }) => (
    <div>
            <p>We are who we are</p>

    <div className="flex justify-end ">
    <h1 className="big-headline text-8xl pt-32">{children}</h1>
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