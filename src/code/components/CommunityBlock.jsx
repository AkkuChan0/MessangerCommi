import CalendarButton from "./CalendarButton"
import InformationButton from "./InformationButton"
import TaskManagerButton from "./TaskManagerButton";

const CommunityBlock = () => {
    return (
        <div className="community-block">
            <CalendarButton></CalendarButton>
            <InformationButton></InformationButton>
            <TaskManagerButton></TaskManagerButton>
        </div>
    )
}

export default CommunityBlock;