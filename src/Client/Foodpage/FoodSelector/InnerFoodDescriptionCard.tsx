import { Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke, faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faUnfilledStar } from "@fortawesome/free-regular-svg-icons";

interface InnerFoodDescCardProps {
    title: string;
    rating: number;
    onScroll: boolean
}

const ratingMap: { [key: string]: any } = {
    faStarHalfStrokeRef: faStarHalfStroke,
    faUnfilledStarRef: faUnfilledStar,
    faStarRef: faStar,
};


export default function InnerFoodDescCard(props: InnerFoodDescCardProps) {
    //rating will only go up in 0.5 i think so no goofy situation of 0.25 or whatnot
    function DetermineStarRating(rating: number): number[] {
        if (rating >= 0 && rating <= 5) {
            const leftOver = rating % 1;
            const numFullStars = (rating - leftOver) / 1;
            let numHalfStar = 0
            if (leftOver === 0.5) {
                numHalfStar = 1;
            }
            const numEmptyStars = 5 - numFullStars - numHalfStar

            return [numFullStars, numHalfStar, numEmptyStars];
        }
        else {
            return [0, 0, 5];
        }

    };

    return (
        <>
            <Row style={{ margin: '25px 0' }}
                className={`InnerFoodDescCardDefault ${props.onScroll ? "InnerFoodDescCardShow" : ""}`}>
                <Col lg={8}
                    style={{
                        textAlign: 'center', display: 'flex', flexDirection: 'column',
                        justifyContent: 'center',
                    }}>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div className="GlassmorphismEffect" style={{
                            maxWidth: '75%', padding: '25px',
                        }}>
                            <p style={{ margin: 'auto' }}>{props.title}</p>

                            <p style={{ margin: 'auto' }}>
                                Curabitur pretium tincidunt lacus. Nulla gravida orci
                                a odio. Nullam varius, turpis et commodo pharetra, est eros
                                bibendum elit, nec luctus magna felis sollicitudin mauris. Integer
                                in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate
                                vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper,
                                ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam.

                            </p>
                        </div>

                    </Row>


                </Col>

                <Col lg={4} style={{
                    padding: '0', display: 'flex', flexDirection: 'column'
                }}>
                    <Row style={{
                        margin: '0',
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

                    <Row style={{ flexGrow: '1', }}>
                        <Col style={{
                            textAlign: 'center', margin: '10px auto', display: 'flex',
                            flexDirection: 'column',
                        }}>
                            {['Heat', 'Flavour', 'Aroma'].map((metric, index) => (
                                <Row key={index} style={{ flexGrow: '1' }}>
                                    <div style={{ margin: 'auto' }}>
                                        <span style={{ marginRight: '5px' }}>{metric}</span>
                                        {DetermineStarRating(props.rating).map((numStars, index) => {
                                            if (index === 0) {
                                                return [...Array(numStars)].map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={ratingMap["faStarRef"]} /> // Filled star
                                                ));
                                            }
                                            if (index === 1) {
                                                return [...Array(numStars)].map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={ratingMap["faStarHalfStrokeRef"]} /> // Half-filled star
                                                ));
                                            }
                                            if (index === 2) {
                                                return [...Array(numStars)].map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={ratingMap["faUnfilledStarRef"]} /> // Empty star
                                                ));
                                            }
                                        })}


                                    </div>
                                </Row>
                            ))}
                        </Col>
                    </Row>
                </Col>
            </Row >
        </>
    )
}