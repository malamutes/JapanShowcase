import { Container, Row, Col, Image } from "react-bootstrap"
import './LandmarkNavigation.css'
import CommonDividersV3 from "../../CommonNavigationComponents/CommonDividersV3";

export default function LandmarkNavigation() {
    const colors = ['green', 'red', 'blue', 'cyan', "purple"];

    return (
        <>
            <Container style={{
                marginTop: '50px', display: 'grid'
                , placeItems: 'center', position: 'relative', overflow: 'hidden',
                paddingBottom: '50px'
            }}>
                <CommonDividersV3 />
                <Row>
                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 2 }}
                        style={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }} >
                        <span style={{ maxWidth: '75%', marginRight: '50px', }}>
                            <p>
                                VERDIT
                            </p>

                            <p>
                                SAMUR SAMERI TATI RETUO
                            </p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vestibulum auctor nisl nec felis tincidunt, id malesuada risus efficitur.
                            Aliquam erat volutpat. Integer et risus at tortor sollicitudin sodales. Suspendisse potenti.
                            Phasellus a lectus vel ipsum luctus viverra vel at velit. Aenean aliquam sapien eu tincidunt feugiat.
                            Sed nec nulla euismod, vulputate ligula id, pharetra libero. Mauris ut efficitur mi, ac auctor nisl.
                            Vivamus nec malesuada turpis. Curabitur euismod
                            sem id nulla viverra, nec vulputate ex blandit.
                        </span>

                    </Col>

                    <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 1 }}

                    >
                        <div style={{
                            maxWidth: '600px', aspectRatio: '1', borderRadius: '50%',
                            position: 'relative', transformOrigin: 'center', overflow: 'hidden',
                            transform: 'rotate(-25deg)', margin: '0 auto'
                        }}>
                            <div style={{
                                width: '120px',
                                backgroundColor: 'blue',
                                aspectRatio: '1',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: '10',
                                display: 'grid',
                                placeItems: 'center'
                            }}>
                                asd
                            </div>
                            {colors.map((color, index) => (
                                <div
                                    key={index}
                                    style={{
                                        position: 'absolute',
                                        width: '50%',
                                        aspectRatio: '1',
                                        transformOrigin: 'bottom right',
                                        transform: `rotate(calc(${360 / colors.length}deg * ${index}))`,
                                        clipPath: "polygon(00% 0%, 85% 0%, 100% 100%, 0% 85%)",
                                        display: 'grid', placeItems: 'center', overflow: 'hidden'
                                    }}
                                >
                                    <Image src="https://placehold.co/400x400" className="WheelNavItem"
                                        style={{
                                            padding: '0', margin: '0',
                                            transform: 'rotate(-45deg) translateY(-15%)'
                                        }} />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>

            </Container>
        </>
    )
}