import Header from "../components/header";
import Card from "../components/card";
import Todocontainer from "../components/todocontainer";
import { useLocation } from "react-router-dom";

function Landing() {
    var data = useLocation()
    return (
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <Header name={data.state.user}></Header>
                <div className="flex justify-between flex-wrap gap-7 my-5">
                    <Card bgcolor={"#8272DA"} title={"23°"} subtitle={"Chennai"}></Card>
                    <Card bgcolor={"#FD6663"} title={"September"} subtitle={"10:12:08"}></Card>
                    <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
                </div>
                <Todocontainer></Todocontainer>
            </div>
        </div>
    )
}

export default Landing