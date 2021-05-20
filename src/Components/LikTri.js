import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/maulOne.jpg";
import slikaTwo from "./Slike/maulTwo.jpg";
import slikaThree from "./Slike/maulThree.jpg";

export default function LikTri(){
    let name = "Darth Maul";
    let species = "Dathomirian-Zabrak";
    let homeworld = "Dathomir";
    let gender = "Male";
    let born = "54 BBY";
    let died = "0 BBY";
    let affiliation = "Trade Federation,Sith";
    let description = "Darth Maul was a Force-sensitive male Dathomirian Zabrak Dark Lord of the Sith who lived during the waning years of the Galactic Republic and during the early years of the reign of the Empire. Originally a Dathomiri Nightbrother born on Iridonia and known only as Maul, the infant Maul was given by his Nightsister mother to the Sith Lord Darth Sidious, who trained him in the ways of the dark side of the Force as his secret apprentice on a secret Mustafar training facility, along with the help of a split personality droid. Maul became a master of lightsaber combat and Teräs Käsi, wielding a red-bladed saberstaff against any adversary. Though well trained in the ways of the Sith and a Sith assassin rather than a full apprentice, Maul was technically a violation of the Rule of Two because his own Master was at the time apprenticed to another, the Muun Sith Lord Darth Plagueis. Plagueis, however, was fully aware of Maul's existence, and supported Sidious's decision to train him. The primary reason for Plagueis's support, despite the violation of the Rule of Two, was that Maul was trained to be expendable. As an assassin, he could perform high priority, boots-on-the-ground missions for the Sith without running the risk of exposing either Plagueis or Sidious should he fail.";
    let actor = "Ray Park";
    let o = "Ray Park";
    let poveznica = "https://www.imdb.com/name/nm0661917/";
    let Instagram = "https://www.instagram.com/iamraypark";
    let Facebook = "/LikTri";
    let YouTube = "https://www.bing.com/videos/search?q=ray+park+youtube&docid=608021739755168045&mid=EE6C9B0D3BD177C5189DEE6C9B0D3BD177C5189D&view=detail&FORM=VIRE";
    let Wikipedia = "https://en.wikipedia.org/wiki/Ray_Park";
    return(
        <div>
            <Likovi Name={name} Gender={gender} Species={species} Actor={actor} Homeworld={homeworld} Born={born} Died={died} Affiliation={affiliation} Description={description} SlikaJedan={slikaOne} SlikaDva={slikaTwo} SlikaTri={slikaThree}/>
            <ViseO 
                    vise={o}
                    sluzbeno={poveznica} 
                    instagram={Instagram} 
                    facebook={Facebook}
                    youtube={YouTube}
                    wikipedia={Wikipedia}
            />
            <Footer/>
        </div>
        );
}