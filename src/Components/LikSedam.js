import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/mundiOne.jpg";
import slikaTwo from "./Slike/mundiTwo.jpeg";
import slikaThree from "./Slike/mundiThree.jpg";

export default function LikSedam(){
    let name = "Ki-Adi-Mundi";
    let species = "Cerean";
    let homeworld = "Cerea";
    let gender = "Male";
    let born = "92 BBY";
    let died = "19 BBY";
    let affiliation = "Jedi Order";
    let description = "Ki-Adi-Mundi, a Force-sensitive Cerean male, was a Jedi Master and member of the Jedi High Council during the last years of the Galactic Republic. By the time of the Clone Wars, Mundi became a Jedi General of the Grand Army of the Republic. Like his Jedi colleagues, he led the Republic clone troopers against the Separatist Alliance forces in several battles across the galaxy, including the first and second campaign on Geonosis and the Outer Rim Sieges. In 19 BBY, the third and final year of the war, Mundi oversaw the Republic invasion of Mygeeto with the 21st Nova Corps under his command. During the campaign, Supreme Chancellor Sheev Palpatine instructed the Grand Army soldiers to execute their Jedi leaders in accordance with Order 66, an act which resulted in the death of Mundi along with the majority of the Jedi Order.";
    let actor = "Silas Carson";
    let o = "Silas Carson";
    let poveznica = "https://www.imdb.com/name/nm0141324/";
    let Instagram = "/LikSedam";
    let Facebook = "/LikSedam";
    let YouTube = "https://www.youtube.com/watch?v=IqrN5oPM_tc";
    let Wikipedia = "https://en.wikipedia.org/wiki/Silas_Carson";
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