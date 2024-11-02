import FourImageSpace from "./FourImageSpace/FourImageSpace"
import { Container, Row, Col } from "react-bootstrap"
import { FoodData } from "../Data/FoodData"

export default function Food() {
    const FD = FoodData;
    console.log(FoodData["Sushi"].img);

    return (
        <>
            <Container style={{ maxWidth: '1600px' }} >
                <h1 style={{ margin: '50px', textAlign: 'center' }}>FOOOOOOOOOOD</h1>
                <Row >
                    <Col>
                        <FourImageSpace
                            img1={FD["Sushi"].img} title1={FD["Sushi"].title}
                            img2={FD["Ramen"].img} title2={FD["Ramen"].title}
                            img3={FD["Tempura"].img} title3={FD["Tempura"].title}
                            img4={FD["Okonomiyaki"].img} title4={FD["Okonomiyaki"].title}
                        />
                    </Col>

                    <Col>
                        <FourImageSpace
                            img1={FD["Yakisoba"].img} title1={FD["Yakisoba"].title}
                            img2={FD["Sashimi"].img} title2={FD["Sashimi"].title}
                            img3={FD["Mochi"].img} title3={FD["Mochi"].title}
                            img4={FD["Udon"].img} title4={FD["Udon"].title}
                        />
                    </Col>

                </Row>
            </Container>


        </>

    )
}