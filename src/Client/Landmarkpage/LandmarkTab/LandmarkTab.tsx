import CommonDividersV3 from '../../CommonNavigationComponents/CommonDividersV3';
import './LandmarkTab.css'
import { Row, Col, Container, Tab, Tabs, Image } from "react-bootstrap"
import ObserverIntersectionUseEffect from '../../CommonLogic(NON-UI)/ObserverUseEffect';
import { useRef, useState, useContext, useEffect } from 'react';
import { LandmarkContext } from '../LandmarkAppContext';

export default function LandmarkTab() {
    const loremTable = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];

    const ComponentRef = useRef<HTMLDivElement>(null);

    const [scrollPast, setScrollPast] = useState(false);
    const LC = useContext(LandmarkContext);
    useEffect(() => {
        setScrollPast(false);
    }, [LC]);


    const checkScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.1
    })

    return (
        <>
            <Container style={{ marginTop: '100px' }} ref={ComponentRef}>
                <CommonDividersV3 onScroll={checkScrollPast} />
                <Tabs
                    defaultActiveKey={loremTable[0]}
                    id="uncontrolled-tab-example"
                    style={{
                        display: 'flex', flexWrap: 'nowrap',
                        overflow: 'auto',
                    }}
                >
                    {loremTable.map((title, index) => (
                        <Tab eventKey={title} title={
                            <div style={{
                                backgroundColor: 'transparent', overflow: 'hidden', padding: '15px',
                            }}>
                                <Row style={{
                                    margin: '0', minWidth: '125px', opacity: checkScrollPast ? 1 : 0,
                                    transform: checkScrollPast ? 'translateX(0%)' : 'translateX(-50%)',
                                    transition: 'transform 1s ease, opacity 1s ease',
                                    transitionDelay: `${index * 0.25}s`
                                }} >
                                    <Col xs={4} style={{ padding: '0' }}>
                                        <Image src='https://placehold.co/50x50' roundedCircle
                                            style={{ maxWidth: '50px', minWidth: '25px' }} />
                                    </Col>

                                    <Col xs={8} style={{
                                        display: 'flex', justifyContent: 'end',
                                        alignItems: 'center'
                                    }}>
                                        <span className='LandmarkTabTitleText'>{title}</span>
                                    </Col>
                                </Row>
                            </div>

                        } key={title}>
                            <Row style={{
                                margin: '0', transition: 'clip-path 2s ease',
                                clipPath: `inset(0 ${checkScrollPast ? 0 : 100}% 0 0)`
                            }} className='TabReveal'>
                                <Col xs={{ span: 12, order: 2 }} lg={6}
                                    style={{
                                        display: 'flex', justifyContent: 'center', alignItems: 'center'
                                    }}>
                                    <span style={{ maxWidth: '90%' }}>
                                        <p>Tab content for {title}.</p>
                                        <p> Lorem ipsum dolor sit amet, consectetur a
                                            dipiscing elit. Vivamus suscipit, eros sit amet cursus venenatis,
                                            nulla nunc ullamcorper nisl, id laoreet nulla libero ac eros.
                                            Cras sollicitudin libero ut turpis gravida, ut scelerisque odio tincidunt.
                                            Morbi aliquam elit turpis, vel blandit justo fermentum at.
                                            Donec auctor, risus sit amet interdum facilisis, ligula leo suscipit dui,
                                            vel eleifend nulla sapien vel ex. Nunc ac turpis id eros facilisis suscipit.
                                            Nullam volutpat fringilla risus at aliquet. Etiam a arcu id dolor dapibus tincidunt sit amet et nulla.
                                        </p>

                                        <p>Phasellus in cursus ante. Vivamus faucibus, ipsum ac consequat facilisis,
                                            elit odio euismod purus, vel placerat lorem felis ac nunc. Sed tincidunt lectus felis,
                                            id dictum neque gravida id. Proin auctor laoreet ipsum ac sollicitudin. Pellentesque habitant
                                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam molestie gravida sapien,
                                            sit amet egestas enim rhoncus et. Ut pellentesque metus ac volutpat tristique. Integer gravida,
                                            urna nec venenatis faucibus, nisl urna congue ligula, vitae tincidunt libero arcu ac mi.</p>
                                    </span>


                                </Col>

                                <Col xs={{ span: 12, order: 1 }} lg={5} style={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <Image src='https://placehold.co/500x500' roundedCircle
                                        fluid
                                        style={{
                                            marginTop: '100px', marginBottom: '100px', minWidth: '250px',
                                            maxWidth: '100%'
                                        }} />
                                </Col>
                                <Col xs={0} lg={1} >

                                </Col>
                            </Row>

                        </Tab>
                    ))}
                </Tabs >
            </Container >

        </>
    )
}