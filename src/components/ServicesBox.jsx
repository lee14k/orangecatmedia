import TripleRowBox from "./TripleRowBox";

const services = [
    {
        title: "Title 1",
        description: "Description 1",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Title 2",
        description: "Description 2",
        image: "https://via.placeholder.com/150"
    },
    {
        title: "Title 3",
        description: "Description 3",
        image: "https://via.placeholder.com/150"
    }
];

const ServicesBox = ({ services }) => {
    return (
        <div className="services">
            <h1>Big or small, we serve all!</h1>
            <TripleRowBox
                headOne={services[0].title}
                spanOne={services[0].description}
                imgSrcOne={services[0].image}
                headTwo={services[1].title}
                spanTwo={services[1].description}
                imgSrcTwo={services[1].image}
                headThree={services[2].title}
                spanThree={services[2].description}
                imgSrcThree={services[2].image}
                showImages={true}/>
        </div>
    );
    }

    export default ServicesBox