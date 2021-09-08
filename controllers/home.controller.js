exports.homePage = (req, res) => {
    res.render('home');
};

exports.randomPage = (req, res) => {
    res.render('random');
};

exports.contactPage = (req, res) => {
    res.render('contact');
};

exports.sendMail = (req, res) => {
    let userInfo = req.body

    try {
        sendMail.send(userInfo);
        req.flash('success', "Message Sent Successfully!")
        res.redirect('back');
        console.log('send successful')
    } catch (error) {
        console.log(error)
    }

};