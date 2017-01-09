import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

Template.registration_template.events
( {
    'click #registration' : function( event, template )
    {
        event.preventDefault();

        var $structureName = template.find( "#structureName" );
        var $structureType = template.find( "#structureType" );
        var $firstname = template.find( "#firstname" );
        var $email = template.find( "#email" );
        var $phone = template.find( "#phone");
        var $password = template.find( "#password" );

        if(
            $email.value !== "" &&
            $firstname.value !== "" &&
            $structureName.value !== "" &&
            $structureType.value !== "" &&
            $password.value !== ""
        ){

            Accounts.createUser({

                username: $firstname.value,
                email: $email.value,
                password: $password.value,
                profile : {
                    structureName: $structureName.value,
                    structureType: $structureType.value,
                    phone: $phone.value
                },
                IsActive: 0
            }, function( err ){

                    if ( err ) {
                        console.log(err);
                        // Session.set('errorMessage', err.message );

                    } else {

                        // Session.set( 'currentUserId', Meteor.userId() );
                        Router.go('/addPlayer');

                    }
            });
        }
    },
    "click #login" : function (event, template){
        event.preventDefault();
        Router.go('/');
    }
} );