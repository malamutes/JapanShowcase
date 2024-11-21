import { Col, Row, Image } from "react-bootstrap";

interface InnerFoodDescCardProps {
    title: string
}

export default function InnerFoodDescCard(props: InnerFoodDescCardProps) {
    return (
        <>
            <Row style={{ margin: '0' }}>
                <Col lg={8}
                    style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ maxWidth: '80%', margin: 'auto' }}>{props.title}</p>

                        <p style={{ maxWidth: '90%', margin: 'auto' }}>
                            Curabitur pretium tincidunt lacus. Nulla gravida orci
                            a odio. Nullam varius, turpis et commodo pharetra, est eros
                            bibendum elit, nec luctus magna felis sollicitudin mauris. Integer
                            in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate
                            vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper,
                            ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.

                        </p>
                    </Row>


                </Col>

                <Col lg={4} style={{
                    padding: '0'
                }}>
                    <Row style={{
                        margin: '0'
                    }}>
                        <Col lg={0} >
                        </Col>

                        <Col lg={12} style={{
                            margin: '0', display: 'flex',
                            justifyContent: 'center', width: '100%'
                        }}>
                            <Image fluid src="https://placehold.co/300x300" style={{
                                padding: '0', marginTop: '50px',
                                maxWidth: '100%', height: 'auto',
                            }} />
                        </Col>

                        <Col lg={0} >
                        </Col>

                    </Row>

                    <Row >
                        <div style={{ textAlign: 'center' }}>
                            <span >
                                asdsadsd <br />
                                asdsadsd <br />
                                asdsadsd

                            </span>

                        </div>

                    </Row>

                </Col>
            </Row >
        </>
    )
}