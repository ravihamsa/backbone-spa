var pageRootEl = $('.page-container');
var currentPage ;

var Router = Backbone.Router.extend({
    routes: {
        ':pageId': 'renderPage',
        '':'renderDefaultPage'
    },
    renderPage: function (pageId) {

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
        this.renderPage('page1');
    }
})


var router = new Router();


Backbone.history.start({
    root: this.root
});