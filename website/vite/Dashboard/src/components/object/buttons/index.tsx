import '../../css/navbar.css';
import { TbMenu, TbX } from 'react-icons/tb';


function PhoneButton() {

  return (
    <button className="pm">
        <div className="lmenu">
            <TbMenu size={24} />
        </div>
    </button>
  )
}

export default PhoneButton