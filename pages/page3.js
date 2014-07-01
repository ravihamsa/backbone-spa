var Page3 = {};

Page3.View = Backbone.View.extend({
    template:'this is page 3  <a href="#page2">link to page1 </a>',
    render:function(){
        this.$el.html(this.template);
        return this;
    }
})