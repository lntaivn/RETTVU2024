
import "./map.css"
import map from "../imgs/map.jpg"

const Map = () => {

    return (
        <div className="map">
            <div className="map_layout">
                <div className="map_layout_banner">
                    <h1>CONFERENCE MAP</h1>
                </div>
                 

                <img src={map} alt="" />

                <div className="map_layout_contract">
                    <b>CONTACT US:</b><span> ret_conf@tvu.edu.vn</span>
                </div>
            </div>
          
        </div>
    )
}

export default Map;