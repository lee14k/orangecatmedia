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
  imgSrcThree 
}) => (
  <div className="grid grid-cols-3">
    <div>
        {showImages && <img src={imgSrcOne} alt="Description for image 1" />}
      <h2>{headOne}</h2>
      <span>{spanOne}</span>
    </div>
    <div>
        {showImages && <img src={imgSrcTwo} alt="Description for image 2" />}
      <h2>{headTwo}</h2>
      <span>{spanTwo}</span>
    </div>
    <div>
        {showImages && <img src={imgSrcThree} alt="Description for image 3" />}
      <h2>{headThree}</h2>
      <span>{spanThree}</span>
    </div>
  </div>
);
export default TripleRowBox;