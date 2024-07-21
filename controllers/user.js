const User = require("../models/user")

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs");
};

module.exports.signup = async(req,res)=>{
    try{
     let{username,email,password} = req.body;
     const newUser = new User({username,email,password});
     const registeredUser=await User.register(newUser,password);
     console.log(registeredUser);
     req.login(registeredUser,(err)=>{
         if(err){
             return next(err);
         }
         req.flash("success","Welcome to Travelnest");
         res.redirect("/listings");
     });
 
    } catch(e){
     req.flash("error",e.message);
     res.redirect("/signup");
       }
    };

    module.exports.renderLoginForm = (req,res)=>{
        res.render("users/login");
    };

    module.exports.login =  async (req, res) => {
        req.flash("success", "Welcome back to Travelnest!");
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    };

    module.exports.logout =(req,res)=>{
        req.logout((err)=>{
            if(err){
                return next(err);
            }
            req.flash('success', 'you are logged out!');
            res.redirect('/listings');
        })
    };