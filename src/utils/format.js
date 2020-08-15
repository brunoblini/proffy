const subjects = [
  "Arts",
  "Biology",
  "Sciences",
  "Physical Education",
  "Physics",
  "Geography",
  "History",
  "Math",
  "English",
  "Chemistry",
]

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

// Functionalities 

function getSubject(subjectNumberId) {
  const position = +subjectNumberId - 1
  return subjects[position]
}

function convertHoursToMinutes(time) {
  const [hour, minutes] = time.split(':')
  return Number((hour * 60) + minutes )
}

module.exports = { 
  subjects,
  weekdays,
  getSubject,
  convertHoursToMinutes
}