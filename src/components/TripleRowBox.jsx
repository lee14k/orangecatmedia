const TripleRowBox = ({ 
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
  useTripleRowWrapper = true // New prop to control the application of triplerowwrapper class
}) => (
  <div className={`grid grid-cols-3 z-10 relative ${useTripleRowWrapper ? 'triplerowwrapper' : ''}`}>
    <div className="z-10 ">
        {showImages && <img src={imgSrcOne} alt="Description for image 1" />}
      <h2 className="text-4xl">{headOne}</h2>
      <span>{spanOne}</span>
    </div>
    <div>
        {showImages && <img src={imgSrcTwo} alt="Description for image 2" />}
      <h2 className="text-4xl">{headTwo}</h2>
      <span>{spanTwo}</span>
    </div>
    <div>
        {showImages && <img src={imgSrcThree} alt="Description for image 3" />}
      <h2 className="text-4xl">{headThree}</h2>
      <span>{spanThree}</span>
    </div>
  </div>
);

export default TripleRowBox;
