import TripleRowBox from "./TripleRowBox";
const BigHeadline = ({ children }) => (
    <div>
    <div className="flex justify-end">
    <h1 className="big-headline text-8xl">{children}</h1>
    </div>
    <div className="my-24 mx-24">
   < TripleRowBox useTripleRowWrapper={false}
     headOne="15+"
     headTwo="1.2M"
     headThree="100K+"
     spanOne="years of combined experience"
     spanTwo="views on our work monthly"
     spanThree="assets created"/>
      </div>
    </div>
);

export default BigHeadline;