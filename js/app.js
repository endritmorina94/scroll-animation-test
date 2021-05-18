var tl = gsap.timeline({repeat: -1, repeatDelay: 1});

    tl.to(".phone-content", {
        opacity: 1,
        scale: 1,
        duration: 1
    });

    tl.to(".btn", {
        scale: .9,
        color: "black",
        backgroundColor: "white",
        duration: .2,
        delay: 1
    });

    tl.to(".btn", {
        scale: 1,
        duration: .5,
        delay: .2
    });

    tl.to(".prices", {
        scale: 1,
        opacity: 1,
        duration: .5
    });

    tl.to(".unlock", {
        y: 100,
        opacity: 0,
        duration: .7,
        delay: 2
    });

    tl.to(".phone-content", {opacity: 1, duration: 6.5});
    tl.to(".phone-content", {opacity: 0, duration: .5});
