import { Link, useLocation } from "react-router-dom";

const ContactUs = () => {
    return (
        <div className="ContactUs">
            <div className="Contact_left">
                <div className="contact_item">
                    <h2>Contact Us</h2>
                    <div className="Contact-Card">
                        <h3>Dr. Nguyen Nhut Lam</h3>
                        <div className="Contact-Card-item">
                            <i class="fa-solid fa-phone"></i>
                            <p>Tel: +84-2943.855.246 (Ext: 182)</p>
                        </div>
                        <div className="Contact-Card-item">
                            <i class="fa-solid fa-envelope"></i>
                            <p>Email: lamnn@tvu.edu.vn</p>
                        </div>
                        <div className="Contact-Card-item">
                            <i class="fa-solid fa-clock"></i>
                            <p>Working hours: 8-11am, 2-4:30pm (GMT+7)</p>
                        </div>
                    </div>
                    <div className="Contact-Card">
                        <h3>Ms. Trinh Thi Anh Duyen</h3>
                        <div className="Contact-Card-item">
                            <i class="fa-solid fa-phone"></i>
                            <p>Tel: +84-2943.855.246 (Ext: 203)</p>
                        </div>
                        <div className="Contact-Card-item">
                            <i class="fa-solid fa-envelope"></i>
                            <p>Email: ret_conf@tvu.edu.vn</p>
                        </div>
                        <div className="Contact-Card-item">
                            <i class="fa-solid fa-clock"></i>
                            <p>Working hours: 8-11am, 2-4:30pm (GMT+7)</p>
                        </div>
                    </div>
                </div>
                <div className="contact_image">
                    <img src="https://www.tvu.edu.vn/wp-content/uploads/2021/12/anh-4.jpg"></img>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
