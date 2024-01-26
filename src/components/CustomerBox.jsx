import TripleRowBox from "./TripleRowBox"
const CustomerBox = () => {
    return (
        <div className="orangebg pb-24">
            <div className="ml-24 my-24 ">
                <div className="text-white my-24 orangebg">
                    < TripleRowBox useTripleRowWrapper={true}
                        mainheader={true}
                        headOne="Small Businesses"
                        headTwo="Individuals"
                        headThree="Corporations"
                        spanOne="we love helping small businesses find their voice"
                        spanTwo="family photo shoots? We've got you covered"
                        spanThree="from headshots to professional branding, we do it all"
                        className="orangebg ml-24"
                        imgSrcOne="/collar.png"
                        imgSrcTwo="/yarn.png"
                        imgSrcThree="/yarn.png"
                        showImages={true}
/>
                </div>
            </div>
        </div>
    )
}

export default CustomerBox