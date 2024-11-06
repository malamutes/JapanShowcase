import { Card, Container, Row, Col, Image } from "react-bootstrap"
import './Food.css'

interface FoodCardProps {
    image: string,
    titleEng: string,
    titleJap: string,
    desc: string,
    activeElement: boolean,
    color: string

}

export default function FoodCard(props: FoodCardProps) {
    return (
        <>
            <Card className={`FoodCardDefault ${props.activeElement ? "FoodCardActive" : ""}`}
                style={{ backgroundColor: 'rgb(50, 50, 50)', color: 'white', '--colour': props.color } as React.CSSProperties}>

                <Card.Img src={props.image} draggable={false} />


                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card.Title style={{ textAlign: 'center' }}>{props.titleEng}</Card.Title>
                    <Card.Subtitle className="mb-2" style={{ textAlign: 'center' }}>{props.titleJap}</Card.Subtitle>
                    <hr style={{ '--colour': props.color, margin: '0.5cqw 0' } as React.CSSProperties} className={`Line ${props.activeElement ? "LineActive" : ""}`} />
                    <Card.Text style={{ textAlign: 'center' }}>
                        {props.desc}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}