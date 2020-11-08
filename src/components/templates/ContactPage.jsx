import React from 'react';
import packagetracker from '../../assets/images/packagetracker.png';
export default function ContactPage() {
    const iconStyle = {
        width:"50%",
    }

    return(
        <div className="contact">
            <img className="contactImage" src={packagetracker} alt="Tracker" />
            <div className="section">
                
                <div className="contact-grid">
                <h3 className="contact-section-title">share the page:</h3>
                    <ul className="contact-nav-links">
                        <li><a href="https://www.facebook.com/sudha.bommakanti/" target="_blank" rel="noreferrer"><i className="fab fa-facebook classFacebook" style={iconStyle}></i>Facebook</a></li>
                        <li><a href="https://www.linkedin.com/in/sudha-bommakanti/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin classLinkedIn" style={iconStyle}></i>LinkedIn</a></li>            
                        <li><a href="mailto:mailme.sudha.k@gmail.com" target="_blank"rel="noreferrer"><i className="far fa-envelope classGmail" style={iconStyle}></i>EMail</a></li>                
                    </ul>
                </div>
            </div>
        </div>
    );
}