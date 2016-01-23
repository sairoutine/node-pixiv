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




/*

    # 用户资料
    def users(self, author_id):

    # 我的订阅
    def me_feeds(self, show_r18=1):

    # 获取收藏夹
    def me_favorite_works(self,page=1,per_page=50,image_sizes=['px_128x128', 'px_480mw', 'large']):

    # 添加收藏
    # publicity:  public, private
    def me_favorite_works_add(self, work_id, publicity='public'):

    # 删除收藏
    def me_favorite_works_delete(self, ids):

    # 关注用户
    # publicity:  public, private
    def me_favorite_users_follow(self, user_id, publicity='public'):

    # 用户作品
    # publicity:  public, private
    def users_works(self, author_id, page=1, per_page=30, publicity='public'):

    # 用户收藏
    # publicity:  public, private
    def users_favorite_works(self, author_id, page=1, per_page=30, publicity='public'):

    # 排行榜/过去排行榜
    # mode:
    #   daily - 每日
    #   weekly - 每周
    #   monthly - 每月
    #   male - 男性热门
    #   female - 女性热门
    #   original - 原创
    #   rookie - Rookie
    #   daily_r18 - R18每日
    #   weekly_r18 - R18每周
    #   male_r18
    #   female_r18
    #   r18g
    # page: 1-n
    # date: '2015-04-01' (仅过去排行榜)
    def ranking_all(self, mode='daily', page=1, per_page=50, date=None):

*/

