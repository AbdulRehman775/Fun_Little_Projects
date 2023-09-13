import React, {useState,useEffect} from "react";
import hero from "./hero1.jpg";
import cyber from "./Cyber.jpg";
const Updater = () => {
    let array = [hero, cyber];
    const [update, setUpdate] = useState(0);
    useEffect(() => {
        const timer = setInterval(function () {
                if (update < 1) {
                    setUpdate(update + 1);
                    console.log(update);

                } else {
                    setUpdate(update - 1);
                    console.log(update);
                }
            } , 5000
        )
        return () => clearInterval(timer);
},[update] );
    return(
        <>
    <div className="text-control">
        <h2 className="fs-3 text-light">EDUCATION & SCHOOL</h2>
        <h2 className="text-light font-w fs-1">
            SHOWCASE COURSES, <br/> EVENTS AND MORE!
        </h2>
        <p className="fs-5 text-light">
            <br/> Lorem Ipsum is simply dummy text of the<br/> Lorem Ipsum has been the industry's standard
        </p>
        <br/>
            <button className="btn  text-center btn-success rounded-0 size  text-wrap "><span
                className="text-center text-wrap text-break"> Get Started Now </span></button>
    </div>
    <img className="heroine" src = {array[update]}/>
    </>
      );
    }

export default Updater;
