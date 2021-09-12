import React from "react";
import EnterainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
// import Premier from "../components/Premier/premier.components";
import PosterSlider from "../components/PosterSlider/PosterSlider.components";
import PremierImage from "../config/TempPoster.config";

function Home() {
    return (
        <>
        <div className="flex flex-col bg-gray-200 px-20 w-full">

            <div className="p-10">
                <h1 className="text-2xl font-bold px-2">The Best of Entertainment</h1>
                <EnterainmentCardSlider />
            </div>

        </div>
        
        <div className="flex flex-col bg-navCol-750 px-20 pb-10">

            <div className="flex flex-col w-full h-full gap-2 px-10 py-4">
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="rupay" className="w-full h-full"/>
                {/* <Premier /> */}
                <PosterSlider images={PremierImage} title="Premiers" subtitle="Watch new movies at home, every Friday" isDark={true} />
            </div>

        </div>

        <div className="flex flex-col bg-gray-200 px-20">
            <PosterSlider images={PremierImage} title="Online Streaming Events" isDark={false} />
        </div>
        </>
    );
}

export default Home;