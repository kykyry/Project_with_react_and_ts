import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className='navigation'>
            <span className='navigationName'>My online store</span>
            <span>
                <Link to='/' className='navigationLink'>Products</Link>
                <Link to='/about' className='navigationLink'>About</Link>
            </span>
        </nav>
    )
}