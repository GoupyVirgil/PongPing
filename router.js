Router.route('/', function () {
    this.render( 'login_template' );
});

Router.route('/registration', function(){
    this.render( 'registration_template' );
});

Router.route('/addPlayer', function(){
    this.render( 'add_player_template' );
});