import Likovi from "./Likovi";
import ViseO from "./ViseO";
import Footer from "./Footer";
import slikaOne from "./Slike/padmeOne.jpg";
import slikaTwo from "./Slike/padmeTwo.jpg";
import slikaThree from "./Slike/padmeThree.jpg";

export default function LikJedanDeset(){
    let name = "Dooku";
    let species = "Human(Vampiric species)";
    let homeworld = "Serenno";
    let gender = "Male";
    let born = "102 BBY";
    let died = "19 BBY";
    let affiliation = "Jedi Order,Sith";
    let description = "Dooku, a Force-sensitive human male, was a Jedi Master that fell to the dark side of the Force and became the Dark Lord of the Sith Darth Tyranus during the final years of the Galactic Republic. After leaving the Jedi Order, he claimed the title Count of Serenno and, during the Clone Wars, served as Head of State of the Confederacy of Independent Systems. He was the second apprentice of Darth Sidious, the Dark Lord of the Sith whose plan to conquer the galaxy relied on Dooku leading a pan-galactic secessionist movement against the Republic. As such, Dooku immersed himself in the dark side and worked tirelessly to advance his and his master's plans, but ultimately forgot that treachery was the way of the Sith.";
    let actor = "Christopher Lee";
    let o = "Christopher Lee";
    let poveznica = "https://www.imdb.com/name/nm0000489/";
    let YouTube = "https://www.bing.com/videos/search?q=christopher+lee+youtube+starwars&qs=n&sp=-1&pq=christopher+lee+youtube+s&sc=0-25&sk=&cvid=2D37229419B6491E8A56A113D2432C11&ru=%2fsearch%3fq%3dchristopher%2blee%2byoutube%2bstarwars%26qs%3dn%26form%3dQBRE%26sp%3d-1%26pq%3dchristopher%2blee%2byoutube%2bs%26sc%3d0-25%26sk%3d%26cvid%3d2D37229419B6491E8A56A113D2432C11&view=detail&mmscn=vwrc&mid=7FA8AE8744A865FA961D7FA8AE8744A865FA961D&FORM=WRVORC";
    let Facebook = "https://www.facebook.com/realchristopherlee/";
    let Instagram = "/LikDvaDeset";
    let Wikipedia = "https://en.wikipedia.org/wiki/Christopher_Lee";
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