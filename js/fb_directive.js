// Ref: https://developers.facebook.com/docs/plugins/comments/
angular.module('fb.comment', [])
.directive('fbComment', function() {
  
    function link(scope, element, attrs) {
      
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/zh_TW/all.js#xfbml=1&appId=638664449487662";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    }
  
    return {
      link: link,
      // matches element
      restrict: 'E',      
      // Text Binding (Prefix: @)
      // One-way Binding (Prefix: &)
      // Two-way Binding (Prefix: =)
      scope: {
        href: '@href',
        numpost : '@numpost',
        colorscheme: '@colorscheme',
        order: '@order',
        width: '@width'
      },
      template: '<div class="fb-comments" '+
                      'data-href="{{href}}" '+
                      'data-numposts="{{numpost}}" '+
                      'data-colorscheme="{{colorscheme}}" '+
                      'data-order-by="{{order}}" '+
                      'data-width="{{width}}"> '+
                '</div>',
    };
});
