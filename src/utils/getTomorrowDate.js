function getTomorrowDate() {
	const tomorrow = new Date()
	tomorrow.setDate(tomorrow.getDate() + 1)
	return tomorrow
}

export default getTomorrowDate;
