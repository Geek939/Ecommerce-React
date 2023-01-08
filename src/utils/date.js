export const changeDateFormat = (oldFormat) => {

    const newDate= new Date (oldFormat).getTime()
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }

    return newDate.toLocaleDateString("en-En", options)
}