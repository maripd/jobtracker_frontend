import '../App.css'
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReminderItem = (props) => {
  let { id } = useParams()

  const completeHandleClick = async () => {
    const response = await axios.put(
      `http://localhost:3001/updatereminder/${id}`,
      {
        isComplete: true
      }
    )
  }

  return (
    <div className="mainremind-container">
      <div className="circle-btn" onClick={completeHandleClick}></div>
      <li className="jobdetails-container">
        <p className="reminddetail-company">{props.companyName}</p>
        <p className="reminder-text">{props.remindText}</p>
      </li>
    </div>
  )
}

export default ReminderItem
