const CustomerBox =()=>{
    return (
    <div className="customers-wrapper flex flex-col justify-center items-center">
<h3 className="text-4xl font-bold mb-16">Who we serve</h3>
<div className="grid grid-cols-3">
    <div>
        <span>Icon here</span>
        <h4>Small to Medium Businesses</h4>
        <p>copy</p>
    </div>
    <div>
    <span>Icon here</span>
        <h4>Clubs and Small Organizations</h4>
        <p>copy</p>
    </div>
    <div>
    <span>Icon here</span>
        <h4>People who need pictures and videos!</h4>
        <p>copy</p>
    </div>
</div>
    </div>
    )
}

export default CustomerBox