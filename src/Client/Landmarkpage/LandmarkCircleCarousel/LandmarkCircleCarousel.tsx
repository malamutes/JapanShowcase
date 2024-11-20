import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

interface LandmarkCircleCarouselProps {
    imageArray: string[], //need to use square images of course
    width: string,
}

function LandmarkCircleCarousel(props: LandmarkCircleCarouselProps) {
    return (
        <>
            <Carousel style={{
                maxWidth: `${props.width}px`, padding: '0', borderRadius: '50%',
                width: 'fit-content', overflow: 'hidden'
            }}>
                {props.imageArray.map((image, index) => (
                    <Carousel.Item key={index} style={{ aspectRatio: '1' }}>
                        <Image src={image} roundedCircle fluid style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        <Carousel.Caption>
                            <h3 style={{ color: 'black' }}>{index} slide label</h3>
                            <p style={{ color: 'black' }}>{image}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default function LandmarkCircleCarouselSection() {
    //will need to consider container's maxwidth with respect to images width
    return (
        <>
            <Container style={{ position: 'relative', paddingBottom: '100px' }}>
                <div style={{
                    maxWidth: '35%', position: 'absolute', zIndex: '1'
                    , marginTop: '100px'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.

                </div>
                <Container style={{ maxWidth: '900px', padding: '0' }}>

                    <div style={{ margin: '0', display: 'flex' }}>

                        <div style={{
                            maxWidth: '300px', width: 'fit-content', display: 'flex',
                            aspectRatio: '1', alignItems: 'end', transform: 'translateX(60%) translateY(10%)',
                            zIndex: '1'
                        }}>
                            <LandmarkCircleCarousel width="300" imageArray={["holder.js/300x300", "holder.js/300x300", "holder.js/300x300"]} />

                        </div>

                        <div style={{
                            maxWidth: '600px', width: 'fit-content',
                            aspectRatio: '1'
                        }}>
                            <LandmarkCircleCarousel width="600" imageArray={["holder.js/600x600", "holder.js/600x600", "holder.js/600x600"]} />
                        </div>
                    </div>
                </Container>
            </Container>

        </>
    )
}
