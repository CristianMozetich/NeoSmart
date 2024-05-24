import SearchNavIcon from "../icons/SearchNav";
import QuestIcon from "../icons/QuestIcon"
import ModeIcon from "../icons/Mode"
import ButtonNav from "../ButtonNav/ButtonNav";
export default function NavBar() {
    return(
        <header className="bg-tertiarySlate h-12 top-0 w-full fixed flex justify-end z-10 items-center gap-4">
            <SearchNavIcon />
            <QuestIcon/> 
            <ModeIcon/>
            <ButtonNav/>
        </header>
    )
}