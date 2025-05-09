import '../styles/left-panel.scss';

import { default as Search } from '../components/Search';
import CommunityBlock from '../components/CommunityBlock';
import ChatList from '../components/ChatList';
import FastAccessBlock from '../components/FastAccessBlock';

const LeftPanel = (props) => {
    return (
        <div className="left-panel" style={{"width": String(props.width.selectBlockWidth) + "px" }}>
            <Search></Search>
            <div className='scroll-block'>
                <CommunityBlock></CommunityBlock>
                <ChatList></ChatList>
            </div>
            <FastAccessBlock></FastAccessBlock>
        </div>
    )
}

export default LeftPanel;