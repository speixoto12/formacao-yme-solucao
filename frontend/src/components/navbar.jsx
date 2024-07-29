import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="border-2 ">
      <div className="container-fluid h-14 space-x-4 flex items-center justify-center w-full">
        <Link className="hover:underline" to="/">Home</Link>
        <Link className="hover:underline" to="/todos">Todos</Link>
      </div>
    </nav>
  )
}