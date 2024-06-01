import { Link, useLocation } from "react-router-dom";
import { getContact } from "../../service/DataService";
import { useEffect, useState } from "react";

const ContactUs = () => {

    const [contacts, setContacts] = useState([]);

    const handleGetSpeakers = async () => {
        try {
            const response = await getContact();
            setContacts(response.data);
        } catch (error) {
        }
    };

    useEffect(() => {
        handleGetSpeakers();
    }, []);

    return (
        <div className="ContactUs">
            <div className="Contact_left">
                <div className="contact_item">
                    <h2>Contact Us</h2>
                    {
                        contacts.map((cont, index) => {
                            return (
                                <div className="Contact-Card">
                                    <h3>{cont.name}</h3>
                                    <div className="Contact-Card-item">
                                        <i class="fa-solid fa-phone"></i>
                                        <p>{cont.tel}</p>
                                    </div>
                                    <div className="Contact-Card-item">
                                        <i class="fa-solid fa-envelope"></i>
                                        <p>{cont.email}</p>
                                    </div>
                                    <div className="Contact-Card-item">
                                        <i class="fa-solid fa-clock"></i>
                                        <p>{cont.working_hours}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="contact_image">
                    <img src="https://www.tvu.edu.vn/wp-content/uploads/2021/12/anh-4.jpg"></img>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
