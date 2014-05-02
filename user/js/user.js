
/*
 * User Object
 * Stores user name, email, phone, and binds the updates of a dom input element to this item
 */
var User = function(){
    this.nameValidate = /[a-zA-Z]{2,}/;
    this.emailValidate = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    this.phoneValidate = /^((\([\d]{3}\))( [\d]{3}-))[\d]{4}|^[\d]{10}$/;
    return this;
};
User.prototype = {
    setName : function(name) {
        this.name = name;
        return this;
    },

    setEmail : function(email) {
        this.email = email;
        return this;
    },

    setPhone : function(phone) {
        this.phone = phone;
        return this;
    },

    getName : function() {
        return this.name;
        return this;
    },

    getEmail : function() {
        return this.email;
        return this;
    },

    getPhone : function() {
        return this.phone;
        return this;
    },

    isNameValid : function() {
        return this.nameValidate.test(this.getName());
        return this;
    },

    isEmailValid : function() {
        return this.emailValidate.test(this.getEmail());
        return this;
    },

    isPhoneValid : function() {
        return this.phoneValidate.test(this.getPhone());
        return this;
    },

    bindNameTo : function(selector){
        var self = this;
        $("body").delegate(selector, "keyup", function () {
            self.name = $(selector).val();
        });
        return this;
    },

    bindEmailTo : function(selector){
        var self = this;
        $("body").delegate(selector, "keyup", function () {
            self.email = $(selector).val();
        });
        return this;
    },

    bindPhoneTo : function(selector){
        var self = this;
        $("body").delegate(selector, "keyup", function () {
            self.phone = $(selector).val();
        });
        return this;
    }
};

/*
 * User with history : offers user plus the ability to look up its history in our app (this is implementation-dependent)
 * A user might have a history such as "grabbing all requests to our API made by this user"
 *
 */
var UserWithHistory = function(user) {
    this.user = $.extend(user, new User());
};
UserWithHistory.prototype = {
    getHistory : function() {
        return this.user.getName() + " has a history";
    }
};

// Testing here, we create a new user, set its name to "augie", and then pass it in to the UserWithHistory constructor.
// What we end up with, is a user named augie that also has the UserWithHistory methods
var augieUser = new User();
augieUser.setName("Augie");
var augieWithHistory = new UserWithHistory(augieUser)
console.log(augieWithHistory.getHistory());; // "Augie has a history"

// testing user command chaining, create a new user and set its name in-line.
var augieWithHistory2 = new UserWithHistory(new User().setName("Augie Chained")); // "Augie Chained has a history"
console.log(augieWithHistory2.getHistory());