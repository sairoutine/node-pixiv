# node-pixiv
[![Build Status](https://travis-ci.org/sairoutine/node-pixiv.svg?branch=master)](https://travis-ci.org/sairoutine/node-pixiv)
[![NPM](https://nodei.co/npm/node-pixiv.png?mini=true)](https://nodei.co/npm/node-pixiv/)

Pixiv API for Node.js (with Authentication supported)

# install
```
npm install node-pixiv
```


# Login

Make PixivAPI instance.
```
var pixiv = new Pixiv();
```

You must login to use pixiv api.
```
pixiv.login({
	username: 'your account username',
	password: 'your account password',
})
```

node-pixiv method returns **Promise** object.
If you don't know **Promise**, see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

# Work API

```
var Pixiv = require('node-pixiv');

var pixiv = new Pixiv();

var work_id = 35772360;

pixiv.login({
	username: 'your account username',
	password: 'your account password',
})
.then(function() {
	return pixiv.work(work_id);
})
.then(function(data) {
	console.log(JSON.stringify(data));
});
```

Example return data.
```
{
	"status": "success",
	"response": [{
		"id": 35772360,
		"title": "木漏れ日の中で",
		"caption": "先日、ニコ生で配信した物を仕上げました。\r\nhttp://com.nicovideo.jp/community/co2038400",
		"tags": ["東方", "霧雨魔理沙", "マリアリ", "アリス", "ラクガキ", "キマシタワー", "キス", "百合", "東方Project1000users入り", "アリス・マーガトロイド"],
		"tools": ["SAI"],
		"image_urls": {
			"small": "http://i1.pixiv.net/c/150x150/img-master/img/2013/05/18/18/58/38/35772360_p0_master1200.jpg"
		},
		"width": 1300,
		"height": 920,
		"stats": null,
		"publicity": 0,
		"age_limit": "all-age",
		"created_time": "2013-05-18 18:58:38",
		"reuploaded_time": "2013-05-18 18:58:38",
		"user": {
			"id": 225672,
			"account": "notenotenote",
			"name": "華々つぼみ＠ツイッター",
			"is_following": false,
			"is_follower": false,
			"is_friend": false,
			"is_premium": null,
			"profile_image_urls": {
				"px_50x50": "http://i1.pixiv.net/user-profile/img/2011/12/24/06/11/32/3982336_5a7b714d74f1586403636537987043f9_50.jpg"
			},
			"stats": null,
			"profile": null
		},
		"is_manga": false,
		"is_liked": false,
		"favorite_id": 0,
		"page_count": 1,
		"book_style": "none",
		"type": "illustration",
		"metadata": null,
		"content_type": null
	}],
	"count": 1
}
```

# Search API
```
var Pixiv = require('node-pixiv');

var pixiv = new Pixiv();

pixiv.login({
	username: 'your account username',
	password: 'your account password',
})
.then(function() {
	return pixiv.search({
		q: '東方Project',
		page: 1,
		per_page: 3,
		mode: 'tag',
		period: 'all',
		order: 'desc',
		sort: 'date',
		types: 'illustration,manga',
	});
})
.then(function(data) {
	console.log(data);
});


```

Example return data.
```
{ status: 'success',
  response:
   [ { id: 54881566,
       title: '妹紅さん描いてみた',
       caption: '妹紅さんかっこいいですよね＾p＾',
       tags: [Object],
       tools: [Object],
       image_urls: [Object],
       width: 450,
       height: 600,
       stats: null,
       publicity: 0,
       age_limit: 'all-age',
       created_time: '2016-01-24 13:58:16',
       reuploaded_time: '2016-01-24 13:58:16',
       user: [Object],
       is_manga: false,
       is_liked: false,
       favorite_id: 0,
       page_count: 1,
       book_style: 'none',
       type: 'illustration',
       metadata: null,
       content_type: null } ],
  count: 1,
  pagination:
   { previous: null,
     next: 2,
     current: 1,
     per_page: 1,
     total: 171526,
     pages: 20000 } }
```
For a detailed description of each result, see [Work API](#work-api).

# User API

```
var Pixiv = require('node-pixiv');

var pixiv = new Pixiv();

var user_id = 12296581;

pixiv.login({
	username: 'your account username',
	password: 'your account password',
})
.then(function() {
	return pixiv.user(user_id);
})
.then(function(data) {
	console.log(data);
});
```

Example return data.
```
{ status: 'success',
  response:
   [ { id: 12296581,
       account: 'shinonon_n',
       name: 'シノバ',
       is_following: false,
       is_follower: null,
       is_friend: null,
       is_premium: false,
       profile_image_urls: [Object],
       stats: null,
       profile: null } ],
  count: 1
}
```
