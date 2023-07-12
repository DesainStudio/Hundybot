import '../index.css';
import { FiSettings } from 'react-icons/fi';
import ServerCount from './object/botcounts/servercount';
import BefehlAnzahl from './object/botcounts/befehlanzahl';
import CommitAnzahl from './object/botcounts/commitanzahl';
import ButtonAnzahl from './object/botcounts/buttonanzahl';


function BotCounts() {

  return (
    <div className='botcounts'>
      <h2>
        Bot Counts
      </h2>
      <section>
        <ServerCount />
      </section>
      <section>
        <BefehlAnzahl />
      </section>
      <section>
        <ButtonAnzahl />
      </section>
      <section>
        <CommitAnzahl />
      </section>
    </div>
  )
}

export default BotCounts