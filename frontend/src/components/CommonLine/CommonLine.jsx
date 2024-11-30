import { Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LeftArroow from '../../assets/images/LeftArrow.svg'

const CommonLine = ({title}) => {
    return (
        <Link className='d-flex align-items-center text-decoration-none rounded_border bg_secondary p-3 mb-4'>
            <Button variant='dark' className='back-button bg_primary rounded-pill me-3'>
                <Image className='img-fluid' src={LeftArroow} />
            </Button>
            <span className='same_poppins_1'>
                {title}
            </span>
        </Link>
    )
}

export default CommonLine
