//use tabs from react bootstrap and paly around with it
import './LandmarkTab.css'
import { Row, Col, Container, Tab, Tabs, Image } from "react-bootstrap"

export default function LandmarkTab() {
    const loremTable = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"];
    return (
        <>
            <Container>
                <Tabs
                    defaultActiveKey={loremTable[0]}
                    id="uncontrolled-tab-example"
                >
                    {loremTable.map((title) => (
                        <Tab eventKey={title} title={title}>
                            <Row>
                                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                                    <span style={{ maxWidth: '80%', marginTop: '125px', marginBottom: '100px' }}>
                                        <p>Tab content for {title}.</p>
                                        <p>  Lorem ipsum dolor sit amet, consectetur a
                                            dipiscing elit. Vivamus suscipit, eros sit amet cursus venenatis,
                                            nulla nunc ullamcorper nisl, id laoreet nulla libero ac eros.
                                            Cras sollicitudin libero ut turpis gravida, ut scelerisque odio tincidunt.
                                            Morbi aliquam elit turpis, vel blandit justo fermentum at.
                                            Donec auctor, risus sit amet interdum facilisis, ligula leo suscipit dui,
                                            vel eleifend nulla sapien vel ex. Nunc ac turpis id eros facilisis suscipit.
                                            Nullam volutpat fringilla risus at aliquet. Etiam a arcu id dolor dapibus tincidunt sit amet et nulla.
                                        </p>

                                        <p>Phasellus in cursus ante. Vivamus faucibus, ipsum ac consequat facilisis,
                                            elit odio euismod purus, vel placerat lorem felis ac nunc. Sed tincidunt lectus felis,
                                            id dictum neque gravida id. Proin auctor laoreet ipsum ac sollicitudin. Pellentesque habitant
                                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam molestie gravida sapien,
                                            sit amet egestas enim rhoncus et. Ut pellentesque metus ac volutpat tristique. Integer gravida,
                                            urna nec venenatis faucibus, nisl urna congue ligula, vitae tincidunt libero arcu ac mi.</p>
                                    </span>


                                </Col>

                                <Col style={{ display: 'grid', placeItems: 'center' }}>
                                    <Image src='https://placehold.co/500x500' roundedCircle
                                        style={{ marginTop: '100px', marginBottom: '100px' }} />
                                </Col>
                            </Row>

                        </Tab>
                    ))}
                </Tabs >
            </Container >

        </>
    )
}