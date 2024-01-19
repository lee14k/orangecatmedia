import TripleRowBox from "./TripleRowBox";
const BigHeadline = ({ children }) => (
    <div>
    <div className="flex justify-end">
    <h1 className="big-headline text-8xl">{children}</h1>
    </div>
    <div className="my-24 mx-24">
   < TripleRowBox useTripleRowWrapper={false}
      headOne="filler"
      headTwo="filler"
      headThree="filler"
      spanOne="filler"
      spanTwo="filler"
      spanThree="filler"/>
      </div>
    </div>
);

export default BigHeadline;