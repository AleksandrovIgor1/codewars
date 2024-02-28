// DESCRIPTION:
// In this Kata, you have to design a simple routing class for a web framework.
// The router should accept bindings for a given url, http method and an action.
// Then, when a request with a bound url and method comes in, it should return the result of the action.

// Example usage:
// var router = new Router;
// router.bind('/hello', 'GET', function(){ return 'hello world'; });
// router.runRequest('/hello', 'GET') // returns 'hello world';
// When asked for a route that doesn't exist, router should return: 'Error 404: Not Found'
// The router should also handle modifying existing routes. See the example tests for more details.
// SOLUTION:
var Router = function() {
	this.routes = [];

	this.bind = function(url, method, action) {
			let indexRoute = this.routes.findIndex((route) => route.url === url && route.method === method);
			if (indexRoute !== -1) {
					this.routes[indexRoute].action = action;
			}
			else {
					this.routes.push({ url: url, method: method, action: action });
			}
	};

	this.runRequest = function(url, method) {
			for (var i = 0; i < this.routes.length; i++) {
					if (this.routes[i].url === url && this.routes[i].method === method) {
							return this.routes[i].action();
					}
			}
			return 'Error 404: Not Found';
	};
};

var router = new Router();
router.bind('/hello', 'GET', function() {
	return 'hello world';
});

console.log(router.runRequest('/hello', 'GET'));

router.bind('/hello', 'GET', function() {
	return 'thj86u8s8tc';
});

console.log(router.runRequest('/hello', 'GET'));