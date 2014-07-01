var Page1 = {};

Page1.View = Backbone.View.extend({
    template:'this is page 1 <a href="#page2">link to page2 </a>',
    render:function(){
        this.$el.html(this.template);
        return this;
    }
})