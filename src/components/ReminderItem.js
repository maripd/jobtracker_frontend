import '../App.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { renderMatches, useParams } from 'react-router-dom'

const BASE_URL = 'https://marijobtracker.herokuapp.com'

const ReminderItem = (props) => {
  const completeHandleClick = async (e) => {
    console.log(props.id)
    const response = await axios.put(`${BASE_URL}/updatereminder/${props.id}`, {
      isComplete: true,
      reminderText: props.remindText,
      jobId: props.jobId
    })
    //definition getremindersdata is called from home line 65
    props.completed()
  }

  return (
    <div>
      <div className="mainremind-container ">
        <div className="circle-btn" onClick={completeHandleClick}></div>
        <li className="jobdetails-container">
          <p className="reminddetail-company">{props.companyName}</p>
          <p className="reminder-text">{props.remindText}</p>
        </li>
      </div>
    </div>
  )
}

export default ReminderItem
