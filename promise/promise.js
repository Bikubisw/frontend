/*
$.ajax({
    success:function(){
        $.ajax({
            success:function(){

                $.ajax({
                    success:function(){



                    }
                    }
                })
            }
        })
    }
})
*/
var user = true;
var userMessage = true;
var userchats = true;

function checkUserLoggedin() {
    var promise = new Promise(function(resolve, reject) {
        //wait for 1 sec
        setTimeout(() => {
            if (user) {
                resolve("User logged in");
                resolve('User Message logged in');
                resolve('User chats logged in');
            } else {
                reject();
            }
        }, 1000);

    });
    return promise;
}
checkUserLoggedin().then((msg) => { console.log(msg) }).then((msg1) => { console.log(msg1) }).then((msg2) => { console.log(msg2) }).catch(() => {
    console.log('NOt logged in');
});