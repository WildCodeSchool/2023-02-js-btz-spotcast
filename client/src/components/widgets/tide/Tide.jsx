import React, { useEffect } from 'react'
import ToggleButton from '../../utilities/ToggleButton'
import './Tide.css'

import tideShape from '../../../tide-shape.svg'

const Tide = ({
    date,
    formInfos,
    setFormInfos,
    TideDatas,
    grid,
    itemsToHide,
    setItemsToHide,
 }) => {

    const tideTime = TideDatas.map((el) => el.time);
    //Création d'un tableau qui contient tous les TimeStamps des marées

    let negative = -25000000;// Temps en ms = 8h30
    let positive = 25000000;// Temps en ms = 8h30

    let currentTide = "";
    let currentTideIndex = "";
    let currentTideinfos = "";

    let previousTide = "";
    let previousTideIndex = "";
    let previousTideinfos = "";

    let nextTide = "";
    let nextTideIndex = "";
    let nextTideinfos = "";


    for (let i = 0; i < tideTime.length; i++) {

        let result = new Date(tideTime[i]) - date;

        if ((result === 0) || ((result >= - 1800000) && (result <= 1800000))) {
            currentTide = tideTime[i];
            currentTideIndex = i;
            currentTideinfos = TideDatas[i];
        } else if ((result < 0) && (result > negative)) {
            negative = result;
            previousTide = tideTime[i];
            previousTideIndex = i;
            previousTideinfos = TideDatas[i];
        } else if ((result > 0) && (result < positive)) {
            positive = result;
            nextTide = tideTime[i];
            nextTideIndex = i;
            nextTideinfos = TideDatas[i];
        }
    }

    const elemItem = document.querySelector("#C")

    return (
        <div className='big-rectangle-width tide-card item-content' id="C">
            <div className="card-header">
                <p className="card-title">Tide</p>
                <ToggleButton
                    widgetName = "tide-widget"
                    formInfos={formInfos}
                    setFormInfos={setFormInfos}
                    grid={grid}
                    elemItem = {elemItem}
                    itemsToHide={itemsToHide}
                    setItemsToHide={setItemsToHide}
                />
            </div>
            <div className='card-content tide-content'>
                <div className='tide-shape'>
                    <div className={currentTide ? `circle ${currentTideinfos.type}` : `circle going-${nextTideinfos.type}`} ></div>
                    <img src={tideShape} alt="" />

                </div>
                {currentTide
                    ? <div className='tide-datas'>
                        <div className='low-tide'>
                            <p className='tide-data'>
                                {`${String(new Date(currentTideinfos.time).getHours()).padStart(2, "0")} : ${String(new Date(currentTideinfos.time).getMinutes()).padStart(2, "0")}`}
                            </p>
                            <p className='tide-text'>
                                {currentTideinfos.type} tide
                            </p>
                        </div>
                        <div className='high-tide'>
                            <p className='tide-data'>
                                {`${String(new Date(nextTideinfos.time).getHours()).padStart(2, "0")} : ${String(new Date(nextTideinfos.time).getMinutes()).padStart(2, "0")}`}
                            </p>
                            <p className='tide-text'>
                                {nextTideinfos.type} tide
                            </p>
                        </div>
                    </div>

                    : <div className='tide-datas'>
                        <div className='low-tide'>
                            <p className='tide-data'>
                                {`${String(new Date(previousTideinfos.time).getHours()).padStart(2, "0")}:${String(new Date(previousTideinfos.time).getMinutes()).padStart(2, "0")}`}
                            </p>
                            <p className='tide-text'>
                                {previousTideinfos.type} tide
                            </p>
                        </div>
                        <div className='high-tide'>
                            <p className='tide-data'>
                                {`${String(new Date(nextTideinfos.time).getHours()).padStart(2, "0")}:${String(new Date(nextTideinfos.time).getMinutes()).padStart(2, "0")}`}
                            </p>
                            <p className='tide-text'>
                                {nextTideinfos.type} tide
                            </p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Tide