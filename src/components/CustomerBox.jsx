import TripleRowBox from "./TripleRowBox"
const CustomerBox =()=>{
    return (
    <div className="triplerowwrapper my-24 ">
        <div className="text-white my-24 ">
  < TripleRowBox useTripleRowWrapper={true}
    mainheader={true}
headOne="Small Businesses"
headTwo="Individuals"
headThree="Corporations"
spanOne="we love helping small businesses find their voice"
spanTwo="family photo shoots? We've got you covered"
spanThree="from headshots to professional branding, we do it all"/>
 </div>
 </div>
    )
}

export default CustomerBox