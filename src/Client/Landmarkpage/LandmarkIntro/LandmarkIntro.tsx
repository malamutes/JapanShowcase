import { Container, Row, Col, Image } from "react-bootstrap";
import '../LandmarkApp.css'
import { useEffect, useState } from "react";
import './LandmarkIntro.css'
import { faL } from "@fortawesome/free-solid-svg-icons";
import CommonDividersV3 from "../../CommonNavigationComponents/CommonDividersV3";

export default function LandmarkIntro() {
    const arr = [1, 2, 3, 4, 5];
    const distance = 175;
    const angle = 360 / arr.length;
    const [currItem, setCurrItem] = useState(0);
    const [rotationDeg, setRotationDeg] = useState(0);
    const [initialLoad, setInitialLoad] = useState(false);
    const [fakeFlag, setFakeFlag] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (index: number) => {
        let rotationChange = -(index - currItem) * angle;

        if (rotationChange > 180) {
            rotationChange -= 360; // Rotate counterclockwise (by subtracting 360)
        } else if (rotationChange < -180) {
            rotationChange += 360; // Rotate clockwise (by adding 360)
        }

        setRotationDeg(prevRotation => prevRotation + rotationChange);

        setFakeFlag(false);

        setCurrItem(index);
    }

    useEffect(() => {
        setInitialLoad(true);
    }, []);

    return (
        <>
            <Container style={{
                position: 'relative', top: '100px', marginBottom: '200px', maxWidth: '1500px', marginTop: '-75px'
            }}>
                <CommonDividersV3 onScroll={initialLoad} />
                <Row style={{ display: 'flex', alignItems: 'center', padding: '100px 0 150px 0' }}>
                    <Col style={{ display: 'grid', placeItems: 'center', position: 'relative' }} xs={6}>
                        <Image src="https://placehold.co/250x250" style={{
                            borderRadius: '50%', boxShadow: "0px 0px 25px rgb(0, 0, 0, 0.5)"
                        }} />
                        <div style={{ position: 'absolute', display: 'grid', placeItems: 'center' }}>
                            {arr.map((item, index) => (
                                <div style={{ position: 'absolute', display: 'grid', placeItems: 'center' }}>
                                    <Image src={`https://placehold.co/150x150?text=${index}`} fluid
                                        className={`CircularMenuItems ${index === currItem ? "CircularMenuItemsCurr" : ""}`}
                                        style={{
                                            maxWidth: '150px', height: '150px', borderRadius: '50%',
                                            position: 'absolute', transition: 'transform 0.5s ease, opacity 1s ease',
                                            transform: `rotate(${rotationDeg}deg) 
                                             translate(${initialLoad ? distance * Math.cos((angle * index) * Math.PI / 180) : 0}%, 
                                        ${initialLoad ? distance * Math.sin((angle * index) * Math.PI / 180) : 0}%)`,
                                            opacity: initialLoad ? 1 : 0, transitionDelay: `${fakeFlag ? 0.25 * index : 0}s`,
                                            cursor: 'pointer',
                                        }}
                                        onClick={() => handleClick(index)}
                                    />
                                </div>

                            ))}
                        </div>
                    </Col>
                    <Col xs={1}>
                    </Col>
                    <Col xs={5} style={{ display: 'flex', alignItems: 'center', margin: '25px 0', justifyContent: 'center' }}
                        key={currItem} className="CurrDescContainer">
                        <span className="CurrDesc">
                            <p>{currItem} ITEM</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                            <p>
                                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
                                turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
                                Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.
                                Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis,
                                id tincidunt sapien risus a quam. Maecenas fermentum consequat mi.
                            </p>
                        </span>

                    </Col>
                </Row>
            </Container >
        </>
    )
}