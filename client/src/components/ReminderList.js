const ReminderList = (props) => {
  return (
    <div className="mainremind-container">
      <li className="jobdetails-container">
        <p className="reminddetail-company">{props.companyName}</p>
        <p className="reminder-text">{props.remindText}</p>
        <p className="application-status">{props.applicationStatus}</p>
      </li>
    </div>
  )
}

export default ReminderList
