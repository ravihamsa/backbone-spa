var pageRootEl = $('.page-container');
var currentPage ;
var currentPageId = defaultPage;

var defaultPage = 'page1';
    
var paramsToObject = function(params) {
     if (!params) {
         return {};
     }
     var paramsArray = _.map(params.split(';'), function(str) {
         return str.split('=');
     });
     var obj = {};
     _.each(paramsArray, function(arr) {
         obj[arr[0]] = arr[1];
     });
     return obj;
 };
    
    
var Router = Backbone.Router.extend({
    routes: {
        ':pageId': 'renderPage',
        ':pageId/*params': 'renderPage',
        '':'renderDefaultPage',
        
    },
    renderPage: function (pageId, params) {
        var paramsObject = paramsToObject(params);
        
        if(currentPageId === pageId && currentPage){
            currentPage.model.set(paramsObject);
            return;
        }
        
        if(currentPage){
            currentPage.remove();
        }
        pageRootEl.empty();
        
    
        switch (pageId) {
            case 'page1':
                $.getScript('pages/' + pageId + ".js", function () {
                    currentPage = new Page1.View({
                        
                    });

                    currentPage.render().$el.appendTo(pageRootEl);
                })
                break;

            case 'page2':
                $.getScript('pages/' + pageId + ".js", function () {
                    currentPage = new Page2.View({
                    });
                    currentPage.render().$el.appendTo(pageRootEl);
                })
                break;

            case 'page3':
                $.getScript('pages/' + pageId + ".js", function () {
                    currentPage = new Page3.View({
                    });
                    currentPage.render().$el.appendTo(pageRootEl);
                })
                break;
        }


    },
    renderDefaultPage: function(){
        this.renderPage(defaultPage);
    }
})


var router = new Router();


Backbone.history.start({
    root: this.root
});
