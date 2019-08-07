window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            var APP_ID = 'TQn7p0ivDzmroLGn3T1ke4T3-gzGzoHsz'
            var APP_KEY = 'tmqSnG1oyuJCbI04kk4zNtfI'
            AV.init({ appId: APP_ID, appKey: APP_KEY })
        },
        fetch: function () {
            var query = new AV.Query(resourceName)
            return query.find()
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName)
            var x = new X()
            return x.save(object)
        }
    }
}