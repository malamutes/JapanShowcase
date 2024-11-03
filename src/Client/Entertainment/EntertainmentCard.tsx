import './Entertainment.css'
import { Image, Offcanvas } from 'react-bootstrap'

interface EntertainmentCardProps {
    front: string,
    back: string
}

export default function EntertainmentCard(props: EntertainmentCardProps) {
    const aspectRatio1 = 0.6;
    return (
        <>
            <div className='DivTop'>
                <div className="Div1">
                    <Image fluid src={props.front} style={{ aspectRatio: `${aspectRatio1}` }} rounded />
                </div>
                <div className="Div2">
                    <Image fluid src={props.back} style={{ aspectRatio: `${aspectRatio1}` }} rounded />
                </div>
            </div>
        </>
    )
}