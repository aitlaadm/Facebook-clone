import React from 'react'
import me from './footer_img/AITLAADIK.png'
import CopyrightIcon from '@material-ui/icons/Copyright';
import PhoneIcon from '@material-ui/icons/Phone';
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <img src={me} alt='AIT LAADIK MOHAMED' />
            <div className='apropos'>
                <h2>Qui suis-je ?</h2>
                <p>AIT LAADIK Mohamed, étudiant en MIAGE à l'Université Grenoble Alpes<br />
                         passioné par le développement web que ce soit du back-end ou front-end.<br /> dernièrement je me suis lancé un challenge où je me défis moi meme.<br /> ce défis consiste à développé un clone des plus grands applications et sitesweb mondiales comme amazon, Facebook, Netflix, etc...<br /> comme celui où vous etes en ce moment !<br /> c'est le clone Facebook   </p>
            </div>
            <div className='contact'>
                <h2>Contact</h2>
                <div className='social'>
                    <PhoneIcon fontSize="meduim" style={{ color: "white" }} /><span> +33 7 52 37 56 57</span>
                </div>
                <div className='social'>
                    <a href="mailto:mohamed.aitlaadik@gmail.com"><img src='https://www.universfreebox.com/wp-content/uploads/2020/09/gmail-une-800x450-c-default.jpg' alt='gmail' /></a>
                </div>
                <div className='social'>
                    <a href="github.com/aitlaaadm"><img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' alt='github' /></a>
                </div>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/mohamed-ait-laadik-80b57391/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png' alt='linkedIn' /></a>
                </div>
            </div>
            <div className='copyright'>
                <CopyrightIcon fontSize="small" />
                    AIT LAADIK 2021
                </div>
        </div >
    )
}

export default Footer;
