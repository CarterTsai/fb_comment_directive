A Pen created at CodePen.io. You can find this one at http://codepen.io/CarterTsai/pen/skCAl.


### Include from Index.html
```
    <script src="fb_comment_directive/js/fb_directive.js"></script>
```
### Load fb comment Module
```
    var app = angular.module('fbtest', ['fb.comment']);
```
### Install frome Brower

snippet code
```
    {
        "devDependencies": {
            "fb_comment_directive" : "https://github.com/CarterTsai/fb_comment_directive.git#0.0.1"
        }
    }
```
### Usage
```
    <fb-comment href="http://example.com/comments"
            numposts="1"
            colorscheme="light"
            order=""
            width="720">
    </fb-comment>
```
