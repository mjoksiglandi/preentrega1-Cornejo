import cosplay from "../assets/images/cosplay.jpg";
import props from "../assets/images/props.jpg";
import wild from "../assets/images/wild.jpg";

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${cosplay})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:480
                , marginRight:20}}>
                    <span className="bg-black text-white text-uppercase px-3 py-2"style={{alignSelf: 'flex-end'}}>Cosplay</span>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${props})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:480}}>
                    <span className="bg-black text-white text-uppercase px-3 py-2" style={{alignSelf: 'flex-end'}}>Props</span>
                    <p></p>
                </div>
                <div className="col d-flex align-items-center justify-content-center" style={{backgroundImage:`url(${wild})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", opacity:0.9, height:480, marginLeft:20}}>
                    <span className="bg-black text-white text-uppercase px-3 py-2" style={{alignSelf: 'flex-end'}}>Wild</span>
                </div>
            </div>
        </div>
    )
}

export default Banner;