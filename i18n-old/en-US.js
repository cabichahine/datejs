Date.CultureInfo = {
	/* Culture Name */
	name: "en-US",
	englishName: "English (United States)",
	nativeName: "English (United States)",

	/* Day Name Strings */
	dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
	shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
	firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],

	/* Month Name Strings */
	monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

	/* AM/PM Designators */
	amDesignator: "AM",
	pmDesignator: "PM",

	firstDayOfWeek: 0,
	twoDigitYearMax: 2029,

	/**
     * The dateElementOrder is based on the order of the 
     * format specifiers in the formatPatterns.DatePattern. 
     *
     * Example:
     <pre>
     shortDatePattern    dateElementOrder
     ------------------  ---------------- 
     "M/d/yyyy"          "mdy"
     "dd/MM/yyyy"        "dmy"
     "yyyy-MM-dd"        "ymd"
     </pre>
     *
     * The correct dateElementOrder is required by the parser to
     * determine the expected order of the date elements in the
     * string being parsed.
     */
	dateElementOrder: "mdy",

	/* Standard date and time format patterns */
	formatPatterns: {
		shortDate: "M/d/yyyy",
		longDate: "dddd, MMMM dd, yyyy",
		shortTime: "h:mm tt",
		longTime: "h:mm:ss tt",
		fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
		sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
		universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
		rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
		monthDay: "MMMM dd",
		yearMonth: "MMMM, yyyy"
	},

	/**
	 * NOTE: If a string format is not parsing correctly, but
	 * you would expect it parse, the problem likely lies below.
	 *
	 * The following regex patterns control most of the string matching
	 * within the parser.
	 *
	 * The Month name and Day name patterns were automatically generated
	 * and in general should be (mostly) correct.
	 *
	 * Beyond the month and day name patterns are natural language strings.
	 * Example: "next", "today", "months"
	 *
	 * These natural language string may NOT be correct for this culture.
	 * If they are not correct, please translate and edit this file
	 * providing the correct regular expression pattern.
	 *
	 * If you modify this file, please post your revised CultureInfo file
	 * to the Datejs Forum located at http://www.datejs.com/forums/.
	 *
	 * Please mark the subject of the post with [CultureInfo]. Example:
	 *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)
	 *
	 * We will add the modified patterns to the master source files.
	 *
	 * As well, please review the list of "Future Strings" section below.
	 */
	regexPatterns: {
		jan: /^jan(uary)?/i,
		feb: /^feb(ruary)?/i,
		mar: /^mar(ch)?/i,
		apr: /^apr(il)?/i,
		may: /^may/i,
		jun: /^jun(e)?/i,
		jul: /^jul(y)?/i,
		aug: /^aug(ust)?/i,
		sep: /^sep(t(ember)?)?/i,
		oct: /^oct(ober)?/i,
		nov: /^nov(ember)?/i,
		dec: /^dec(ember)?/i,

		sun: /^su(n(day)?)?/i,
		mon: /^mo(n(day)?)?/i,
		tue: /^tu(e(s(day)?)?)?/i,
		wed: /^we(d(nesday)?)?/i,
		thu: /^th(u(r(s(day)?)?)?)?/i,
		fri: /^fr(i(day)?)?/i,
		sat: /^sa(t(urday)?)?/i,

		future: /^next/i,
		past: /^last|past|prev(ious)?/i,
		add: /^(\+|aft(er)?|from|hence)/i,
		subtract: /^(\-|bef(ore)?|ago)/i,

		yesterday: /^yes(terday)?/i,
		today: /^t(od(ay)?)?/i,
		tomorrow: /^tom(orrow)?/i,
		now: /^n(ow)?/i,

		millisecond: /^ms|milli(second)?s?/i,
		second: /^sec(ond)?s?/i,
		minute: /^mn|min(ute)?s?/i,
		hour: /^h(our)?s?/i,
		week: /^w(eek)?s?/i,
		month: /^m(onth)?s?/i,
		day: /^d(ay)?s?/i,
		year: /^y(ear)?s?/i,

		shortMeridian: /^(a|p)/i,
		longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
		timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
		ordinalSuffix: /^\s*(st|nd|rd|th)/i,
		timeContext: /^\s*(\:|a(?!u|p)|p)/i
	},

	timezones: {
	LINT: "LINT",	// UTC +1400
	TOT: "TOT",		// UTC +1300
	CHAST: "CHAST",	// UTC +1245
	NZST: "NZST",	// UTC +1200
	NFT: "NFT",		// UTC +1130
	SBT: "SBT",		// UTC +1100
	AEST: "AEST",	// UTC +1000
	ACST: "ACST",	// UTC +0930
	JST: "JST",		// UTC +0900
	CWST: "CWST",	// UTC +0845
	CT: "CT",		// UTC +0800
	ICT: "ICT",		// UTC +0700
	MMT: "MMT",		// UTC +0630
	BIOT: "BST",	// UTC +0600
	NPT: "NPT",		// UTC +0545
	IST: "IST",		// UTC +0530
	PKT: "PKT",		// UTC +0500
	AFT: "AFT",		// UTC +0430
	MSK: "MSK",		// UTC +0400
	IRST: "IRST",	// UTC +0330
	FET: "FET",		// UTC +0300
	EET: "EET",		// UTC +0200
	CET: "CET",		// UTC +0100
	UTC: "UTC",		// UTC +000
	GMT: "GMT",		// UTC +000
	CVT: "CVT",		// UTC -0100
	GST: "GST",		// UTC -0200
	BRT: "BRT",		// UTC -0300
	NST: "NST",		// UTC -0330
	AST: "AST",		// UTC -0400
	EST: "EST",		// UTC -0500
	CST: "CST",		// UTC -0600
	MST: "MST",		// UTC -0700
	PST: "PST",		// UTC -0800
	AKST: "AKST",	// UTC -0900
	MIT: "MIT",		// UTC -0930
	HST: "HST",		// UTC -1000
	SST: "SST",		// UTC -1100
	BIT: "BIT",		// UTC -1200

	/* DST Timezones */
	CHADT: "CHADT",	// UTC +1345 ( +1245's Daylight Savings Time) 
	NZDT: "NZDT",	// UTC +1300 ( +1200's Daylight Savings Time) 
	AEDT: "AEDT",	// UTC +1100 ( +1000's Daylight Savings Time) 
	ACDT: "ACDT",	// UTC +1030 ( +0930's Daylight Savings Time) 
	AZST: "AZST",	// UTC +0500 ( +0400's Daylight Savings Time) 
	IRDT: "IRDT",	// UTC +0430 ( +0330's Daylight Savings Time) 
	EEST: "EEST",	// UTC +0300 ( +0200's Daylight Savings Time) 
	CEST: "CEST",	// UTC +0200 ( +0100's Daylight Savings Time) 
	BST: "BST",		// UTC +0100 ( -0000's Daylight Savings Time) 
	PMDT: "PMDT",	// UTC -0200 ( -0300's Daylight Savings Time) 
	ADT: "ADT",		// UTC -0300 ( -0400's Daylight Savings Time) 
	NDT: "NDT",		// UTC -0230 ( -0230's Daylight Savings Time) 
	EDT: "EDT",		// UTC -0400 ( -0500's Daylight Savings Time) 
	CDT: "CDT",		// UTC -0500 ( -0600's Daylight Savings Time)
	MDT: "MDT",		// UTC -0600 ( -0700's Daylight Savings Time)
	PDT: "PDT",		// UTC -0700 ( -0800's Daylight Savings Time)
	AKDT: "AKDT",	// UTC -0800 ( -0900's Daylight Savings Time)
	HADT: "HADT",	// UTC -0900 ( -1000's Daylight Savings Time)
	},

	abbreviatedTimeZoneDST: {
		GMT: "-000",
		EDT: "-0400",
		CDT: "-0500",
		MDT: "-0600",
		PDT: "-0700"
	},
	
	abbreviatedTimeZoneStandard: {
		GMT: "-000",
		EST: "-0500",
		CST: "-0600",
		MST: "-0700",
		PST: "-0800"
	}
};

/********************
 ** Future Strings **
 ********************
 *
 * The following list of strings may not be currently being used, but
 * may be incorporated into the Datejs library later.
 *
 * We would appreciate any help translating the strings below.
 *
 * If you modify this file, please post your revised CultureInfo file
 * to the Datejs Forum located at http://www.datejs.com/forums/.
 *
 * Please mark the subject of the post with [CultureInfo]. Example:
 *    Subject: [CultureInfo] Translated "da-DK" Danish(Denmark)b
 *
 * English Name        Translated
 * ------------------  -----------------
 * about               about
 * ago                 ago
 * date                date
 * time                time
 * calendar            calendar
 * show                show
 * hourly              hourly
 * daily               daily
 * weekly              weekly
 * bi-weekly           bi-weekly
 * fortnight           fortnight
 * monthly             monthly
 * bi-monthly          bi-monthly
 * quarter             quarter
 * quarterly           quarterly
 * yearly              yearly
 * annual              annual
 * annually            annually
 * annum               annum
 * again               again
 * between             between
 * after               after
 * from now            from now
 * repeat              repeat
 * times               times
 * per                 per
 * min (abbrev minute) min
 * morning             morning
 * noon                noon
 * night               night
 * midnight            midnight
 * mid-night           mid-night
 * evening             evening
 * final               final
 * future              future
 * spring              spring
 * summer              summer
 * fall                fall
 * winter              winter
 * end of              end of
 * end                 end
 * long                long
 * short               short
 */