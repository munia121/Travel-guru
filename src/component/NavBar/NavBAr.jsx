import logo from '../../assets/logo.png'

const NavBAr = () => {

    const navLinks = <>
        <li><a>News</a></li>
        <li><a>Destination</a></li>
        <li><a>Blog</a></li>
        <li><a>Content</a></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"> <img className='w-28' src={logo} alt="" /> </a>
                    <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs ml-10" />
                </div>
                <div className="navbar-end hidden lg:flex"> 
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default NavBAr;