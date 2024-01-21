import { Link } from "react-router-dom";
import "./About.css";
import { Carousel, Collapse } from "antd";

const About_content = [
    {
        Text: "The International Conference on Research in Engineering and Technology (RET) is held annually at Tra Vinh University. The conference is a forum for researchers to present and exchange ideas in the fields of Information Technology, Electrical and Electronic Engineering, Automation, Mechanical Engineering, Automotive Engineering, Civil Engineering, AI applications. Tra Vinh University welcomes potential authors to submit research papers to RET and share their latest research findings and valuable experiences with other engineers, scientists, and scholars around the world."
    }
];

 

const About = () => {
    return (
        <>
            <Carousel autoplay>
                <div className="Slide-img">
                    <img
                        src="https://www.tvu.edu.vn/wp-content/uploads/2022/01/TVUXuan2022_1.jpg"
                        alt=""
                    />
                </div>
                <div className="Slide-img">
                    <img
                        src="https://www.tvu.edu.vn/wp-content/uploads/2021/12/anh1.jpg"
                        alt=""
                    />
                </div>
                <div className="Slide-img">
                    <img
                        src="https://image.bnews.vn/MediaUpload/Org/2020/06/15/trung-tam-hoc-lieu-tvu.jpg"
                        alt=""
                    />
                </div>
            </Carousel>

            <div className="About">
                <div className="About_content">
                    <div  className="About_content_text" >
                        <h2>
                             About Tra Vinh University
                        </h2>
                        The International Conference on Research in Engineering
                        and Technology (RET) is held annually at Tra Vinh
                        University. The conference is a forum for researchers to
                        present and exchange ideas in the fields of Information
                        Technology, Electrical and Electronic Engineering,
                        Automation, Mechanical Engineering, Automotive
                        Engineering, Civil Engineering, AI applications. Tra
                        Vinh University welcomes potential authors to submit
                        research papers to RET and share their latest research
                        findings and valuable experiences with other engineers,
                        scientists, and scholars around the world.
                    </div>
                    <div className="About_content_topics">
                        <h2>
                            The topics of the conference include, but are not
                            limited to:
                        </h2>
                        <p>- Information Technology</p>
                        <p>- Electrical and Electronics Engineering</p>
                        <p>- Automation Control Engineering</p>
                        <p>- Civil Engineering</p>
                        <p>- Mechanical Engineering</p>
                        <p>- Automotive Engineering</p>
                        <p>- Optical Electronics</p>
                        <p>- AI Applications</p>
                    </div>
                </div>
                <div className="About_image">
                    <img
                        src="https://reviewedu.net/wp-content/uploads/2021/10/159839653_3724976647552257_3313842260640766887_n.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="About_Important_Date">
                <h1>Important dates:</h1>
                <div className="import_date">
                    <div className="About_content_layout">
                        <div className="import_date_icon"><i class="fa-solid fa-calendar-days"></i></div> 
                        <div className="ACL-flex">
                            <h2>21,22.06.2024</h2>
                            <h3>Extended to</h3>
                        </div>
                    </div>
                    <div className="About_content_layout">           
                        <div className="import_date_icon"><i class="fa-solid fa-calendar-days"></i></div>           
                        <div className="ACL-flex">
                            <h2>12.05.2024</h2>
                            <h3>Submission deadline</h3>
                        </div>
                    </div>
                    <div className="About_content_layout">
                        <div className="import_date_icon"><i class="fa-solid fa-calendar-days"></i></div>  
                        <div className="ACL-flex">
                            <h2>21,22.06.2024</h2>
                            <h3>Conference dates</h3>
                        </div>
                    </div>
                    <div className="About_content_layout">            
                        <div className="import_date_icon"><i class="fa-solid fa-calendar-days"></i></div>  
                        <div className="ACL-flex">
                            <h2>06.06.2024</h2>
                            <h3>Acceptance notification</h3>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="Speakers_tital">
                <h1> Keynote Speakers</h1>
            </div>
            <div className="Speakers">   
                <div className="Speakers_item">
                    <div className="Speakers_item_img">
                        <img
                            src="https://www.jaist.ac.jp/~ogata/ogata.png"
                            alt=""
                        />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>
                        Keynote 1: Security Protocol Model Checking based on
                        Algebraic Specifications
                    </p>
                </div>
                <div className="Speakers_item">
                    <div className="Speakers_item_img">
                        <img
                            src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png"
                            alt=""
                        />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>
                        Keynote 1: Security Protocol Model Checking based on
                        Algebraic Specifications
                    </p>
                </div>
                <div className="Speakers_item">
                    <div className="Speakers_item_img">
                        <img
                            src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png"
                            alt=""
                        />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>
                        Keynote 1: Security Protocol Model Checking based on
                        Algebraic Specifications
                    </p>
                </div>
                <div className="Speakers_item">
                    <div className="Speakers_item_img">
                        <img
                            src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png"
                            alt=""
                        />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>
                        Keynote 1: Security Protocol Model Checking based on
                        Algebraic Specifications
                    </p>
                </div>
                <div className="Speakers_item">
                    <div className="Speakers_item_img">
                        <img
                            src="https://isds.ctu.edu.vn/2023/images/upload/keynotes/masayuki_fukuzawa.png"
                            alt=""
                        />
                    </div>
                    <h3>Kazuhiro Ogata</h3>
                    <span>Professor</span>
                    <p>
                        Keynote 1: Security Protocol Model Checking based on
                        Algebraic Specifications
                    </p>
                </div>
            </div>

            <div className="Submission_Guideline_tital">
                <h1> Submission Guidelines</h1>
            </div>
            <div className="Submission_Guideline">
                <div className="Submission_Guideline_header">
                    <p>
                        Full papers should be with at least 4 pages, but not
                        exceed 10 pages. All papers are required to adopt the <Link  to='https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/conference-template-a4.docx'> IEEE template </Link>
                        format in English.
                    </p>
                    <p>
                        Prospective authors are kindly invited to submit
                        full-text papers including results, tables, figures, and
                        references.
                    </p>
                </div>

                <div className="Submission_Guideline_body">
                    <ul>
                        <li>All submitted papers should be the original ones and must not be considered elsewhere for under review or publication.</li>
                        <li>Full-text papers (pdf only) should be submitted to the conference via the EasyChair system ( https://easychair.org/conferences/?conf=tvu-ret2024 ) for peer-reviewed by the conference committee.</li>
                        <li> Accepted full papers will be presented onsite at the conference and published in the conference proceedings with the ISBN index. (Papers published in the proceedings must be presented by at least one author at the conference).</li>
                        <li>Excellent papers will be recommended to publish on The Scientific Journal of Tra Vinh University; ISSN: 2815-6072; E-ISSN: 2815-6099 or other Journals (if any).</li>
                        <li> RET is respectful of the rights of authors and therefore we are intolerant of plagiarism. Manuscripts are expected to contain original work and should be cited adequately, properly, and academically. Consequently, the overall similarity rate of a manuscript should not exceed 30 percent, and the similarity rate to a single source should not exceed 15 percent.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default About;
