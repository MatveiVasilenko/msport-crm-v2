export const createFormatDate = (date) => {

	let day = String(date).substring(8, 10)
	let mounth = String(date).substring(4, 7)
	if (mounth === 'Jan') {
		mounth = '01'
	} else if (mounth === 'Feb') {
		mounth = '02'
	} else if (mounth === 'Mar') {
		mounth = '03'
	} else if (mounth === 'Apr') {
		mounth = '04'
	} else if (mounth === 'May') {
		mounth = '05'
	} else if (mounth === 'Jun') {
		mounth = '06'
	} else if (mounth === 'Jul') {
		mounth = '07'
	} else if (mounth === 'Aug') {
		mounth = '08'
	} else if (mounth === 'Sep') {
		mounth = '09'
	} else if (mounth === 'Oct') {
		mounth = '10'
	} else if (mounth === 'Nov') {
		mounth = '11'
	} else if (mounth === 'Dec') {
		mounth = '12'
	}
	let year = String(date).substring(11, 15)
	let dates = year + '-' + mounth + '-' + day

	return dates
}