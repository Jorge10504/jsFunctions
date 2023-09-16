function isLeap(year){
    if (year % 4 === O){
        if (year % 100 === 0){
            if (year % 400 === 0){
                return "The year " + year + "is a leap year."
            } else {
                return "The year " + year + "is not a leap year."
            }
        } else {
            return "The year " + year + "is a leap year."
        }
    } else {
        return "The year " + year + "is not a leap year."
    }
}