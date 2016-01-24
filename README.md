# node-pixiv
[![Build Status](https://travis-ci.org/sairoutine/node-pixiv.svg?branch=master)](https://travis-ci.org/sairoutine/node-pixiv)

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
var Pixiv = require('pixiv');

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
	console.log(data);
});
```

Example return data.
```
{ status: 'success',
  response:
   [ { id: 35772360,
       title: '木漏れ日の中で',
       caption: '先日、ニコ生で配信した物を仕上げました。\r\nhttp://com.nicovideo.jp/community/co2038400',
       tags: [Object],
       tools: [Object],
       image_urls: [Object],
       width: 1300,
       height: 920,
       stats: null,
       publicity: 0,
       age_limit: 'all-age',
       created_time: '2013-05-18 18:58:38',
       reuploaded_time: '2013-05-18 18:58:38',
       user: [Object],
       is_manga: false,
       is_liked: false,
       favorite_id: 0,
       page_count: 1,
       book_style: 'none',
       type: 'illustration',
       metadata: null,
       content_type: null } ],
  count: 1 }
```

# Search API
```
var Pixiv = require('./pixiv');

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
  count: 1 }
```
