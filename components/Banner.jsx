import react from "react";
import styles from "../styles/Banner.module.css"

const Banner  =  (prop) => {
    return (
        <>
        <h1>Discover Your Favourite Coffee</h1>
        <h2>find Nearby Coffe shops</h2>
        <button
        onClick={prop.onClickHandlerBannerBtn}
        >{prop.bannerBtnText}</button>
        </>
    )
}


export default Banner