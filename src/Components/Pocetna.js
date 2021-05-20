import React from "react";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Naslovna from "./Naslovna";
import Djelovi from "./Djelovi";
import PrviDio from "./PrviDio";
import DrugiDio from "./DrugiDio";
import TreciDio from "./TreciDio";
import PrvaOrg from "./PrvaOrg";
import DrugaOrg from "./DrugaOrg";
import TrecaOrg from "./TrecaOrg";
import LikJedan from "./LikJedan";
import LikDva from "./LikDva";
import LikTri from "./LikTri";
import LikCetiri from "./LikCetiri";
import LikPet from "./LikPet";
import LikSest from "./LikSest";
import LikSedam from "./LikSedam";
import LikOsam from "./LikOsam";
import LikDevet from "./LikDevet";
import LikDeset from "./LikDeset";
import LikJedanDeset from "./LikJedanDeset";
import LikDvaDeset from "./LikDvaDeset";

export default function Pocetna(){
    return(
        <div>
            <Router>
                <Route exact path="/" component={Naslovna}></Route>
                <Route path="/Djelovi" component={Djelovi}></Route>
                <Route path="/PrviDio" component={PrviDio}></Route>
                <Route path="/DrugiDio" component={DrugiDio}></Route>
                <Route path="/TreciDio" component={TreciDio}></Route>
                <Route path="/PrvaOrga" component={PrvaOrg}></Route>
                <Route path="/DrugaOrg" component={DrugaOrg}></Route>
                <Route path="/TrecaOrg" component={TrecaOrg}></Route>
                <Route path="/LikJedan" component={LikJedan}></Route>
                <Route path="/LikDva" component={LikDva}></Route>
                <Route path="/LikTri" component={LikTri}></Route>
                <Route path="/LikCetiri" component={LikCetiri}></Route>
                <Route path="/LikPet" component={LikPet}></Route>
                <Route path="/LikSest" component={LikSest}></Route>
                <Route path="/LikSedam" component={LikSedam}></Route>
                <Route path="/LikOsam" component={LikOsam}></Route>
                <Route path="/LikDevet" component={LikDevet}></Route>
                <Route path="/LikDeset" component={LikDeset}></Route>
                <Route path="/LikJedanDeset" component={LikJedanDeset}></Route>
                <Route path="/LikDvaDeset" component={LikDvaDeset}></Route>
            </Router>
        </div>
    );
}