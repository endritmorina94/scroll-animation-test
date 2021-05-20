var checkmarkThirdPhone = CSSRulePlugin.getRule(".checkmark:after");
var checkmark = CSSRulePlugin.getRule(".two .checkmark:after");

//SECOND PHONE ANIMATION START
var secondPhone = gsap.timeline({repeat: -1, repeatDelay: 1});
    //STARTING ANIMATION START
    secondPhone.to(".two .phone-content", {
        width: "250px",
        height: "520px",
        opacity: 1,
        duration: 1
    });
    secondPhone.to(".two .btn", {
        width: "225px",
        height: "37px",
        x: "12px",
        y: "-4px",
        ease: Power2.easeOut,
        color: "black",
        backgroundColor: "white",
        duration: .3,
        delay: 1
    });
    secondPhone.to(".two .btn", {
        width: "100%",
        height: "45px",
        x: 0,
        y: 0,
        ease: Power2.easeOut,
        duration: .3,
        delay: .2
    });
    //STARTING ANIMATION END

    //LOADING ANIMATION START
    secondPhone.to(checkmark, {
        opacity: 0,
        duration: 0,
    });
    secondPhone.to(".two .success-screen", {
        y: "-100%",
        ease: Power2.easeOut,
        duration: .7,
        delay: 1
    });
    secondPhone.to(".two .spinner", {
        opacity: 1,
        duration: 0
    });
    secondPhone.to(".two .spinner .top", {
        rotate: 360,
        zIndex: 1,
        duration: 1.5
    });
    secondPhone.to(".two .spinner .top", {
        borderLeftColor: "white",
        duration: 0,
        delay: -0.2
    });
    secondPhone.to(".two .spinner .right", {
        rotate: 270,
        duration: 1.5,
        delay: -1.5
    });
    secondPhone.to(".two .spinner .right", {
        borderLeftColor: "white",
        duration: 0,
        delay: -0.2
    });
    secondPhone.to(".two .spinner .bottom", {
        rotate: 180,
        duration: 1.5,
        delay: -1.5
    });
    secondPhone.to(".two .spinner .bottom", {
        borderLeftColor: "white",
        duration: 0,
        delay: -0.2
    });
    secondPhone.to(".two .spinner .left", {
        rotate: 90,
        duration: 1.5,
        delay: -1.5
    });
    secondPhone.to(".two .spinner .left", {
        borderLeftColor: "white",
        duration: 0,
        delay: -0.2
    });
    secondPhone.to(checkmark, {
        opacity: 1,
        duration: 0,
    });
    secondPhone.to(checkmark, {
        display: "block",
        height: 0,
        width: 0,
        duration: 0
    });
    secondPhone.to(checkmark, {
        height: "0px",
        width: "10px",
        duration: .3
    });
    secondPhone.to(checkmark, {
        height: "20px",
        width: "10px",
        duration: 0.5,
    });
    //LOADING ANIMATION END

    //CLOSING ANIMATION START
    secondPhone.to(".two .phone-content", {
        opacity: 1,
        duration: 3
    });

    secondPhone.to(".two .phone-content", {
        opacity: 0,
        duration: 1
    });
    //CLOSING ANIMATION END
//SECOND PHONE ANIMATION END


//THIRD PHONE ANIMATION START
var thirdPhone = gsap.timeline({repeat: -1});
    //STARTING ANIMATION START
    thirdPhone.to(".three .phone-content", {
        width: "250px",
        height: "520px",
        opacity: 1,
        duration: 1
    });
    thirdPhone.to(".three .btn", {
        width: "225px",
        height: "37px",
        x: "12px",
        y: "-4px",
        ease: Power2.easeOut,
        color: "black",
        backgroundColor: "white",
        duration: .3,
        delay: 1
    });
    thirdPhone.to(".three .btn", {
        width: "100%",
        height: "45px",
        x: 0,
        y: 0,
        ease: Power2.easeOut,
        duration: .3,
        delay: .2
    });
    thirdPhone.to(".three .text, .three .unlock-text", {
        opacity: 0,
        duration: .4
    });
    thirdPhone.to(".three .text, .three .unlock-text", {
        display: "none",
        duration: 0
    });
    thirdPhone.to(".three .prices", {
        scale: 1,
        opacity: 1,
        duration: .5
    });
    //STARTING ANIMATION END

    //LOADING ANIMATION START
    thirdPhone.to(".three .spinner", {
        display: "flex",
        duration: 0.2
    });
    thirdPhone.to(".three .spinner .top", {
        rotate: 360,
        zIndex: 1,
        duration: 1.5
    });
    thirdPhone.to(".three .spinner .top", {
        borderLeftColor: "black",
        duration: 0,
        delay: -0.2
    });
    thirdPhone.to(".three .spinner .right", {
        rotate: 270,
        duration: 1.5,
        delay: -1.5
    });
    thirdPhone.to(".three .spinner .right", {
        borderLeftColor: "black",
        duration: 0,
        delay: -0.2
    });
    thirdPhone.to(".three .spinner .bottom", {
        rotate: 180,
        duration: 1.5,
        delay: -1.5
    });
    thirdPhone.to(".three .spinner .bottom", {
        borderLeftColor: "black",
        duration: 0,
        delay: -0.2
    });
    thirdPhone.to(".three .spinner .left", {
        rotate: 90,
        duration: 1.5,
        delay: -1.5
    });
    thirdPhone.to(".three .spinner .left", {
        borderLeftColor: "black",
        duration: 0,
        delay: -0.2
    });
    thirdPhone.to(checkmarkThirdPhone, {
        opacity: 1,
        height: 0,
        width: 0,
        duration: 0
    });
    thirdPhone.to(checkmarkThirdPhone, {
        display: "block",
        height: 0,
        width: 0,
        duration: 0
    });
    thirdPhone.to(checkmarkThirdPhone, {
        height: "0px",
        width: "5px",
        duration: .3
    });
    thirdPhone.to(checkmarkThirdPhone, {
        height: "10px",
        width: "5px",
        duration: 0.5,
    });
    //LOADING ANIMATION END

    //CLOSING ANIMATION START
    thirdPhone.to(".three .unlock", {
        y: 100,
        opacity: 0,
        duration: .7,
        delay: 2
    });

    thirdPhone.to(".three .phone-content", {
        opacity: 1,
        duration: 5
    });

    thirdPhone.to(".three .phone-content", {
        opacity: 0,
        duration: 1
    });
    //CLOSING ANIMATION END
//THIRD PHONE ANIMATION END
