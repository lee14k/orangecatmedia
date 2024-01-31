import Image from "next/image";
const TripleRowBox = ({ 
  mainheader=false,
  headOne, 
  headTwo, 
  headThree, 
  spanOne, 
  spanTwo, 
  spanThree, 
  showImages = false,
  imgSrcOne, // Adding image source props
  imgSrcTwo, 
  imgSrcThree,
  useTripleRowWrapper = true,
  headColor = "inherit", // default color
  spanColor = "inherit", // default color // New prop to control the application of triplerowwrapper class
}) => (
  <div className=''>

      {mainheader && 
      <div className="triple py-24 flex ">
      <h1 className="text-6xl mainhead">We serve all kinds of clients and customers</h1>
      </div>
      }

  <div className={`grid grid-cols-3 z-10 relative triprowmob ${useTripleRowWrapper ? 'triplerowwrapper' : ''}`}>
    <div className="z-10 ">
        {showImages && <Image src={imgSrcOne} alt="Description for image 1"  height={150} width={150}/>}
      <h2 className="text-4xl font-bold	" style={{ color: headColor }}>{headOne}</h2>
      <span className="text-center" style={{ color: spanColor }}>{spanOne}</span>
    </div>
    <div>
        {showImages && <Image src={imgSrcTwo} alt="Description for image 2" height={150} width={150}/>}
      <h2 className="text-4xl font-bold	" style={{ color: headColor }}>{headTwo}</h2>
      <span style={{ color: spanColor }}>{spanTwo}</span>
    </div>
    <div>
        {showImages && <Image src={imgSrcThree} alt="Description for image 3"  height={150} width={150}/>}
      <h2 className="text-4xl font-bold	" style={{ color: headColor }}>{headThree}</h2>
      <span style={{ color: spanColor }}>{spanThree}</span>
    </div>
  </div>
  </div>
);

export default TripleRowBox;
