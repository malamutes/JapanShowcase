import { Col, Row, Image } from "react-bootstrap";

interface InnerFoodDescCardProps {
    title: string
}

export default function InnerFoodDescCard(props: InnerFoodDescCardProps) {
    return (
        <>
            <Row >
                <Col style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }} xs={8}>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                        <p style={{ maxWidth: '80%', margin: 'auto' }}>{props.title}</p>

                        <p style={{ maxWidth: '80%', margin: 'auto' }}>
                            Curabitur pretium tincidunt lacus. Nulla gravida orci
                            a odio. Nullam varius, turpis et commodo pharetra, est eros
                            bibendum elit, nec luctus magna felis sollicitudin mauris. Integer
                            in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate
                            vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper,
                            ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.

                        </p>
                    </Row>


                </Col>

                <Col xs={4}>
                    <Row>
                        <Image src="holder.js/300x300" style={{ padding: '0', marginTop: '50px' }} />
                    </Row>

                    <Row>
                        <br />
                        asdsadsd
                    </Row>

                </Col>
            </Row >
        </>
    )
}