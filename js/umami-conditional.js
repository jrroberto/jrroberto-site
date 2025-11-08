if (window.location.protocol.startsWith("http") && !window.location.hostname.includes("localhost")) {
    (function(w,d,s,u){
        w.umami = w.umami || function(){(w.umami.q=w.umami.q||[]).push(arguments)};
        var js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
        js.async = 1; js.src = "https://cloud.umami.is/script.js";
        js.setAttribute('data-website-id', '1aa95797-d76f-424f-b371-d3f74f76e2d2');
        fjs.parentNode.insertBefore(js,fjs);
    })(window,document,'script','https://cloud.umami.is/script.js');
    window.umami && window.umami.trackView && window.umami.trackView();
}
