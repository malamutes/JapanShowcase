import { useContext, useEffect, useState } from "react";
import { Col, Row, Card, Image, Offcanvas } from "react-bootstrap";
import MatchmediaQuery from "../../CommonLogic(NON-UI)/MatchmediaQuery";
import './HorizontalCard.css'


//<a href="https://www.flaticon.com/free-icons/visible" title="visible icons">Visible icons created by uicon - Flaticon</a>

//need to do clicking outside to close effect
//nav next
export default function HorizontalCard() {
    const [showLargeImage, setShowLargeImage] = useState(false);
    const [enlargeSubImage1, setEnlargeSubImage1] = useState(false);
    const [enlargeSubImage2, setEnlargeSubImage2] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const enlarge = (e: WheelEvent | MouseEvent) => {
            if (enlargeSubImage1 || enlargeSubImage2) {
                e.preventDefault();
            }
        };

        window.addEventListener('wheel', enlarge, { passive: false });
        window.addEventListener('click', enlarge);

        return () => {
            window.removeEventListener('wheel', enlarge);
            window.removeEventListener('click', enlarge);
        }
    }, [enlargeSubImage1, enlargeSubImage2, show])

    const [more992, setMore992] = useState(true);

    const checkmore992px = MatchmediaQuery({ size: 992, more: more992, setMore: setMore992 });

    return (
        <>
            {checkmore992px ?
                (
                    <>

                        <div className={`HorizontalCardOverlay ${enlargeSubImage1 || enlargeSubImage2 ? "HorizontalCardOverlayDark" : ""}`}
                            onClick={() => { setEnlargeSubImage1(false); setEnlargeSubImage2(false) }}> </div>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <Row >
                                <Card style={{ border: 'none', backgroundColor: 'transparent' }}>
                                    <Card.Img src="https://placehold.co/1400x500" alt="Card image"
                                        style={{ borderRadius: '25px', maxWidth: '100%', height: 'auto' }} />
                                    <Card.ImgOverlay>
                                        <Row style={{ margin: '0', height: '100%', display: 'flex', alignItems: 'center', }}>
                                            <Col xs={4} style={{ overflow: 'hidden' }}>
                                                <Row className={`HorizontalCardTextRow ${showLargeImage ? "HorizontalCardTextRowHide" : ""}`}>
                                                    <Card.Title><p>Card title</p></Card.Title>
                                                    <Card.Text>
                                                        <span style={{ fontSize: '15px' }}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Cras suscipit elit vel sapien luctus, at fermentum justo hendrerit.
                                                            Sed ac sem facilisis, sollicitudin nunc ut, laoreet eros.
                                                        </span>

                                                    </Card.Text>
                                                    <blockquote className="blockquote mb-0">
                                                        <p style={{ fontSize: '15px' }}>
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                                            posuere erat a ante.
                                                        </p>
                                                        <footer className="blockquote-footer" style={{ fontSize: '15px' }}>
                                                            Someone famous in <cite title="Source Title">Source Title</cite>
                                                        </footer>
                                                    </blockquote>
                                                </Row>
                                            </Col>

                                            <Col xs={3} style={{ position: 'relative', minHeight: '100%' }}>
                                                <div className="HorizontalCardToggleContainer">
                                                    <Image src={`/Images/ShowEye.png`} className="HorizontalCardToggleImage"
                                                        onClick={() => setShowLargeImage(showLargeImage => !showLargeImage)} />
                                                </div>
                                            </Col>

                                            <Col xs={5} style={{ overflow: 'hidden' }}>
                                                <Row style={{ margin: '0', height: '100%', display: 'flex', justifyContent: 'center' }}
                                                    className={`HorizontalCardImageRow ${showLargeImage ? "HorizontalCardImageRowHide" : ""}`}>
                                                    <Col sm={6}
                                                        className={`HorizontalCardSubImageContainer ${enlargeSubImage1 ? "HorizontalCardSubImageContainerEnlarge" : ""}`}>
                                                        <Image src="https://placehold.co/225x300/black/white"
                                                            className={`HorizontalCardSubImage ${enlargeSubImage1 ? "HorizontalCardSubImageEnlarge" : ""}`}
                                                            onClick={() => {
                                                                setEnlargeSubImage1(enlargeSubImage1 => !enlargeSubImage1);
                                                            }} />
                                                        {enlargeSubImage1 ? (<span className="HorizontalCardSubImageText">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Quisque tincidunt purus sit amet dui suscipit, et suscipit turpis suscipit.
                                                            Sed pretium, nisi vitae facilisis luctus, odio justo cursus lectus, nec elementum risus libero id risus.
                                                            Cras feugiat, sapien non fermentum fringilla, felis eros sollicitudin tortor, id lacinia nisi nunc ac orci.
                                                            Morbi ut dui nec ante malesuada viverra a et odio.

                                                        </span>) : null}
                                                    </Col>

                                                    <Col sm={6}
                                                        className={`HorizontalCardSubImageContainer ${enlargeSubImage2 ? "HorizontalCardSubImageContainerEnlarge" : ""}`}>
                                                        <Image src="https://placehold.co/225x300/black/white"
                                                            className={`HorizontalCardSubImage ${enlargeSubImage2 ? "HorizontalCardSubImageEnlarge" : ""}`}
                                                            onClick={() => {
                                                                setEnlargeSubImage2(enlargeSubImage2 => !enlargeSubImage2);
                                                            }} />
                                                        {enlargeSubImage2 ? (<span className="HorizontalCardSubImageText">
                                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Quisque tincidunt purus sit amet dui suscipit, et suscipit turpis suscipit.
                                                            Sed pretium, nisi vitae facilisis luctus, odio justo cursus lectus, nec elementum risus libero id risus.
                                                            Cras feugiat, sapien non fermentum fringilla, felis eros sollicitudin tortor, id lacinia nisi nunc ac orci.
                                                            Morbi ut dui nec ante malesuada viverra a et odio.
                                                        </span>) : null}
                                                    </Col>
                                                </Row>

                                            </Col>
                                        </Row>
                                    </Card.ImgOverlay>
                                </Card>
                            </Row>
                        </Col>
                    </>
                ) :
                (
                    <>
                        <div className={`HorizontalCardOverlay ${enlargeSubImage1 || enlargeSubImage2 ? "HorizontalCardOverlayDark" : ""}`}
                            onClick={() => { setEnlargeSubImage1(false); setEnlargeSubImage2(false) }}> </div>
                        <Col >
                            <Row>
                                <Image
                                    src="https://placehold.co/1400x500"
                                    alt="Card image"
                                    style={{ borderRadius: '25px', maxWidth: '100%', height: 'auto' }}
                                />
                            </Row>

                            <Row style={{ marginTop: '25px' }}>
                                <Col xs={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <p>Card title</p>
                                    <p style={{ fontSize: '15px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Cras suscipit elit vel sapien luctus, at fermentum justo hendrerit.
                                        Sed ac sem facilisis, sollicitudin nunc ut, laoreet eros.
                                    </p>



                                </Col>

                                <Col xs={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Row >
                                        <Row style={{ margin: '0', height: '100%', display: 'flex', justifyContent: 'center' }}
                                            className={`HorizontalCardImageRow ${showLargeImage ? "HorizontalCardImageRowHide" : ""}`}>
                                            <Col sm={6}
                                                className={`HorizontalCardSubImageContainer ${enlargeSubImage1 ? "HorizontalCardSubImageContainerEnlarge" : ""}`}>
                                                <Image src="https://placehold.co/225x300/black/white"
                                                    className={`HorizontalCardSubImage ${enlargeSubImage1 ? "HorizontalCardSubImageEnlarge" : ""}`}
                                                    onClick={() => {
                                                        setEnlargeSubImage1(enlargeSubImage1 => !enlargeSubImage1);
                                                    }} />
                                                {enlargeSubImage1 ? (<span className="HorizontalCardSubImageText">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Quisque tincidunt purus sit amet dui suscipit, et suscipit turpis suscipit.
                                                    Sed pretium, nisi vitae facilisis luctus, odio justo cursus lectus, nec elementum risus libero id risus.
                                                    Cras feugiat, sapien non fermentum fringilla, felis eros sollicitudin tortor, id lacinia nisi nunc ac orci.
                                                    Morbi ut dui nec ante malesuada viverra a et odio.

                                                </span>) : null}
                                            </Col>

                                            <Col sm={6}
                                                className={`HorizontalCardSubImageContainer ${enlargeSubImage2 ? "HorizontalCardSubImageContainerEnlarge" : ""}`}>
                                                <Image src="https://placehold.co/225x300/black/white"
                                                    className={`HorizontalCardSubImage ${enlargeSubImage2 ? "HorizontalCardSubImageEnlarge" : ""}`}
                                                    onClick={() => {
                                                        setEnlargeSubImage2(enlargeSubImage2 => !enlargeSubImage2);
                                                    }} />
                                                {enlargeSubImage2 ? (<span className="HorizontalCardSubImageText">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Quisque tincidunt purus sit amet dui suscipit, et suscipit turpis suscipit.
                                                    Sed pretium, nisi vitae facilisis luctus, odio justo cursus lectus, nec elementum risus libero id risus.
                                                    Cras feugiat, sapien non fermentum fringilla, felis eros sollicitudin tortor, id lacinia nisi nunc ac orci.
                                                    Morbi ut dui nec ante malesuada viverra a et odio.
                                                </span>) : null}
                                            </Col>
                                        </Row>
                                    </Row>

                                </Col>

                                <Offcanvas show={show} onHide={handleClose} placement="bottom" scroll={true}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Cras suscipit elit vel sapien luctus, at fermentum justo hendrerit.
                                        Sed ac sem facilisis, sollicitudin nunc ut, laoreet eros.
                                    </Offcanvas.Body>
                                </Offcanvas>

                            </Row >
                            <Row style={{ marginTop: '10px' }}>
                                <blockquote className="blockquote mb-0">
                                    <p style={{ fontSize: '15px' }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                        posuere erat a ante.
                                    </p>
                                    <footer className="blockquote-footer" style={{ fontSize: '15px' }}>
                                        Someone famous in <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </Row>


                        </Col >

                    </>
                )
            }
        </>
    )
}