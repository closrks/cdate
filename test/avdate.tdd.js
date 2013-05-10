var expect = require('expect.js')
	, CustomDate = require('../index.js');

suite('CustomDate', function () {

	suite('* Constructor', function () {

		suite('. No constructor arguments', function () {
			
			var myDate = new CustomDate();

			test('expect constructor to istantiate custom date object', function () {
				expect( myDate ).to.be.ok();
			});

			test('expect custom date object to have a date_ property', function () {
				expect( myDate.date_ ).to.be.ok();
			});	

			test('expect custom date object date_ to be a date object', function () {
				expect( myDate.date_ ).to.be.a(Date);
			});

			test('expect date_ object to have todays year', function () {
				expect( myDate.date_.getFullYear() ).to.be(new Date().getFullYear());
			});

			test('expect date_ object to have todays month', function () {
				expect( myDate.date_.getMonth() ).to.be(new Date().getMonth());
			});

			test('expect date_ object to have todays date', function () {
				expect( myDate.date_.getDate() ).to.be(new Date().getDate());
			});

			test('expect date_ object to have zero hours', function () {
				expect( myDate.date_.getHours() ).to.be(0);
			});

			test('expect date_ object to have zero minutes', function () {
				expect( myDate.date_.getMinutes() ).to.be(0);
			});

			test('expect date_ object to have zero seconds', function () {
				expect( myDate.date_.getSeconds() ).to.be(0);
			});

		});

		suite('. Contructor argument is numbers/strings', function () {
			var myDate = new CustomDate('2013', 4, 9);

			test('expect constructor to istantiate custom date object', function () {
				expect( myDate ).to.be.ok();
			});

			test('expect custom date object to have a date_ property', function () {
				expect( myDate.date_ ).to.be.ok();
			});	

			test('expect custom date object date_ to be a date object', function () {
				expect( myDate.date_ ).to.be.a(Date);
			});

			test('expect date_ object to have todays year', function () {
				expect( myDate.date_.getFullYear() ).to.be(2013);
			});

			test('expect date_ object to have todays month', function () {
				expect( myDate.date_.getMonth() ).to.be(4);
			});

			test('expect date_ object to have todays date', function () {
				expect( myDate.date_.getDate() ).to.be(9);
			});

			test('expect date_ object to have zero hours', function () {
				expect( myDate.date_.getHours() ).to.be(0);
			});

			test('expect date_ object to have zero minutes', function () {
				expect( myDate.date_.getMinutes() ).to.be(0);
			});

			test('expect date_ object to have zero seconds', function () {
				expect( myDate.date_.getSeconds() ).to.be(0);
			});


		});

		suite('. Contructor argument is Date()', function () {

			var myDate = new CustomDate(new Date());

			test('expect constructor to istantiate custom date object', function () {
				expect( myDate ).to.be.ok();
			});

			test('expect custom date object to have a date_ property', function () {
				expect( myDate.date_ ).to.be.ok();
			});	

			test('expect custom date object date_ to be a date object', function () {
				expect( myDate.date_ ).to.be.a(Date);
			});

			test('expect date_ object to have todays year', function () {
				expect( myDate.date_.getFullYear() ).to.be(new Date().getFullYear());
			});

			test('expect date_ object to have todays month', function () {
				expect( myDate.date_.getMonth() ).to.be(new Date().getMonth());
			});

			test('expect date_ object to have todays date', function () {
				expect( myDate.date_.getDate() ).to.be(new Date().getDate());
			});

			test('expect date_ object to have zero hours', function () {
				expect( myDate.date_.getHours() ).to.be(0);
			});

			test('expect date_ object to have zero minutes', function () {
				expect( myDate.date_.getMinutes() ).to.be(0);
			});

			test('expect date_ object to have zero seconds', function () {
				expect( myDate.date_.getSeconds() ).to.be(0);
			});

		});

		suite('. Contructor argument is a string', function () {

			suite('# Format: YYYYMMDD', function () {

				var myDate = new CustomDate('20130509');

				test('expect constructor to istantiate custom date object', function () {
					expect( myDate ).to.be.ok();
				});

				test('expect custom date object to have a date_ property', function () {
					expect( myDate.date_ ).to.be.ok();
				});	

				test('expect custom date object date_ to be a date object', function () {
					expect( myDate.date_ ).to.be.a(Date);
				});

				test('expect date_ object to have todays year', function () {
					expect( myDate.date_.getFullYear() ).to.be(2013);
				});

				test('expect date_ object to have todays month w/ zero index accounted', function () {
					expect( myDate.date_.getMonth() ).to.be(4);
				});

				test('expect date_ object to have todays date', function () {
					expect( myDate.date_.getDate() ).to.be(9);
				});

				test('expect date_ object to have zero hours', function () {
					expect( myDate.date_.getHours() ).to.be(0);
				});

				test('expect date_ object to have zero minutes', function () {
					expect( myDate.date_.getMinutes() ).to.be(0);
				});

				test('expect date_ object to have zero seconds', function () {
					expect( myDate.date_.getSeconds() ).to.be(0);
				});

			});

			suite('# Format: YYYY-MM-DD', function () {

				var myDate = new CustomDate('2013-05-09');

				test('expect constructor to istantiate custom date object', function () {
					expect( myDate ).to.be.ok();
				});

				test('expect custom date object to have a date_ property', function () {
					expect( myDate.date_ ).to.be.ok();
				});	

				test('expect custom date object date_ to be a date object', function () {
					expect( myDate.date_ ).to.be.a(Date);
				});

				test('expect date_ object to have todays year', function () {
					expect( myDate.date_.getFullYear() ).to.be(2013);
				});

				test('expect date_ object to have todays month w/ zero index accounted', function () {
					expect( myDate.date_.getMonth() ).to.be(4);
				});

				test('expect date_ object to have todays date', function () {
					expect( myDate.date_.getDate() ).to.be(9);
				});

				test('expect date_ object to have zero hours', function () {
					expect( myDate.date_.getHours() ).to.be(0);
				});

				test('expect date_ object to have zero minutes', function () {
					expect( myDate.date_.getMinutes() ).to.be(0);
				});

				test('expect date_ object to have zero seconds', function () {
					expect( myDate.date_.getSeconds() ).to.be(0);
				});

			});

			suite('# Format: MM/DD/YYYY', function () {

				var myDate = new CustomDate('05/09/2013');

				test('expect constructor to istantiate custom date object', function () {
					expect( myDate ).to.be.ok();
				});

				test('expect custom date object to have a date_ property', function () {
					expect( myDate.date_ ).to.be.ok();
				});	

				test('expect custom date object date_ to be a date object', function () {
					expect( myDate.date_ ).to.be.a(Date);
				});

				test('expect date_ object to have todays year', function () {
					expect( myDate.date_.getFullYear() ).to.be(2013);
				});

				test('expect date_ object to have todays month w/ zero index accounted', function () {
					expect( myDate.date_.getMonth() ).to.be(4);
				});

				test('expect date_ object to have todays date', function () {
					expect( myDate.date_.getDate() ).to.be(9);
				});

				test('expect date_ object to have zero hours', function () {
					expect( myDate.date_.getHours() ).to.be(0);
				});

				test('expect date_ object to have zero minutes', function () {
					expect( myDate.date_.getMinutes() ).to.be(0);
				});

				test('expect date_ object to have zero seconds', function () {
					expect( myDate.date_.getSeconds() ).to.be(0);
				});

			});

		});
		
	});

	suite('* getFullYear', function () {

		var myDate = new CustomDate();

		test('expect to return native date.getFullYear result', function () {
			expect( myDate.getFullYear() ).to.be( new Date().getFullYear() );
		});

	});

	suite('* getMonth', function () {

		var myDate = new CustomDate();

		test('expect to return native date.getFullYear result', function () {
			expect( myDate.getMonth() ).to.be( new Date().getMonth() );
		});

	});

	suite('* getDate', function () {

		var myDate = new CustomDate();

		test('expect to return native date.getFullYear result', function () {
			expect( myDate.getDate() ).to.be( new Date().getDate() );
		});

	});

	suite('* toString', function () {

		suite('. Format: YYYY-MM-DD', function () {

			var myDateAsString = new CustomDate().toString('YYYY-MM-DD');

			test('expect to return date as YYYY-MM-DD', function () {
				expect( /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(myDateAsString) ).to.be(true);
			});

		});

		suite('. Format: YYYYMMDD', function () {

			var myDateAsString = new CustomDate().toString('YYYYMMDD');

			test('expect to return date as YYYYMMDD', function () {
				expect( /[0-9]{8}/.test(myDateAsString) ).to.be(true);
			});

		});

		suite('. Format: MM/DD/YYYY', function () {

			var myDateAsString = new CustomDate().toString('MM/DD/YYYY');

			test('expect to return date as YYYYMMDD', function () {
				expect( /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/.test(myDateAsString) ).to.be(true);
			});
		});

		suite('. No format specified', function () {

			var myDate = new CustomDate();

			test('expect to return date as native date string', function () {
				expect( myDate.toString() ).to.be( myDate.date_.toString() );
			});

		});

	});

	suite('* addInterval', function () {

		test('expect to add year interval to date', function () {
			var myDate = new CustomDate('20120101');
			expect( myDate.addInterval({years: 1, months: 0, days: 0}).toString() ).to.be(new CustomDate('20130101').toString());
		});

		test('expect to add month interval to date', function () {
			var myDate = new CustomDate('20120101');
			expect( myDate.addInterval({years: 0, months: 1, days: 0}).toString() ).to.be(new CustomDate('20120201').toString());
		});

		test('expect to add day interval to date', function () {
			var myDate = new CustomDate('20120101');
			expect( myDate.addInterval({years: 0, months: 0, days: 1}).toString() ).to.be(new CustomDate('20120102').toString());	
		});

	});	

});