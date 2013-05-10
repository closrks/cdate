/**
* An CustomDate utility class for customizing JavaScript date objects
* This was adapted from JS Native & Google's Closure Library src date.js and date.Interval
* linked here:
* http://closure-library.googlecode.com/svn/docs/closure_goog_date_date.js.html
* http://closure-library.googlecode.com/svn/docs/class_goog_date_Interval.html
*/

function CustomDate (year, month, date) {

	if ( typeof year === 'number' || (typeof year === 'string' && year.length == 4) ) {
		this.date_ = new Date(year, month || 0, date || 1)
		this.adjustDST( date || 1 );
	} else if ( typeof year === 'string' ) {
		
		// 2012-01-01		
		if ( /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(year) ) {
			year = year.replace(/-/g, '');
		} 
		// 01/01/2012
		else if ( /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(year) ) {
			year = year.substr(6,4) + year.substr(0,2) + year.substr(3, 2);
		} 

		// 20120101
		this.date_ = new Date( year.substr(0,4), (year.substr(4,2) - 1), year.substr(6,2) );
		this.adjustDST( year.substr(6,2) );

	} else if ( year instanceof Date ) {
		this.date_ = new Date( year.getFullYear(), year.getMonth(), year.getDate() );
		this.adjustDST( year.getDate() );
	} else {
		this.date_ = new Date();
		this.date_.setHours(0);
		this.date_.setMinutes(0);
		this.date_.setSeconds(0);	
		this.date_.setMilliseconds(0);
	}

	return this;
};

CustomDate.prototype.getFullYear = function () {

	return this.date_.getFullYear();
};

CustomDate.prototype.getMonth = function () {
	
	return this.date_.getMonth();
};

CustomDate.prototype.getDate = function () {
	
	return this.date_.getDate();
};

CustomDate.prototype.toString = function (format) {
	
	var dateString = this.date_.toString();

	var YYYY = this.getFullYear()
		, MM = (this.getMonth()+1) < 10 ? '0' + (this.getMonth()+1) : this.getMonth()+1
		, DD = (this.getDate()+1) < 10 ? '0' + (this.getDate()+1) : this.getDate()+1;

	if ( /YYYY-MM-DD/.test(format) ) {
		
		dateString = YYYY + '-' + MM + '-' + DD;

	} else if ( /MM\/DD\/YYYY/.test(format) ) {

		dateString = MM + '/' + DD + '/' + YYYY;

	} else if ( /YYYYMMDD/.test(format) ) {

		dateString = YYYY + MM + DD;

	} 

	return dateString;
};

// {years: 0, months: 0, days: 0} 
CustomDate.prototype.addInterval = function (interval) {

	if ( interval.years || interval.months ) {
		// var test = new Date(2013,0,31);
		// test.setMonth(test.getMont()+1);
		var month = this.date_.getMonth() + interval.months + interval.years * 12
			, year = this.date_.getFullYear() + Math.floor( month / 12 );

		month %= 12;
		if ( month < 0 ) {
			month += 12;
		}

		var daysInTargetMonth = new Date(year, month, 0).getDate()
			, date = Math.min(daysInTargetMonth, this.date_.getDate());

		// avoid rollovers
		this.date_.setDate(1);
		this.date_.setFullYear(year);
		this.date_.setMonth(month);
		this.date_.setDate(date);
	}

	if ( interval.days ) {
		var noon = new Date( this.date_.getFullYear(), this.date_.getMonth(), this.date_.getDate(), 12);
		var resultDate = new Date( noon.getTime() + ( interval.days * 60 * 60 * 24 * 1000) );

		// avoid rollovers
		this.date_.setDate(1);
		this.date_.setFullYear( resultDate.getFullYear() );
		this.date_.setMonth( resultDate.getMonth() );
		this.date_.setDate( resultDate.getDate() );
		this.adjustDST( resultDate.getDate() );
	}

	return this;
};

// code to fix JavaScript daylight savings time error as recommended
CustomDate.prototype.adjustDST = function (expected) {

	if (this.date_.getDate() != expected) {
	    var dir = this.date_.getDate() < expected ? 1 : -1;
	    this.date_.setUTCHours(this.date_.getUTCHours() + dir);
	  }
  	return this;
};

module.exports = CustomDate;