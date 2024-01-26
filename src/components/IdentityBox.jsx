import Image from "next/image";
const IdentityBox = () => {
    return (
        <div className="identity-box mx-16 flex flex-col justify-center items-center">
            <div >
                <div className="iconboxone">
                <Image
                src="/blueup.png"
                height={300}
                width={300}
                />
                </div>
                <h2 className="text-4xl mx-48 font-bold">We are a team based in the UP of Michigan dedicated to providing businesses with the best photo, video, website, & social media</h2>
                <div className="text-center">
          
                </div>
            </div>
            <div className="iconboxtwo">
                <Image
                src="/bluepaw.png"
                height={200}
                width={200}
                />
                </div>
        </div>
    );
};

export default IdentityBox;