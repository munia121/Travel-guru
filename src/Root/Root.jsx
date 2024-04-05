
import { Outlet } from 'react-router-dom';
import NavBAr from '../component/NavBar/NavBAr';

const Root = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto'>
                <NavBAr></NavBAr>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;