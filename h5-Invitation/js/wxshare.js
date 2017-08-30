(function(){
	var imgUrl = 'http://www.ftmshuabei.com.cn/gtu/yqh20170819/images/ico.jpg';
	var lineLink = 'http://www.ftmshuabei.com.cn/gtu/yqh20170819/index.php';
	var shareTitle = '凤凰艺术年展';
	var descContent = '凤凰艺术年展媒体发布会邀请函';
	wx.ready(function(){

		wx.checkJsApi({
	        jsApiList: [
	        	'jsApiList',
	            'onMenuShareTimeline',
	        	'onMenuShareAppMessage',
	        	'onMenuShareQQ',
	        	'onMenuShareWeibo',
	        	'onMenuShareQZone'
	        ],
	        success: function (res) {
	            // alert(JSON.stringify(res));
	        }
	    });


		//分享到朋友圈
		wx.onMenuShareTimeline({
		    title: shareTitle, // 分享标题
		    link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		    imgUrl: imgUrl, // 分享图标
		    success: function () {
		        // 用户确认分享后执行的回调函数
		    },
		    cancel: function () {
		        // 用户取消分享后执行的回调函数
		    }
		});

		//分享给朋友
		wx.onMenuShareAppMessage({
		    title: shareTitle, // 分享标题
		    desc: descContent, // 分享描述
		    link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
		    imgUrl: imgUrl, // 分享图标
		    type: '', // 分享类型,music、video或link，不填默认为link
		    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		    success: function () {
		        // 用户确认分享后执行的回调函数
		    },
		    cancel: function () {
		        // 用户取消分享后执行的回调函数
		    }
		});

		//分享到qq
		wx.onMenuShareQQ({
		    title: shareTitle, // 分享标题
		    desc: descContent, // 分享描述
		    link: lineLink, // 分享链接
		    imgUrl: imgUrl, // 分享图标
		    success: function () {
		       // 用户确认分享后执行的回调函数
		    },

		    cancel: function () {
		       // 用户取消分享后执行的回调函数
		    }
		});

		//分享到腾讯微博
		wx.onMenuShareWeibo({
		    title: shareTitle, // 分享标题
		    desc: descContent, // 分享描述
		    link: lineLink, // 分享链接
		    imgUrl: imgUrl, // 分享图标
		    success: function () {
		       // 用户确认分享后执行的回调函数
		    },
		    cancel: function () {
		        // 用户取消分享后执行的回调函数
		    }
		});

		//分享到QQ空间
		wx.onMenuShareQZone({
		    title: shareTitle, // 分享标题
		    desc: descContent, // 分享描述
		    link: lineLink, // 分享链接
		    imgUrl: imgUrl, // 分享图标
		    success: function () {
		       // 用户确认分享后执行的回调函数
		    },
		    cancel: function () {
		        // 用户取消分享后执行的回调函数
		    }
		});
	});

	wx.error(function (res) {
	  alert(res.errMsg);
	});
})()
