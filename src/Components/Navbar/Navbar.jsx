import React from 'react'
import './Navbar.css'
import backgroundImage from '../../assets/background.webp'
import search from '../../assets/search.jpg'
import balkanLine from '../../assets/BalkanLine.jpg'
import brave from '../../assets/Brave.jpg'
import dom from '../../assets/DOM.jpg'
import fourth from '../../assets/FourWarriors.jpg'
import g20 from '../../assets/G20.jpg'
import inthe from '../../assets/InTheDesert.jpg'
import pancho from '../../assets/PanchoVilla.jpeg'
import resent from '../../assets/Recent.jpeg'
import venom from '../../assets/Venom.jpg'
import photo from '../../assets/photo.webp'
import girls from '../../assets/girls.jpg'
import youtube from '../../assets/youtube.webp'
import tw from '../../assets/tw.webp'
import fb from '../../assets/fb.jpg'
import insta from '../../assets/insta.webp'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='background-container'>
            <img src={backgroundImage} alt='background' className='background-img'/>
            <div className='text-overlay'>
                <div className="Home">Home</div>
                <div className="Home">TV Shows</div>
                <div className="Home">Movies</div>
                <div className="Home">New & Popular</div>
                <div className="Home">My List</div>
                <div className="Home">Browse By Languages</div>
            </div>
            <img src={search} alt="search" className="search-icon" />
            <div className="box1">Play</div>
            <div className="box2">More Info</div>
        </div>

        <div className="popupar"><div className="text">Popular on SG Films</div>
            <div className="box3">
                <div className="box4">
                    <div className="img"> <img src={backgroundImage} alt="background" className="i1" /></div>
                    <div className="img"> <img src={balkanLine} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={dom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={fourth} alt="background" className="i1" /></div>
                    <div className="img"> <img src={photo} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                    <div className="img"> <img src={pancho} alt="background" className="i1" /></div>
                    <div className="img"> <img src={resent} alt="background" className="i1" /></div>
                    <div className="img"> <img src={venom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={girls} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                </div>
                
            </div>
        </div>


        <div className="popupar"><div className="text">Blockbuster Movies</div>
            <div className="box3">
                <div className="box4">
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={girls} alt="background" className="i1" /></div>
                    <div className="img"> <img src={venom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={resent} alt="background" className="i1" /></div>
                    <div className="img"> <img src={pancho} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={photo} alt="background" className="i1" /></div>
                    <div className="img"> <img src={fourth} alt="background" className="i1" /></div>
                    <div className="img"> <img src={dom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={balkanLine} alt="background" className="i1" /></div>
                    <div className="img"> <img src={backgroundImage} alt="background" className="i1" /></div>
                </div>
                
            </div>
        </div>

        <div className="popupar"><div className="text">Only on SG Films</div>
            <div className="box3">
                <div className="box4">
                    <div className="img"> <img src={backgroundImage} alt="background" className="i1" /></div>
                    <div className="img"> <img src={balkanLine} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={dom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={fourth} alt="background" className="i1" /></div>
                    <div className="img"> <img src={photo} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                    <div className="img"> <img src={pancho} alt="background" className="i1" /></div>
                    <div className="img"> <img src={resent} alt="background" className="i1" /></div>
                    <div className="img"> <img src={venom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={girls} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                </div>
                
            </div>
        </div>


        <div className="popupar"><div className="text">Upcoming</div>
            <div className="box3">
                <div className="box4">
                    <div className="img"> <img src={backgroundImage} alt="background" className="i1" /></div>
                    <div className="img"> <img src={balkanLine} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={dom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={fourth} alt="background" className="i1" /></div>
                    <div className="img"> <img src={photo} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                    <div className="img"> <img src={pancho} alt="background" className="i1" /></div>
                    <div className="img"> <img src={resent} alt="background" className="i1" /></div>
                    <div className="img"> <img src={venom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={girls} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                </div>
                
            </div>
        </div>


        <div className="popupar"><div className="text">Top Pics for you</div>
            <div className="box3">
                <div className="box4">
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={dom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={venom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                    <div className="img"> <img src={dom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={resent} alt="background" className="i1" /></div>
                    <div className="img"> <img src={venom} alt="background" className="i1" /></div>
                    <div className="img"> <img src={girls} alt="background" className="i1" /></div>
                    <div className="img"> <img src={brave} alt="background" className="i1" /></div>
                    <div className="img"> <img src={g20} alt="background" className="i1" /></div>
                    <div className="img"> <img src={inthe} alt="background" className="i1" /></div>
                </div>
                
            </div>
        </div>

        <div className="black">
            <div className="social">
                <img src={youtube} alt="youtube" className="social-icon" />
                <img src={tw} alt="twitter" className="social-icon" />
                <img src={fb} alt="facebook" className="social-icon" />
                <img src={insta} alt="instagram" className="social-icon" /> 
            </div>
            <div className="abox">
                <div className="boxf">Audio Description</div>
                <div className="boxs">investor Relations</div>
                <br />
                <div className="boxt">Legal Notices</div>
            </div>
            <div className="abox">
                <div className="boxf">Help center</div>
                <div className="boxs">Jobs</div><br />
                <div className="boxt">Cookie Preferences</div>
            </div>
            <div className="abox">
                <div className="boxf">Gift Cards</div>
                <div className="boxs">Terms of Use</div><br />
                <div className="boxt">Corporate Information</div>
            </div>
            <div className="abox">
                <div className="boxf">Media center</div>
                <div className="boxs">Privacy</div><br />
                <div className="boxt">Contact Us</div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Navbar