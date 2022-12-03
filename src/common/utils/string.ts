export function isNumber(number?: number | string): boolean {
	return !isNaN(parseFloat(String(number))) && isFinite(Number(number));
}

export function currencyFormat(number?: number | string): string {
	if (!isNumber(number)) return String(number);
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	}).format(Number(number));
}

export function minutesToHoursString(length: number): string {
	const m = length % 60;
	const h = (length - m) / 60;
	return `${h}h ${m}m`;
}
