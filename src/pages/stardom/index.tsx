import Banner from "components/home/banner";
import Carousel from "components/home/carousel";
import Companies from "components/home/companies";
import MidText from "components/home/mid-text";
import Products from "components/home/product";
import RunningText from "components/home/running-text";
import Salon from "components/home/cards";
import Service from "components/home/service";
import { useAppState } from "lib/context/app";

export default function Stardom() {
    return (
        <div className="flex flex-col gap-y-2.5 ">
            <Banner brand="stardom" />
            <RunningText
                images={[
                    "phytomer",
                    "lumenis",
                    "bodyography",
                    "ionto",
                    "cuccio",
                    "orly",
                    "hantesis",
                    "christina",
                    "lpg",
                    "woody",
                    "gigi",
                    "goli",
                    "byebyeblemish",
                ]}
            />
            <Salon brand="stardom" />
            <MidText brand="stardom" />
            <Products brand="stardom" />
            <Service brand="stardom" />
            <Companies />
            <Carousel brand="stardom" />
        </div>
    );
}
