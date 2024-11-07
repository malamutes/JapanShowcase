import './Entertainment.css'
import { Card, Image } from 'react-bootstrap'

interface EntertainmentCardProps {
    image: string,
    desc: string,
    title: string,
    color: string,
    borderColour: string
}

export default function EntertainmentCard(props: EntertainmentCardProps) {
    return (
        <>
            <div className='DivTop' style={{ border: `0.25cqw double ${props.borderColour}`, borderRadius: '12.5px' }}>
                <div className='Div1' >
                    <Card style={{ backgroundColor: props.color, minHeight: '350px' }}>
                        <Card.Body>
                            <Card.Title >{props.title}</Card.Title>
                            <Card.Text style={{ marginTop: '2.5cqw', maxWidth: '15cqw', lineHeight: '2' }}>
                                {props.desc}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className='Div2' >
                    <Image src={props.image} style={{ minWidth: '100%' }} />
                </div>

            </div>


        </>
    )
}