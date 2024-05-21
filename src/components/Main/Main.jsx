import React, {useContext} from 'react';
import './Main.css'
import {assets} from "../../assets/assets.js";
import {Context} from "../../context/Context.jsx";

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=""/>
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card"
                                 onClick={() => setInput("Suggest beautiful places to see on an upcoming road trip")}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt=""/>
                            </div>
                            <div className="card"
                                 onClick={() => setInput("Briefly summarize this concept: urban planning")}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt=""/>
                            </div>
                            <div className="card"
                                 onClick={() => setInput("Brainstorm team bonding activities for our work retreat")}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt=""/>
                            </div>
                            <div className="card" onClick={() => setInput("Tell me about React js and React native")}>
                                <p>Tell me about React js and React native</p>
                                <img src={assets.code_icon} alt=""/>
                            </div>
                        </div>
                    </>
                    :
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt=""/>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt=""/>
                            {
                                loading ? <div className='loader'>
                                        <hr/>
                                        <hr/>
                                        <hr/>
                                    </div>
                                    :
                                    <p dangerouslySetInnerHTML={{__html: resultData}}></p>
                            }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => {
                            setInput(e.target.value)
                        }} onKeyUp={
                            (e) => {
                                if (e.key === 'Enter') {
                                    onSent();
                                }
                            }
                        } value={input} type="text" placeholder="Enter a prompt here"/>
                        <div className="icon-container">
                            <button><img src={assets.gallery_icon} alt=""/></button>
                            <button><img src={assets.mic_icon} alt=""/></button>
                            <button type="submit" onClick={() => {
                                onSent()
                            }}><img src={assets.send_icon} alt=""/></button>
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                        <a href="#">Your privacy and Gemini Apps</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;