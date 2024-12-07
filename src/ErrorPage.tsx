import './App.css'
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

//<a target="_blank" href="https://icons8.com/icon/2797/home">Home</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/3723/location">Location</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/3612/sushi">Sushi</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/25055/mountain">Mountain</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>


export default function ErrorPage() {

    const navigate = useNavigate();

    const [isUnderlined, setIsUnderlined] = useState(false);

    useEffect(() => {
        setIsUnderlined(true);
    }, []);

    return (
        <>
            <div className='ErrorPageContainer'>
                <div className='ErrorPageWrapper '>
                    <span className='ErrorTagTitle TransitionTextClass'>
                        404
                    </span>

                    <p className='ErrorTagSubtitle TransitionTextClass'>WOOPSIES, PAGE NOT FOUND</p>

                    <p className='TransitionTextClass'>
                        Looks like our page <span style={{ color: 'red' }}>ran away</span>!
                        The working conditions are <span style={{ color: 'red' }}>great</span>, I can't see why they would! <br />
                        (They will be severely punished 👊 💥 💤).
                    </p>

                    <p className='TransitionTextClass'>
                        Don’t worry, it’s not you, it’s me.
                        The page you’re looking for has either been <br />
                        <span
                            className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>moved</span>, <span
                                className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>deleted</span>,
                        or is just playing <span
                            className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>hide-and-seek</span> (not addded yet). <br />


                    </p>

                    <p className='TransitionTextClass'>
                        🕵️‍♂️ Try heading back to the homepage: <br />

                    </p>

                    <p className='TransitionTextClass' >
                        <Image src='/Images/I8Home.png' className='I8Icon I8Icon1'
                            onClick={() => navigate('/')} />
                    </p>

                    <p className='TransitionTextClass'>
                        Or visit these pages:
                    </p>

                    <div className='TransitionImageContainer'>
                        <div className='TransitionTextClass'>
                            <Image src='/Images/I8Location.png'
                                className='I8Icon I8Icon2'
                                onClick={() => navigate('/Prefecture/Tokyo')} />
                        </div>

                        <div className='TransitionTextClass'>
                            <Image src='/Images/I8Sushi.png'
                                className='I8Icon I8Icon3'
                                onClick={() => navigate('/Food/Sushi')} />
                        </div>

                        <div className='TransitionTextClass'>

                            <Image src='/Images/I8Mountain.png'
                                className='I8Icon I8Icon4'
                                onClick={() => navigate('/Landmark/Fujisan')} />
                        </div>
                    </div>



                </div>

            </div >
        </>
    )
}