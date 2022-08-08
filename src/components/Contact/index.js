import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {useEffect,useState,useRef} from 'react';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_opvoj9b',
            'template_svzbdqo',
            form.current,
            'ppHOkXF4j5qqwFNYV'
        ).then(
            () => {
                alert("Message successfully sent!")
                window.location.reload(false)
            },
            () => {
                alert("failed to send the message, try again")
            }
        )
    }

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    return (
        <>
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']}
                    idx={15} />
                </h1>
                <p>
                I am interested in freelance opportunities - especially ambitious or
                large projects. However, if you have other request or question,
                don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className="half">
                                <input type="email" name="email" placeholder="Email" required/>
                            </li>
                            <li>
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                M.Dinosh Chriton,<br/>
                Sri Lanka<br/>
                No.43, North kabillewela<br/>
                Bandarawela,Badulla<br/>
                <span>dinoshm448cs@gmail.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[6.833571, 80.995431]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <Marker position={[6.833571, 80.995431]}>
                        <Popup>Dinosh is living here...</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default Contact