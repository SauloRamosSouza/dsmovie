import {ReactComponent as GitHubIcon} from 'assets/img/icon.svg';
import './style.css';

function Navbar(){

    return(
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>DSMovie</h1>
                    <a href="http://github.com/SauloRamosSouza/">
                        <div className='dsmovie-contact-container'>
                        <GitHubIcon width={32} height={32}/>
                        <p className='dsmovie-contact-link'>/SauloRamosSouza</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;