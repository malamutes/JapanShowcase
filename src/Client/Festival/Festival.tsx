import { Container, ProgressBar, Row } from "react-bootstrap";

export default function Festival() {
    return (
        <>
            <Container>

                <h1 style={{ margin: '50px', textAlign: 'center' }}>FESTIVAL</h1>

                <Row style={{ width: '1500px', backgroundColor: 'red', height: '750px', position: 'absolute' }}>

                    <Row style={{
                        backgroundColor: 'yellow', width: '50%', height: '25%',
                        top: '0%', left: '40%', position: 'absolute', margin: '0'
                    }}>
                    </Row>

                    <div style={{
                        backgroundColor: 'green', width: '43.75%', height: '55%',
                        position: 'absolute', zIndex: '10', top: '60%',
                        transform: 'translateY(-50%)', left: '2.5%'
                    }}>
                        <div style={{ backgroundColor: 'purple', position: 'absolute', bottom: '0', width: '100%', height: '5%', left: '0' }}>

                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'blue', width: '50%', height: '70%',
                        position: 'absolute', left: '40%', top: '60%', transform: 'translateY(-50%)'
                    }}>
                    </div>
                </Row>

            </Container >
        </>
    )
};