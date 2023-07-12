import Navbar from "../components/navbar";
import Einstellung from "../components/object/buttons/einstellung";
import Infos from "../components/infos";
import BotCounts from "../components/botcounts";

export default function Root() {
  return (
    <>
    <Einstellung />
      <Navbar />
      <Infos />
    <BotCounts />
    </>
  );
}