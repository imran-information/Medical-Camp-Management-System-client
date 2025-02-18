import Marquee from "react-fast-marquee";
import HealthCategories from "./HealthCategories";

const MarqueeSlider = () => {
    return (
        <div className="bg-primary py-3  text-white">
            <Marquee pauseOnHover={true} >
                <HealthCategories />
            </Marquee>
        </div>
    );
};

export default MarqueeSlider;