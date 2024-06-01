
import { Link } from "react-router-dom";
import "./TravelInformation.css";
import { useContext } from "react";
import { DataStore } from "../Database";

const TravelNote = () => {

    const database = useContext(DataStore);
    const travelNoteTable = database?.travelNoteTable;

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
                    <div className="TravelInformation_item-plug">
                        <img src="https://firebasestorage.googleapis.com/v0/b/ret-tvu.appspot.com/o/RET%2FGroup%205.png?alt=media&token=a7956651-7e8a-42e1-9011-9c344663febd" alt=""/>
                        <img src="https://firebasestorage.googleapis.com/v0/b/ret-tvu.appspot.com/o/RET%2FGroup%206.png?alt=media&token=00c030c3-356e-4b3a-9c89-55c4fce720b8" alt=""/>
                    </div>
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
                        at <a href="https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/trang-chu-ttdt">https://evisa.xuatnhapcanh.gov.vn/en_US/web/guest/trang-chu-ttdt</a>

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
                    <p>Online booking can be made at <a href="https://futabus.vn/?lang=en-US">https://futabus.vn/?lang=en-US</a> at least one day before departure</p>
                    <p><strong>Thanh Thuy Bus:</strong>:</p>
                    <p>Tel: 08.39242526 – Address: 267 Tran Phu Street</p>
                    <p>District 5 – HCMC</p>
                    <p><strong>Kim Hoang Bus</strong>:</p>
                    <p>Tel: (028) 39.242.424</p>
                    <p>Address: 248 Tran Phu Street, Ward 8, District 5 – Ho Chi Minh City, District 5 – HCMC</p>
                    <p> From the airport to the bus station: Fare for taxi is around 350.000VND (17USD)/pax</p>
                    <p><strong>Accommodation</strong>:</p>

                    <div className="travel-note-table-info">
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
                        The invitation letter will be sent from the conference organization after you register and transfer the reserve fee successfully. It is noticed that the invitation letter may help but not guarantee you a visa.
                    </p>
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

export default TravelNote;
