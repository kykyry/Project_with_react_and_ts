import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav>
            <span>React </span>
            <span>
                <Link to='/'>Products</Link>
                <Link to='/about'>About</Link>
            </span>
        </nav>
    )
}