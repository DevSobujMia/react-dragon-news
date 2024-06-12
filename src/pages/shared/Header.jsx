import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto mt-6 mb-2' src={logo} alt="" />
            <p className='text-xl mt-4'>Journalism Without Fear or Favour</p>
            <p className="text-2xl mt-2 mb-6">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;