import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import '../CommonStyles/CommonStyles.css'
import './MainIntroImage.css'
import { useEffect, useState } from "react";

//<a href="https://www.flaticon.com/free-icons/next" title="next icons">Next icons created by th studio - Flaticon</a>

export default function MainIntroImage() {

    const nameHandleClick = () => {
        window.open('https://github.com/malamutes', '_blank')
    };

    const [isUnderlined, setIsUnderlined] = useState(false);

    useEffect(() => {
        setIsUnderlined(true);
    }, []);

    return (
        <>
            <Container style={{ overflow: 'hidden', maxWidth: '1920px', width: '100%' }}
                className="CommonContainer" id="Home">

                <div className="MainImageTextContainer">
                    <div style={{
                        position: 'absolute',
                        width: '100%', height: '100%',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '16px',
                        boxShadow: '0 0px 30px rgba(0, 0, 0, 0.25)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        zIndex: '1', minWidth: '100px'
                    }}>
                    </div>

                    <div className="MainImageTextWrapper">
                        <p className="title">
                            Front-End Design: Japan
                        </p>

                        <p className="made-by" >
                            Made by <span className="NameTag" onClick={nameHandleClick}>
                                malamutes
                            </span>.
                        </p>

                        <span className="description">
                            This portfolio highlights my front-end development skills with a Japan-inspired design,
                            showcasing my expertise in <span
                                className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`} >HTML</span>, <span
                                    className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>CSS</span>, <span
                                        className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>TypeScript</span>, <span
                                            className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>React</span>, <span
                                                className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>interactive</span>, and <span
                                                    className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>responsive</span> layout.

                        </span>

                        <span className="descriptionTwo">
                            <span className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>Responsive</span>, <span className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>interactive
                            </span> UI built with <span
                                className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`} >HTML</span>, <span
                                    className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>CSS</span>, <span
                                        className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>TypeScript</span>, <span
                                            className={`UnderlineEffectText ${isUnderlined ? 'underlined' : ''}`}>React</span>.
                        </span>
                    </div>

                </div>

                <Row>
                    <Col style={{ padding: '0', margin: '0', }}>

                        <Carousel controls={false} interval={null}>
                            <Carousel.Item className="CarouselImageContainer">
                                <Image src="/Images/JapanNight.webp" className="ImageStyle" alt="JapanNight" />

                            </Carousel.Item>
                            <Carousel.Item className="CarouselImageContainer">
                                <Image src="/Images/IntroFood.webp" className="ImageStyle" alt="JapanFoodIntro" />

                            </Carousel.Item>
                            <Carousel.Item className="CarouselImageContainer">
                                <Image src="/Images/IntroFestival.jpg" className="ImageStyle" alt="JapanFestivalIntro" />

                            </Carousel.Item>
                        </Carousel>

                        <div style={{
                            width: '100vw', height: '100vh',
                            background: 'linear-gradient(to bottom, transparent 0%, transparent 90%, black 100%)',
                            position: 'absolute', top: '0'
                        }}>

                        </div>
                    </Col>

                    <div >
                        <a href="#Prefecture">
                            <Image
                                style={{
                                    position: 'absolute',
                                    right: '75px',
                                    top: '85%',
                                    width: '50px',
                                    maxWidth: '100px',
                                    transform: 'rotate(90deg)',
                                    filter: 'invert(1)',
                                    zIndex: '2',
                                }}
                                src="/Images/right_arrow.png"
                                alt="Down Arrow"
                            />
                        </a>
                    </div>
                </Row>
            </Container >
        </>
    )
}

