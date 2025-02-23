import Marquee from "react-fast-marquee";
import HealthCategories from "./HealthCategories";

const MarqueeSlider = () => {
    return (
        <div className="bg-primary dark:bg-neutral-900 py-3 ">
            <Marquee pauseOnHover={true} >
                <HealthCategories />
            </Marquee>
        </div>
    );
};

export default MarqueeSlider;