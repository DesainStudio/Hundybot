import './object/infos/index.css';
import { FiSettings } from 'react-icons/fi';
import LastUpdate from './object/infos/lastupdate';
import Aenderung from './object/infos/aenderung';
import MainAenderung from './object/infos/mainaeanderung';


function Infos() {

  return (
    <div className='infos'>
      <LastUpdate />
      <Aenderung />
      <MainAenderung />
    </div>
  )
}

export default Infos