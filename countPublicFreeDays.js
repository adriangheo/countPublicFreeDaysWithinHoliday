import { DateTime} from "luxon";
import { publicHolidays } from "./publicHolidays.js";

let newHoliday  = {
    userId: '7',
    startDate: '2022-11-29',
    endDate: '2022-12-04',
    noOfDaysSelected: '9',
    approvalStatus: false,
    managerId: '7',
    teamId: '1',
    id: 85
}

const getPublicFreeDays = newHoliday => {
    const startDate = DateTime.fromISO(newHoliday.startDate);
    const endDate = DateTime.fromISO(newHoliday.endDate);
  
    let weekendCount = 0;
    let currentDate = startDate;
    while (currentDate <= endDate) {
        console.log("currentDate:", currentDate.toFormat("yyyy-MM-dd"))
        if (
                currentDate.weekday == 6 ||    // either day is a Saturday
                currentDate.weekday == 7 ||    // OR day is a Sunday
                publicHolidays.includes(currentDate.toFormat("yyyy-MM-dd"))   // OR day is a publicHoliday
            )
            {
                weekendCount++;
            }
        currentDate = currentDate.plus({ days: 1 });
    }
  
    return weekendCount;
  };


let nrOfWeekends = getPublicFreeDays(newHoliday);

console.log(nrOfWeekends)
