$(document).ready(function() {

    var quoteLink = "https://gist.githubusercontent.com/dmakk767/9375ff01aff76f1788aead1df9a66338/raw/491f8c2e91b7d3b8f1c8230e32d9c9bc1a1adfa6/Quotes.json%2520";
    var colors = ['#428bca', '#5cb85c', '#5bc0de', '#d9534f', '#ffbb33', '#aa66cc', '#FF8800'];
    var a,b,c,d;

    // newquote button click function
    $("#newquote").click(function(){
        a = Math.floor(Math.random()*102+0);
        b = Math.floor(Math.random()*3+0);

        //avoid the same quote or color as before
        if (a !== c && b !== d){

            $.getJSON(quoteLink,function(data){

                // change the quote content
                var $p = $("#content>blockquote>p");
                var $footer = $("#content>blockquote>footer");
                $p.empty().html(data[a].quote);
                $footer.empty().html(data[a].name);
                c = a;

                //change the color
                $("body").css("background-color",colors[b]);
                $("button").css("background-color",colors[b]);
                $("blockquote>p").css("color",colors[b]);
                $("blockquote>footer").css("color",colors[b]);
                d = b;

                var txt = encodeURIComponent(data[a].quote+"--"+data[a].name);
                $("#tweet").parent().attr("href","https://twitter.com/intent/tweet?text="+txt);
            })
        }else {
            $("#newquote").triggerHandler('click');
        }
    })
});



