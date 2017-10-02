
$(document).ready(function() {
    window.onload = function () {
        var loaderMother = document.createElement('div');
        loaderMother.id = 'loaderMother';
        loaderMother.style="display:none";

        var topMenu = document.createElement('div');
        topMenu.id = 'topMenu';

            var rsp_eql_desktop = document.createElement('div');

            rsp_eql_desktop.className='rsp-eql-desktop';

                var topBar_rspContainer = document.createElement('div');
                topBar_rspContainer.className = 'topBar rsp-container with-flex';

                var a = document.createElement('a');
                //a.setAttribute('className', 'icon-askfm-logo topBar-left')
                a.className="icon-askfm-logo topBar-left";
                a.title="Back";
                a.href = "/";
                topBar_rspContainer.appendChild(a);

                var right = document.createElement('div');
                right.className="topBar-right";

                     a = document.createElement('a');
                     a.className="btn-action plain";
                     a.href = "/signup";
                     a.appendChild(document.createTextNode('Sign up'));
                right.appendChild(a);

                topBar_rspContainer.appendChild(right);


                var h1 = document.createElement('h1');
                h1.appendChild(document.createTextNode('Log in'));

                topBar_rspContainer.appendChild(h1);
//
            rsp_eql_desktop.appendChild(topBar_rspContainer);

        topMenu.appendChild(rsp_eql_desktop);

       var div = document.createElement('div');
       div.style = "display:none";
       div.className= "flash-message notice";

            var p = document.createElement('p');
            p.className ='util-relative rsp-container';

            var a = document.createElement('a');
             a.className="icon-close" ;
//             a.data-action="FlashHide";
            p.appendChild(a);



            div.appendChild(p);
        topMenu.appendChild(div);



        document.body.appendChild(topMenu);

        var contentArea = document.createElement('div');
        contentArea.id = 'contentArea';
            var rspContainer = document.createElement('div');
            rspContainer.className ='rsp-container';
                var div1 = document.createElement('div');
                div1.className= "rsp-row main-content util-clearfix";
                    var div2 = document.createElement('div');
                    div2.className= "rsp-gte-mobile main-column util-clearfix";
                        var form = document.createElement('form');
                         form.id="loginForm";
//                         form.data-action="FormXHRSubmit";
//                        form.action="/login";
//                        form.accept-charset="UTF-8";
                        form.method="post";
                          var input = document.createElement('input');
                           input.name="utf8";
                           input.type="hidden";
                           input.value="&#x2713;";
                           form.appendChild(input);


                         input = document.createElement('input');
                           input.name="authenticity_token";
                           input.type="hidden";
                           input.value="rydTmHqLsQ97Wp+I+/yb4bi0Km7AkxbvwsNKnI04+MzDC79MfYdB8vVJAD1rGuQIT+c3tJEp0YsPcPqaJ3QyZg=="

                           form.appendChild(input);
                           var div = document.createElement('div');
                           div.className="inputFormBox";
                           form.appendChild(div);
                           var inputFormPadding = document.createElement('div');
                           inputFormPadding.className = "inputFormPadding";
                            var login = document.createElement('input');
                            login.type="text";
                            login.name="login";
                            login.className="inputForm";
                            login.maxlength="40";
                            login.placeholder="Username or e-mail";
                            login.autocomplete="username";
                            login.autofocus="autofocus";
//                            login.data-input="CaptchaReload"
                            inputFormPadding.appendChild(login);

                           div.appendChild(inputFormPadding);

                            inputFormPadding = document.createElement('div');
                           inputFormPadding.className = "inputFormPadding";
                            var password = document.createElement('input');
                            password.type="password";
                            password.name="password";
                            password.className="inputForm";
                            password.maxlength="20";
                            password.placeholder="Password";
                            password.autocomplete="current-password";

//                            login.data-input="CaptchaReload"
                            inputFormPadding.appendChild(password);

                            div.appendChild(inputFormPadding);

                           div = document.createElement('div');
                          div.className="captcha-container";
                           div.style="display:none";
                           form.appendChild(div);
//                           div.data-url="/login/captcha";

                            div = document.createElement('div');

                             div.className="simpleFormItem";
                             input = document.createElement('input');
                            input.type="submit";
                            input.className="btn-primary-wide";
                            input.value="Log in";
                            

                            input.addEventListener("click", myFunction);

                                function myFunction() {
                                    if(login.value == "")
                                        alert ("please enter your username");
                                        
                                    
                                    else if(password.value == "")
                                        alert ("please enter your password");
                                        
                                    
                                        
                                }

                            div.appendChild(input);
                            form.appendChild(div);


                             div = document.createElement('div');
                             div.className="simpleFormItem";

                             input = document.createElement('input');

                            input.type="checkbox";
                            input.name="remember_me";
                            input.id="rememberMe";
                            input.value="1";
                            input.className="checkbox" ;
                            input.checked="checked" ;

                            div.appendChild(input);

                            input = document.createElement('label');
                            input.for="rememberMe";

                            div.appendChild(input);

                            a = document.createElement('a');
                            a.href="/login/recover";
                            a.appendChild(document.createTextNode('Forgot password?'));
                            div.appendChild(a);

                            form.appendChild(div);


                        div2.appendChild(form);


                    div1.appendChild(div2);
                rspContainer.appendChild(div1);
          contentArea.appendChild(rspContainer);
          document.body.appendChild(contentArea);
//


    };


});
