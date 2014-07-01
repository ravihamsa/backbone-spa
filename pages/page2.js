var Page2 = {};

Page2.View = Backbone.View.extend({
    template:'this is page 2  <a href="#page3">link to page3 </a>',
    render:function(){
        this.$el.html(this.template);
        return this;
    }
})