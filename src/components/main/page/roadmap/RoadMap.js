import React, { Component } from 'react'
import './roadmap_style.css';
import ArrowRight from "../../img/arrow_right.png";
import Another from "../../img/another.png";
import Video from "../../img/video_icon.png";
import Camera from "../../img/img_icon.png";
import {Link} from "react-router-dom";

export default class RoadMap extends Component{
    render() {
        return (
            <div className="rm_project">
                <div className="title">
                    <p>Дорожная карта</p>
                    <img src={ArrowRight} alt=""/>
                    <p>Проекты</p>
                </div>
                <div className='area__road-map'>
                    <table cellSpacing="0">
                        <tr>
                            <td className='top-cell left-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>Направление</div>
                                </div>
                            </td>
                            <td className='top-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>Проект</div>
                                </div>
                            </td>
                            <td className='top-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>Дата/Время</div>
                                </div>
                            </td>
                            <td className='top-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>Ответственный</div>
                                </div>
                            </td>
                            <td className='top-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>Статус</div>
                                </div>
                            </td>
                            <td className='top-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>IQ</div>
                                </div>
                            </td>
                            <td className='top-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>Фото/видео</div>
                                </div>
                            </td>
                            <td className='top-cell right-cell'>
                                <div className='_cc'>
                                    <div className='up-cell'>Отчёт</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='left-cell'>
                                <div className='cell-two-block'><p className='cell-two-block _fz18'>IV</p><h1
                                    className='_fz18'>Умный городской транспорт </h1></div>
                            </td>
                            <td>
                                <div className='cell-two-block2'><p className='cell-two-block'>24.1</p><h1>Создание
                                    системы администрирования городского парковочного пространства</h1></div>
                            </td>
                            <td><p>09.05.2022</p></td>
                            <td><p className='illuminated'>Управление транспорта и дорожного хозяйства (УИЗО)</p></td>
                            <td><p>Выполняется</p></td>
                            <td><Link to='/project_cart'>Показать</Link></td>
                            <td>
                                <div className='vidcam'><a href="src/components/main/area/rm-project/RM-Project"><img
                                    src={Camera} alt=""/></a><a
                                    href="src/components/main/area/rm-project/RM-Project"><img src={Video} alt=""/></a>
                                </div>
                            </td>
                            <td className='right-cell'><a href="src/components/main/area/rm-project/RM-Project"><img
                                src={Another} alt=""/></a></td>
                        </tr>
                        <tr>
                            <td className='left-cell'>
                                <div className='cell-two-block'><p className='cell-two-block _fz18'>IV</p><h1
                                    className='_fz18'>Умный городской транспорт </h1></div>
                            </td>
                            <td>
                                <div className='cell-two-block2'><p className='cell-two-block'>25.1</p>
                                    <h1>Интеллектуальное управление городским общественным транспортом</h1></div>
                            </td>
                            <td><p>01.05.2022</p></td>
                            <td><p className='illuminated'>МБУ «АПК Безопасный город - ЕДДС»</p></td>
                            <td><p>Просрочено</p></td>
                            <td><Link to='/project_cart'>Показать</Link></td>
                            <td>
                                <div className='vidcam'><a href="src/components/main/area/rm-project/RM-Project"><img
                                    src={Camera} alt=""/></a><a
                                    href="src/components/main/area/rm-project/RM-Project"><img src={Video} alt=""/></a>
                                </div>
                            </td>
                            <td className='right-cell'><a href="src/components/main/area/rm-project/RM-Project"><img
                                src={Another} alt=""/></a></td>
                        </tr>
                        <tr>
                            <td className='left-cell'>
                                <div className='cell-two-block'><p className='cell-two-block _fz18'>IV</p><h1
                                    className='_fz18'>Умный городской транспорт </h1></div>
                            </td>
                            <td>
                                <div className='cell-two-block2'><p className='cell-two-block'>26.1</p><h1>Создание
                                    безопасных и комфортных мест ожидания общественного транспорта</h1></div>
                            </td>
                            <td><p>01.06.2022</p></td>
                            <td><p className='illuminated'>Управление транспорта и дорожного хозяйства</p></td>
                            <td><p>В работе</p></td>
                            <td><Link to='/project_cart'>Показать</Link></td>
                            <td>
                                <div className='vidcam'><a href="src/components/main/area/rm-project/RM-Project"><img
                                    src={Camera} alt=""/></a><a
                                    href="src/components/main/area/rm-project/RM-Project"><img src={Video} alt=""/></a>
                                </div>
                            </td>
                            <td className='right-cell'><a href="src/components/main/area/rm-project/RM-Project"><img
                                src={Another} alt=""/></a></td>
                        </tr>
                        {/* сюды вставку */}
                        <tr>
                            <td className='left-cell bottom-cell'>
                                <div className='cell-two-block'><p className='cell-two-block _fz18'>IV</p><h1
                                    className='_fz18'>Умный городской транспорт </h1></div>
                            </td>
                            <td className='bottom-cell'>
                                <div className='cell-two-block'><p className='cell-two-block'>27.1</p><h1>Создание
                                    системы мониторинга состояния дорожного полотна</h1></div>
                            </td>
                            <td className='bottom-cell'><p>01.07.2022</p></td>
                            <td className='bottom-cell'><p className='illuminated'>Управление транспорта и дорожного
                                хозяйства</p></td>
                            <td className='bottom-cell'><p>В работе</p></td>
                            <td className='bottom-cell'><Link to='/project_cart'>Показать</Link></td>
                            <td className='bottom-cell'>
                                <div className='vidcam'><a href="src/components/main/area/rm-project/RM-Project"><img
                                    src={Camera} alt=""/></a><a
                                    href="src/components/main/area/rm-project/RM-Project"><img src={Video} alt=""/></a>
                                </div>
                            </td>
                            <td className='right-cell bottom-cell'><a
                                href="src/components/main/area/rm-project/RM-Project"><img src={Another} alt=""/></a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}
