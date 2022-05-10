//Question 2 -
function cleanData(userInput) {
  //DOM purify library included to sanitize user input
  return DOMPurify.sanitize(userInput);
}

// Question 3 -

// Array objects database of all records
const records = [
  { user_id: 1, device: "Windows 10", action: "start", date_actioned: 100 },
  { user_id: 2, device: "OSX 15.4", action: "start", date_actioned: 200 },
  { user_id: 1, device: "iPhone 8s", action: "start", date_actioned: 250 },
  { user_id: 1, device: "Windows 10", action: "stop", date_actioned: 370 },
  { user_id: 1, device: "iPhone 8s", action: "stop", date_actioned: 410 },
  { user_id: 2, device: "OSX 15.4", action: "stop", date_actioned: 490 },
  { user_id: 3, device: "Android 9.1", action: "start", date_actioned: 700 },
];

const getUsers = (records, action, start_time, end_time) => {
  //Parameters relating to question
  let result = []; // Empty array
  for (
    let i = 0;
    i < records.length;
    i++ //Iterate through each object value within the array
  )
    if (
      //Conditional statement to match question requirements
      records[i].action === action &&
      records[i].date_actioned >= start_time &&
      records[i].date_actioned <= end_time
    ) {
      result.push(records[i].user_id); // push resulting userIDs in results array
    }
  return `The UserID's returned are User_ID ${result}`;
};

//Question 4 -
const getPlaybackTime = (user_id, records) => {
  //User id and records as parameteres
  // Declare variables
  let device = "";
  let startTime = 0;
  let total = 0;

  // iterate through array
  for (let i = 0; i < records.length; i++) {
    let currentRecord = records[i]; // Declare current record variable
    if (currentRecord.user_id !== user_id) {
      // If the current user id doesn't match the user id input continue forward
      continue;
    }
    if (!device) {
      startTime = currentRecord.date_actioned;
    } // if the device does not match the current records device and is equal to the action it will the device as the current device
    if (device !== currentRecord.device && currentRecord.action === "start") {
      device = currentRecord.device;
    } else if (
      device === currentRecord.device &&
      currentRecord.action === "stop"
    ) {
      // resulting in the stop and start time calculation - giving the unique playBack time
      total += currentRecord.date_actioned - startTime;
      device = "";
    }
  }
  return total;
};
