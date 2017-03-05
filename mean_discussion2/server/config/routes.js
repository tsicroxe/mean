var users = require('./../controllers/users.js');
var categories = require('./../controllers/categories.js');
var topics = require('./../controllers/topics.js');
var posts = require('./../controllers/posts.js');
var comments = require('./../controllers/comments.js');





module.exports = function(app){
	app.get('/verifySession', users.verifySession)
	app.get('/main', users.index)
	app.get('/users', users.index),
	app.post('/register', users.register)
	app.post('/login', users.login)
	app.get('/dashboard', users.index),
	app.delete('/logout:id', users.logout)


	app.get('/dashboard/categories', categories.getCategories)
	app.post('/dashboard/category', categories.createCategory)

	app.get('/topic/posts', posts.index)
	app.post('/topic/:id', posts.createPost)

	app.get('/topic/comments', comments.index)
	app.post('/topic/:id/comments', comments.createComment)

	app.get('/dashboard/topics', topics.index),
	app.post('/dashboard/topic', topics.createTopic)



}
