import './Alljobs.css'

const AllJobs = (props) => {
  return (
    <div className="alljobs-container">
      <li className="alljobs-list">
        <h3 class="jobcard-detail">{props.companyName}</h3>
        <span class="jobcard-detail">{props.jobTitle}</span>
        <span class="jobcard-detail">{props.hiringStatus}</span>
        <span class="jobcard-detail">{props.applicationStatus}</span>
        <span class="jobcard-detail">{props.statusBar}</span>
        <div className="status-bar"></div>
      </li>
    </div>
  )
}
export default AllJobs
