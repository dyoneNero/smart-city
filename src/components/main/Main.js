import React, { Component } from 'react'
//------------------------------STYLE
import "./main_style.css"
//------------------------------IMAGE
import RoadMapImg from './img/road_map.png';
import IQImg from './img/iq.png';
import TasksImg from './img/tasks.png';
import StaffImg from './img/staff.png';
import CommerceImg from './img/commerce.png';
import AnalyticsImg from './img/analytics.png';
import DiskImg from './img/disk.png';
import ChatImg from './img/chat.png';
import CameraImg from './img/camera.png';
import SettingsImg from './img/settings.png';

//------------------------------AREA
import Default from "./page/default/default";
import RoadMap from "./page/roadmap/RoadMap";
import IQ from './page/iq/IQ'
import RmProjectCart from "./page/roadmap/links/RmProjectCart";
//------------------------------ROUTER
import {Routes, Route} from "react-router-dom";
//------------------------------BUTTON
import Button from "./Button";
import Tasks from "./page/tasks/Tasks";
import Worker from "./page/staff/Worker";
import Commerce from "./page/commerce/Commerce";
import Analytics from "./page/analytics/Analytics";
import Disk from "./page/disk/Disk";
import Chat from "./page/chat/Chat";
import Vcs from "./page/vcs/Vcs";

export default class Main extends Component {
    render() {
        return (
            <div className='main'>
                <div className='menu__list-btn'>
                    <div className='menu__group-btn'>
                        <Button textBtn="Дорожная карта(ДК)" imageBtn={RoadMapImg} linkBtn="/roadmap"/>
                        <Button textBtn="KPI-Показатели IQ" imageBtn={IQImg} linkBtn="/iq"/>
                        <Button textBtn="Задачи" imageBtn={TasksImg} linkBtn="/tasks"/>
                        <Button textBtn="Сотрудники" imageBtn={StaffImg} linkBtn="/staff"/>
                        <Button textBtn="Коммерческие предложения" imageBtn={CommerceImg} linkBtn="/commerce"/>
                    </div>
                    <div className='menu__group-btn'>
                        <Button textBtn="Аналитика/отчеты" imageBtn={AnalyticsImg} linkBtn="/analytics"/>
                        <Button textBtn="Документы" imageBtn={DiskImg} linkBtn="/disk"/>
                        <Button textBtn="Чаты" imageBtn={ChatImg} linkBtn="/chat"/>
                        <Button textBtn="ВКС" imageBtn={CameraImg} linkBtn="/camera"/>
                    </div>
                    <div className='menu__group-btn'>
                        <Button textBtn="Настройки" imageBtn={SettingsImg} linkBtn="/settings"/>
                    </div>
                </div>
                <div className="main__line"></div>
                <div className='main__area'>
                    <Routes>
                        <Route path="/" element={<Default/>}/>
                        <Route path="/roadmap" element={<RoadMap/>}/>
                        <Route path="/iq" element={<IQ/>}/>
                        <Route path="/project_cart" element={<RmProjectCart/>}/>
                        <Route path="/tasks" element={<Tasks/>}/>
                        <Route path="/staff" element={<Worker/>}/>
                        <Route path="/commerce" element={<Commerce/>}/>
                        <Route path="/analytics" element={<Analytics/>}/>
                        <Route path="/disk" element={<Disk/>}/>
                        <Route path="/chat" element={<Chat/>}/>
                        <Route path="/camera" element={<Vcs/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}