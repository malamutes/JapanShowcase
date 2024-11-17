import { Row, Col, Container, Image } from "react-bootstrap"

interface ComplimentaryFoodCardProps {
    image: string,
    style?: React.CSSProperties,
    title: string

}

export function ComplimentaryFoodCard(props: ComplimentaryFoodCardProps) {
    return (
        <>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Image src={props.image} style={props.style} />
                <div style={{
                    backgroundColor: 'red', aspectRatio: '4', display: 'flex',
                    alignItems: 'center', transform: 'translateY(-50%)'
                }}>
                    <span style={{ padding: '0 25px' }}>{props.title}</span>
                </div>
            </Col>
        </>
    )
}

export default function ComplimentaryFood() {
    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <Row>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, index) => (
                        <Col style={{ marginTop: '50px' }}>
                            <ComplimentaryFoodCard image="holder.js/300x300" title="adsadasd" />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}