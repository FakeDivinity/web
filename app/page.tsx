import React from 'react';

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Classroom Info</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Announcements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/chat">Chat</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <h1>Announcements</h1>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Welcome to the Classroom Info Site!</h5>
            <p className="card-text">This is a central place for all important announcements regarding our class. Please check back regularly for updates.</p>
            <p className="card-text"><small className="text-muted">Posted on February 16, 2026</small></p>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Upcoming Exam Schedule</h5>
            <p className="card-text">The schedule for the upcoming mid-term exams has been posted on the course syllabus. Make sure to review it carefully.</p>
            <p className="card-text"><small className="text-muted">Posted on February 15, 2026</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}
