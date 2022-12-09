import createjob from './createjob.css'

const CreateJob = () => {
  return (
    <div className="main-container">
      <header>Mari</header>
      <form>
        <h3>Create Job</h3>
        <input className="form-item" placeholder="company name" />
        <input className="form-item" placeholder="job title" />
        <input className="form-item" type="url" placeholder="job listing url" />
        <input className="form-item" placeholder="date job added" />
        <input className="form-item" placeholder="date applied" />
        <input className="form-item" placeholder="application status" />
        <input className="form-item" placeholder="job listing email" />
        <textarea
          className="form-item"
          id="textarea-reminder"
          placeholder="Reminders"
        />
        <textarea
          className="form-item"
          id="textarea-notes"
          placeholder="Notes"
        />
        <textarea className="form-item" id="textarea-urls" placeholder="URLs" />
      </form>
    </div>
  )
}

export default CreateJob
