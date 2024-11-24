import { Row, Col, Container, Image } from "react-bootstrap"
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2"
import { useState, useRef } from "react"
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect"

interface ComplimentaryFoodCardProps {
    image: string,
    style?: React.CSSProperties,
    title: string

}

export function ComplimentaryFoodCard(props: ComplimentaryFoodCardProps) {


    return (
        <>
            <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <Image fluid src={props.image} style={{ ...props.style }} />
                <div style={{
                    backgroundColor: 'red', aspectRatio: '4', display: 'flex',
                    alignItems: 'center', transform: 'translateY(-50%)'
                }}>
                    <span style={{ padding: '0 25px' }}>{props.title}</span>
                </div>
                <span>BLAHBLAH</span>
            </Col>
        </>
    )
}

export default function ComplimentaryFood() {
    const [scrollPast, setScrollPast] = useState(false);
    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({ scrollPast: scrollPast, setScrollPast: setScrollPast, compRef: ComponentRef });

    console.log(checkHasScrollPast);

    return (
        <>
            <Container style={{ marginTop: '100px' }} ref={ComponentRef}>
                <CommonDividersV2 />
                <Row>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, index) => (
                        <Col style={{ marginTop: '50px' }} sm={6} md={4} lg={3}>
                            <ComplimentaryFoodCard image="https://placehold.co/300x300" title="adsadasd" />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}