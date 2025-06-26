const removeWeekendIdx = (timelogs, startDay) => {
    timelogs.map((schedule) => {
        // console.log('schedule = ', schedule)
        const len = schedule.length - 1
        switch(startDay) {
            case 1: {
                // 월화수목금토일
                schedule.splice(len - 1, 2)
                break;
            }
            case 2: {
                // 화수목금토일월
                schedule.splice(len - 2, 2)
                break;
            }
            case 3: {
                // 수목금토일월화
                schedule.splice(len - 3, 2)
                break;
            }
            case 4: {
                // 목금토일월화수
                schedule.splice(len - 4, 2)
                break;
            }
            case 5: {
                // 금토일월화수목
                schedule.splice(len - 5, 2)
                break;
            }
            case 6: {
                // 토일월화수목금
                schedule.splice(0, 2)
                break;
            }
            case 7: {
                // 일월화수목금토
                schedule.splice(0, 1)
                // 월화수목금토
                schedule.splice(-1 , 1)
                break;
            }
        }
        return schedule
    })
    return timelogs
}

const checkCommuteTime = (schedules, timelogs) => {
    let result = 0;
    schedules.forEach((target, idx) => {
        let targetH = Math.trunc(target / 100);
        let targetM = target % 100;
        if(targetM >= 50) {
            targetH += 1;
            targetM -= 50
        } else {
            targetM += 10;
        }
        // console.log('targetH = ', targetH, 'targetM = ', targetM)
        const checkTimelog = timelogs[idx]
        const isEarly = checkTimelog.map((time) => {
            const checkH = Math.trunc(time/ 100);
            const checkM = time % 100;
            // console.log('checkH = ', checkH, 'checkM = ', checkM);
            if(checkH < targetH) {
                return true;
            } else if(checkH === targetH && checkM <= targetM) {
                return true;
            } else {
                return false;
            }
        }).filter((v) => v)

        if(isEarly.length === 5) {
            result += 1;
        }
    })
    return result;
}
const solution = (schedules, timelogs, startday) => {
    // 주말은 영향 X
    let count = 0;
    const filteredTimelogs = removeWeekendIdx(timelogs, startday)
    const result = checkCommuteTime(schedules, filteredTimelogs)
    return result;

    
}

