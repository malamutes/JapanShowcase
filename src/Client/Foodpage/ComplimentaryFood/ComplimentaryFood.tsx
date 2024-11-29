import { Row, Col, Container, Image } from "react-bootstrap"
import CommonDividersV2 from "../../CommonNavigationComponents/CommonNavDividersV2"
import { useState, useRef } from "react"
import './ComplimentaryFood.css'
import ObserverIntersectionUseEffect from "../../CommonLogic(NON-UI)/ObserverUseEffect"

interface ComplimentaryFoodCardProps {
    image: string,
    style?: React.CSSProperties,
    title: string,
}

export function ComplimentaryFoodCard(props: ComplimentaryFoodCardProps) {

    const [scrollPastCol, setScrollPastCol] = useState(false);

    const ComponentColRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPastCol = ObserverIntersectionUseEffect({
        scrollPast: scrollPastCol, setScrollPast: setScrollPastCol,
        compRef: ComponentColRef, threshold: 0.1
    });

    return (
        <>
            <Col className={`ComplimentaryFoodCardContainer 
                ${checkHasScrollPastCol ? "ComplimentaryFoodCardContainerShow" : ""}`}
                ref={ComponentColRef}>
                <div className="SideContainer">
                    <div className="BackSide">
                        <p>TITLE</p>
                        <div style={{
                            maxHeight: '60%', overflowY: 'auto',
                            maxWidth: '100%', margin: '0 auto', wordBreak: 'break-word'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                            Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
                        </div>
                    </div>

                    <div className="FrontSide">
                        <Image fluid src={props.image} style={{ ...props.style }} />
                        <div style={{
                            backgroundColor: 'grey', aspectRatio: '4', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', width: 'fit-content',
                            margin: '0 auto', transform: 'translateY(-50%)'
                        }}>
                            <span style={{ padding: '5px 25px' }}>{props.title}</span>
                        </div>

                        <span >BLAHBLAH</span>
                    </div>


                </div>
            </Col>
        </>
    )
}

export default function ComplimentaryFood() {
    const [scrollPast, setScrollPast] = useState(false);

    const ComponentRef = useRef<HTMLDivElement>(null);

    const checkHasScrollPast = ObserverIntersectionUseEffect({
        scrollPast: scrollPast, setScrollPast: setScrollPast,
        compRef: ComponentRef, threshold: 0.25
    });


    return (
        <>
            <Container style={{ marginTop: '100px' }} ref={ComponentRef}>
                <CommonDividersV2 onScroll={checkHasScrollPast} />
                <Row >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((element, index) => (
                        <Col style={{
                            display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px',
                        }} sm={6} md={4} lg={3} key={element}>
                            <ComplimentaryFoodCard image="https://placehold.co/300x300" title="adsadasd" />
                        </Col>
                    ))}
                </Row>
            </Container>

        </>
    )
}