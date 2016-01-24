'use strict';
var chai = require('chai');
var should = chai.should();

var user = require('./user.json');

var Pixiv = require('../pixiv');


describe('Pixiv API', function(){
	var pixiv;
	before(function(){
		pixiv = new Pixiv();
 	});

	describe('login', function(){
		it('should not error', function(){
			return pixiv.login({
				username: user.name,
				password: user.pass,
			});
		});

		it('should exist property', function(){
				should.exist(pixiv.access_token);
				should.exist(pixiv.refresh_token);
		});
	});

	describe('search', function(){
		it('should not error', function(){
			return pixiv.search({
				q: '東方Project',
				page: 1,
				per_page: 3,
				mode: 'tag',
				period: 'all',
				order: 'desc',
				sort: 'date',
				types: 'illustration,manga',
			})
			.then(function(data) {
				data.status.should.equal('success');
				data.response.should.have.length(3);
			});
		});
	});

	describe('work', function(){
		it('should not error', function(){
			return pixiv.work(35772360)
			.then(function(data) {
				data.status.should.equal('success');
				data.response.should.have.length(1);

				var work = data.response[0];
				should.exist(work.id);
				should.exist(work.title);
				should.exist(work.caption);
				should.exist(work.width);
				should.exist(work.height);
				should.exist(work.created_time);
				should.exist(work.is_manga);
				should.exist(work.type);
				should.exist(work.user);
				should.exist(work.image_urls);
				work.tags.should.be.instanceof(Array);
			});
		});
	});

	describe('user', function(){
		it('should not error', function(){
			return pixiv.user(12296581)
			.then(function(data) {
				data.status.should.equal('success');
				data.response.should.have.length(1);

				var user = data.response[0];
				should.exist(user.id);
				should.exist(user.account);
				should.exist(user.name);
				should.exist(user.profile_image_urls);
			});
		});
	});

});

