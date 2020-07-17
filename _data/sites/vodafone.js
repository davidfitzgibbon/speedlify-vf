module.exports = {
	name: "Vodafone", // optional, falls back to object key
	description: "Vodafone web sites",
	options: {
		frequency: 60 * 23, // 24 hours
		freshChrome: "site",
	},
	urls: [
		"https://n.vodafone.ie/en.html",
		"https://topup.vodafone.ie/VodafoneIEExternalWeb/enter.do",
		"https://n.vodafone.ie/shop/bill-pay-phones.html",
		"https://n.vodafone.ie/shop/pay-as-you-go-phones.html",
		"https://n.vodafone.ie/shop/bill-pay-plans.html",
		"https://n.vodafone.ie/shop/pay-as-you-go-plans.html",
		"https://n.vodafone.ie/shop/broadband.html",
		"https://n.vodafone.ie/shop/tv.html",
		"https://n.vodafone.ie/support.html"
	]
};