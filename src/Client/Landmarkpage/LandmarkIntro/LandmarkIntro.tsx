import { Container, Row, Col, Image } from "react-bootstrap";

export default function LandmarkIntro() {
    return (
        <>
            <Container>
                <Row>
                    <Col >
                        <Image src="https://placehold.co/600x600" />
                    </Col>

                    <Col style={{ display: 'flex', alignItems: 'center' }}>
                        <span>
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

            </Container>
        </>
    )
}