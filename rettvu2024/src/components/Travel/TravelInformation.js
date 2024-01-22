import { Link } from "react-router-dom";
import "./TravelInformation.css";

const TravelInformation = () => {
    return (
        <div className="TravelInformation">
            <div className="TravelInformation_left">
                <div className="TravelInformation_item">
                    <h2>Ba Om Pond</h2>

                    <p>
                        Referring to Tra Vinh, people think of the land of
                        ancient Khmer temples and historical sites bearing many
                        legends and legends, associated with the journey to
                        explore and build the South. The thousand-year-old Ba Om
                        pond relic is one of the prides of the people here.
                    </p>
                    <div className="TravelInformation_item_img">
                        <img src="https://thamhiemmekong.com/wp-content/uploads/2020/06/aobaom-02.jpg" />
                    </div>
                    <span>Ba Om Pond – A Must-See in Tra Vinh</span>
                </div>
                <div className="TravelInformation_item">
                    <h2>Khmer Minority People’s Museum</h2>

                    <p>
                        Tra Vinh is a province in the Mekong Delta where many
                        Khmer ethnic people live. Therefore, this place has many
                        relics, architecture, and unique cultural beauty of the
                        Khmer people. The first is the Tra Vinh Museum of Khmer
                        Ethnic Culture – one of the two largest Khmer museums in
                        Vietnam.
                    </p>
                    <div className="TravelInformation_item_img">
                        <img src="https://mytourcdn.com/upload_images/Image/Quang%20Huy/bao%20tang/khmerNew%20Folder/IMG_6778.JPG" />

                    </div>
                    <span>Khmer Minority People’s Museum in Tra Vinh</span>
                </div>
                <div className="TravelInformation_item">
                    <h2>Ba Dong Beach</h2>

                    <p>
                        Ba Dong Beach is a famous scenic spot and tourist
                        destination in Tra Vinh. Ba Dong beach has a wild beauty
                        with sandy slopes stretching along the row of poplars
                        whispering in the wind, known as the most beautiful
                        beach in Tra Vinh.
                    </p>
                    <div className="TravelInformation_item_img">

                        <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/14/1068102/Bien-Ba-Dong-1.jpg" />
                    </div>
                    <span>Ba Dong Beach</span>
                </div>
            </div>

            <div className="TravelInformation_right">
                <div className="TravelInformation_item">
                    <h2>Latest News</h2>
                    <p>February 15th, 2024: </p>
                    <p>
                        The extension submission deadline (FIRM DEADLINE) for
                        CITA 2024.{" "}
                    </p>
                </div>
                <div className="TravelInformation_item">
                    <h2>Previous Conferences</h2>
                    <p>
                        <Link to="/ret-2023">RET 2023</Link>
                    </p>
                    <p>
                        <Link to="/ret-2022">RET 2022</Link>
                    </p>
                    <p>
                        <Link to="/ret-2021">RET 2021</Link>
                    </p>
                    <p>
                        <Link to="/ret-2020">RET 2020</Link>
                    </p>
                    <p>
                        <Link to="/ret-2019">RET 2019</Link>
                    </p>
                    <p>
                        <Link to="/ret-2018">RET 2018</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TravelInformation;
