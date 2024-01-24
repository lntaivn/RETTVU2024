import { Link } from "react-router-dom";
import "./TravelInformation.css";
const travelNoteTable = [
    {
        Name: "Nha khach Tra Vinh (Tra Vinh guest house)",
        Address: "25 Vo Nguyen Giap, Tp. Tra Vinh, tinh Tra Vinh",
        tel: "074 246 0001",
        Room: "600.000 (30USD) - 1.500.000 (75USD) Breakfast included"
    },
    {
        Name: "Thanh Binh Hotel 1",
        Address: "199 Nguyen Thi Minh Khai, phuong 7, tp. Tra Vinh, tinh Tra Vinh",
        tel: "074 6266 789",
        Room: "300.000 (15USD) - 500.000 (25USD)"
    },
    {
        Name: "Thanh Binh Hotel 2",
        Address: "199 Nguyen Thi Minh Khai, phuong 7, tp. Tra Vinh, tinh Tra Vinh",
        tel: "074 6260 999 - 0946 478 567",
        Room: "300.000 (15USD) - 450.000 (22USD)"
    },
    {
        Name: "Cuu Long Hotel",
        Address: "210 Nguyen Thi Minh Khai, phuong 7, tp. Tra Vinh, tinh Tra Vinh",
        tel: "074 3862 615 - 074 3866 867",
        Room: "400.000 (20USD) - 1.100.000 (55USD) Breakfast included"
    },
];

const TravelNote = () => {
    return (
        <div className="TravelInformation">
            <div className="TravelInformation_left">
                <div className="TravelInformation_item">
                    <h2>Conference Venue</h2>

                    <p>
                        Administration Building, Campus 1, Tra Vinh University.
                    </p>
                </div>
                <div className="TravelInformation_item">
                    <h2>Travel notes</h2>

                    <p>
                        <strong>Currency</strong>: The official currency in
                        Vietnam is Vietnam Dong (VND). Few hotels and shops
                        accept, so cash is also necessary. There are now few
                        ATMs accepting international cards. Please note that
                        most ATMs charge a fee of approximately US$4 for use of
                        international cards.
                    </p>
                    <p>
                        <strong>Language</strong>: Vietnamese is the official
                        language.
                    </p>
                    <p>
                        <strong>Electricity</strong>: Electricity used in
                        Vietnam is 220v-50Hz. The types of plug are A and C (as
                        pictures below)
                    </p>
                    <p>
                        <strong>Food</strong>: Vietnamese food is popular with
                        foreigners.
                    </p>
                    <p>
                        <strong>Weather</strong>: The weather is hot and rainy
                        during August. Though the temperature is quite high,
                        sudden rains that often last for few minutes somehow
                        make atmosphere cooler and refresh the city. Average
                        temperature: 32<sup>o</sup>C.
                    </p>
                    <p>
                        <strong>Visa</strong>: Visas are required for most
                        foreign nationals. More information for visa application
                        at
                        https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/trang-chu-ttdt
                    </p>
                    <p>
                        <strong>By plane</strong>: Tan Son Nhat International Airport (SGN)
                        offers international flights to and from a number of
                        destinations including Bangkok, Australia, United
                        States, Kuala Lumpur, Taipei, Hong Kong and Singapore
                        among others.
                    </p>
                    <p>
                        <strong>By bus</strong>: Overland travel is possible from Cambodia and Laos.
                    </p>
                    <p>
                        There are 03 bus companies:
                    </p>
                    <p><strong>Phuong Trang Bus</strong>: (recommended)</p>
                    <p>Tel: 19006067 – Address: 190 Le Hong Phong District 5 – HCMC</p>
                    <p>Online booking can be made at https://futabus.vn/?lang=en-US at least one day before departure</p>
                    <p><strong>Thanh Thuy Bus:</strong>:</p>
                    <p>Tel: 08.39242526 – Address: 267 Tran Phu Street</p>
                    <p>District 5 – HCMC</p>
                    <p><strong>Kim Hoang Bus</strong>:</p>
                    <p><strong></strong>:</p>
                    <p>Tel: (028) 39.242.424</p>
                    <p>Address: 248 Tran Phu Street, Ward 8, District 5 – Ho Chi Minh City, District 5 – HCMC</p>
                    <p> From the airport to the bus station: Fare for taxi is around 350000VND (17USD)/pax</p>
                    <p><strong>Accommodation</strong>:</p>
                    <div>
                        <table className="travel-note-table">
                            <thead>
                                <tr>
                                    <th className="travel-note-table__header">Name</th>
                                    <th className="travel-note-table__header">Address</th>
                                    <th className="travel-note-table__header">Telephone</th>
                                    <th className="travel-note-table__header">Room</th>
                                </tr>
                            </thead>
                            <tbody>
                                {travelNoteTable.map((hotel, index) => (
                                    <tr key={index}>
                                        <td className="travel-note-table__cell">{hotel.Name}</td>
                                        <td className="travel-note-table__cell">{hotel.Address}</td>
                                        <td className="travel-note-table__cell">{hotel.tel}</td>
                                        <td className="travel-note-table__cell">{hotel.Room}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="TravelInformation_item">
                    <h2>Invitation Letter</h2>

                    <p>
                        he invitation letter will be sent from the conference organization after you register and transfer the reserve fee successfully. It is noticed that the invitation letter may help but not guarantee you a visa.
                    </p>
                </div>
            </div>

            <div className="TravelInformation_right">
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

export default TravelNote;