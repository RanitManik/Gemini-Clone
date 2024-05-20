import React from 'react';
import './Sidebar.css';
import {assets} from "../../assets/assets.js";

const Sidebar = () => {
    const [extended, setExtended] = React.useState(false);
    return (
        <div className={`sidebar ${extended ? 'extended' : 'collapsed'}`}>
            <div className={`top  ${extended ? '' : 'centered'}`}>
                <div className="menu" onClick={() => setExtended(prev => !prev)}>
                    <img src={assets.menu_icon} alt="Menu Icon"/>
                </div>
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="Plus Icon"/>
                    <p className={`${extended ? 'block' : 'none'}`}>New Chat</p>
                </div>
                {extended &&
                    <div className="recent">
                        <p className={`recent-title fade ${extended ? 'block' : 'none'}`}>Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="Message Icon"/>
                            <p className={`${extended ? 'block' : 'none'}`}>What is ReactJS</p>
                        </div>
                    </div>
                }
            </div>
            <div className={`bottom  ${extended ? '' : 'centered'}`}>
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Question Icon"/>
                    <p className={`fade ${extended ? 'block' : 'none'}`}>Help</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="History Icon"/>
                    <p className={`fade ${extended ? 'block' : 'none'}`}>Activity</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings Icon"/>
                    <p className={`fade ${extended ? 'block' : 'none'}`}>Settings</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
