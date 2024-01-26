import { Link } from "react-router-dom";
import "./TravelInformation.css";

const TravelInformation = () => {
    return (
        <div className="TravelInformation">
            <div className="TravelInformation_left">
                <div className="TravelInformation_item">
                    <div className="TravelInformation_item">
                        <h2>Uncle Ho Temple</h2>

                        <p>
                            Uncle Ho Temple “Heart construction”, a symbol of Tra
                            Vinh people love for President Ho Chi Minh, is a
                            national historical vestige, a famous tourism cultural
                            address located at Vinh Hoi hamlet, Long Duc commune,
                            Tra Vinh city. It’s about 5Km far from Tra Vinh city
                            center, toward the South North.
                        </p>
                        <p>
                            The vestige is 5.4 ha wide with main items like Uncle
                            Temple, display house, green trees, pond, entertainment
                            zone… and Uncle stilt house model designed with the rate
                            of 97% original stilt house of Uncle Ho stilt at Ha Noi
                            capital.
                        </p>
                        <div className="TravelInformation_item_img">
                            <img src="https://dulichtravinh.com.vn/wp-content/uploads/2021/01/6f16f20a4f3b8d65d42a.jpg" alt=""/>
                        </div>
                        <span>Uncle Ho Temple</span>
                    </div>
                    <h2>Ba Om Pond</h2>

                    <p>
                        Referring to Tra Vinh, people think of the land of
                        ancient Khmer temples and historical sites bearing many
                        legends and legends, associated with the journey to
                        explore and build the South. The thousand-year-old Ba Om
                        pond relic is one of the prides of the people here.
                    </p>
                    <div className="TravelInformation_item_img">
                        <img src="https://thamhiemmekong.com/wp-content/uploads/2020/06/aobaom-02.jpg" alt=""/>
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
                        <img src="https://mytourcdn.com/upload_images/Image/Quang%20Huy/bao%20tang/khmerNew%20Folder/IMG_6778.JPG" alt=""/>
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
                        <img src="https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/7/14/1068102/Bien-Ba-Dong-1.jpg" alt=""/>
                    </div>
                    <span>Ba Dong Beach</span>
                </div>
            </div>

            <div className="TravelInformation_right">
                <div className="Committee_item">
                    <h2>Previous Conferences</h2>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/program">RET 2023</Link>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2022">RET 2022</Link>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2021">RET 2021</Link>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2020">RET 2020</Link>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2019">RET 2019</Link>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                    <p>
                        <Link to="https://sites.google.com/tvu.edu.vn/ret/history/ret-2018">RET 2018</Link>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TravelInformation;
