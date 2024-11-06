import './Entertainment.css'
import { Card, Image } from 'react-bootstrap'

interface EntertainmentCardProps {
    image: string,
    desc: string,
    title: string,
    color: string
}

export default function EntertainmentCard(props: EntertainmentCardProps) {
    return (
        <>
            <div className='DivTop' >
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
                    <Image fluid src={props.image} />
                </div>

            </div>


        </>
    )
}