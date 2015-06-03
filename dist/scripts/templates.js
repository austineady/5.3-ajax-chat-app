this["JST"] = this["JST"] || {};
this["JST"]["chat"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<section class=\"sidebar\">\n  <h2 class=\"chatnames\">Friends Online</h2>\n  <div class=\"chatlist\">\n\n  </div>\n</section>\n<section class=\"messageboard\">\n\n</section>\n<form class=\"createmessage\">\n  <input class=\"typemessage\" type=\"text\" placeholder=\"Type your message here\">\n  <input class=\"submit-message\" type=\"submit\" value=\"Send\">\n</form>\n";
},"useData":true});
this["JST"]["chatnames"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<li class=\"online-user\">"
    + this.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"useData":true});
this["JST"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<section class=\"logincontent\">\n  <span class=\"title\"><i class=\"fa fa-server\"></i>BackTalk</span>\n  <form class=\"login-form\" style=\"color: white\">\n    <input class=\"login-form-username\" type=\"text\" placeholder=\"Username\">\n    <input type=\"submit\" value=\"Log In\" class=\"log-in-button\">\n  </form>\n</section>\n";
},"useData":true});
this["JST"]["message"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"message\">\n  <header class=\"messageheader\">\n  <span class=\"poster\">"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</span><span class=\"posttime\">"
    + alias3((helpers.moment || (depth0 && depth0.moment) || alias1).call(depth0,(depth0 != null ? depth0.created_at : depth0),{"name":"moment","hash":{},"data":data}))
    + "</span>\n  </header>\n  <span class=\"messagecontent\">"
    + alias3(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n";
},"useData":true});