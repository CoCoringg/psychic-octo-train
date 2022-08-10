import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import './assets/css/mdb.dark.min.css';
import './assets/css/mdb.dark.rtl.min.css';
import './assets/css/mdb.min.css';
import './assets/css/mdb.rtl.min.css';
import './assets/css/bar.css';
import SearchBar from './SearchBar';
import ChatRoom from './ChatRoom';
import ChatMessageList from './ChatMessageList';

const ChatRoomList = ({chatRoomId, chatMessage, roomList, setRoomName}) => {

    return (
        
            <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 p-3">

                {/**검색바 */}
                <SearchBar />

                <div className="bar" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
                    <ul className="list-unstyled mb-0">
                        {/**채팅방 */
                            roomList.map((e) => (
                                <ChatRoom
                                    key={e.no}
                                    chatMessage={chatMessage}
                                    chatRoomId={chatRoomId}
                                    setRoomName = {setRoomName}
                                    chatRoomName = {e.name}
                                    roomNo = {e.no}
                                    />
                            ))
                            
                        }
                    </ul>
                </div>
            </div>
        
    );
};

export default ChatRoomList;