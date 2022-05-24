import React from 'react';
import './RmProjectCart.css'
import ArrowRight from "../../../img/arrow_right.png";
import VideoImg from "../../../img/video_icon.png"
import PhotoImg from "../../../img/img_icon.png"
import Commentaries from "./commentaries";
import ArrowImg from "../../../img/chat_arrow.png"

function RmProjectCart(){
    return(
        <div className="cartproject">
            <div className="title">
                <p>Дорожная карта</p>
                <img src={ArrowRight} alt=""/>
                <p>Проекты</p>
                <img src={ArrowRight} alt=""/>
                <p>Карточка проекта</p>
            </div>
            <div className="cartproject_area">
                <div className="cartproject_header">
                    <div className="cartprojct_header_block1">
                        <p>Направление</p>
                        <p className="grayblock">Умный городской транспорт</p>
                    </div>
                    <div className="cartprojct_header_block2">
                        <div className="dta">
                            <p>Дата:</p>
                            <p className="_ml">03.02.2022</p>
                        </div>
                        <div className="dta">
                            <p>Время:</p>
                            <p className="_ml">15:00</p>
                        </div>
                        <div className="dta">
                            <p>Адрес:</p>
                            <p className="_ml">г. Новороссийск, ул. Калатушкина 01</p>
                        </div>
                    </div>
                </div>
                <p className="_fz25">Создание безопасных и комфортных мест ожидания общественного транспорта</p>
                <div className="cartproject_main">
                    <div className="cartproject_infoblock">
                        <div>
                            <div className="cartproject_responsible">
                                <p>Ответственный</p>
                                <p className="grayblock">МБУ «АПК Безопасный город - ЕДДС»</p>
                            </div>
                            <div className="cartproject_status">
                                <p>Статус</p>
                                <div className="cartproject_status_block">
                                    <div className="cartproject_statuscircle _yellow"></div>
                                    <p>В процессе</p>
                                </div>
                            </div>
                            <div className="cartproject_iqreport">
                                <a href="src/components/main/area/rm-project/links/RmProjectCart" className="cartproject_iqreportbtn">IQ</a>
                                <a href="src/components/main/area/rm-project/links/RmProjectCart" className="cartproject_iqreportbtn">Отчёт</a>
                            </div>
                            <div className="cartproject_videophoto">
                                <a href="src/components/main/area/rm-project/links/RmProjectCart" className="cartproject_videophotobtn">
                                    <img src={PhotoImg} alt=""/>
                                </a>
                                <a href="src/components/main/area/rm-project/links/RmProjectCart" className="cartproject_videophotobtn">
                                    <img src={VideoImg} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="cartproject_tasksbtn">
                            <a href="src/components/main/area/rm-project/links/RmProjectCart">Задачи по проекту</a>
                        </div>
                    </div>
                    <div className="cartproject_line"></div>
                    <div className="cartproject_commentaries">
                        <div className="cartproject_commentarieshistory">
                            <Commentaries name="Наталья" date="22.04.2022 23:46" text="Добрый вечер,по проекту “Создание безопасных и комфортных мест ожидания общественного транспорта”, сегодня проставлены основные задачи категорий и их выполение."/>
                            <Commentaries name="Артём" date="23.04.2022 20:45 " text="Добрый вечер, с Техническим заданием ознакомлен, готов к выполнению."/>
                            {/*<Commentaries name="Ольга" date="25.04.2022 18:43 " text="Добрый вечер, первую часть ТЗ отдел А выполнил."/>*/}
                        </div>
                        <div className="cartproject_write">
                            <input type="text" className="cartproject_input"/>
                            <div className="cartprojct_sendbtn">
                                <img src={ArrowImg} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RmProjectCart;