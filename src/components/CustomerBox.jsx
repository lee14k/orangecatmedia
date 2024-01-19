import TripleRowBox from "./TripleRowBox"
const CustomerBox =()=>{
    return (
    <div className="triplerowwrapper">
        <h1 className="text-white text-6xl">We serve a wide variety of clients and customers</h1>
  < TripleRowBox useTripleRowWrapper={true}

headOne="15+"
headTwo="1.2M"
headThree="100K+"
spanOne="years of combined experience"
spanTwo="views on our work monthly"
spanThree="assets created"/>
 </div>
    )
}

export default CustomerBox