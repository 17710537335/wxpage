var P = require('../lib/wxpage')
var Header = require('../comps/header')
var d = new Date()

P('index', {
	comps: [
		Header,
	],
	data: {
	},
	onPageLaunch: function () {
		console.log('## On index page launch', new Date() - d, 'ms')
	},
	onAppLaunch: function (opts) {
		console.log('## [Page] APP Launch', opts)
	},
	onLoad: function() {
		console.timeEnd('Run2')
		console.log('## On index page load')
		this.$preload('play?cid=456')

		// cache test
		console.log('[Step 1] cache get', this.$cache.get('cache'))
		console.log('[Step 2] cache set "cache"')
		this.$cache.set('cache', {name: 'wxpage'})
		console.log('[Step 3] cache get', this.$cache.get('cache'))

		// session test
		console.log('[Step 1] session get', this.$session.get('session'))
		console.log('[Step 2] session set "session"')
		this.$session.set('session', {name: 'wxpage'})
		console.log('[Step 3] session get', this.$session.get('session'))
	},
	onReady: function () {
		var context = wx.createContext()
		context.drawImage('https://vm.gtimg.cn/tencentvideo/vstyle/web/v4/style/img/common/sprite_head_logo.svg', 0,0,100,200)
		// context.draw()
		wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions() // 获取绘图动作数组
    })
	},
	onPlay: function () {
		this.$route('play?cid=123')
	},
	onPlayNav: function () {
		wx.navigateTo({
			url: '/pages/play?cid=abcd'
		})
	},
	onShow: function () {
		console.log('## On index page show')
	},
	onAwake: function (t) {
		console.log('## On index page awake', t)
	},
	onClickBefore: function (e) {
		console.log('## On click before')
	},
	onClickAfter: function (e) {
		// console.log('## On click after', e)
	},
	onTouchend: function (e) {
		console.log('--------')
	},
	onTTap: function () {
		console.log('###')
	}
})
