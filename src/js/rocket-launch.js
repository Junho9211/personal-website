import { gsap, MorphSVGPlugin, DrawSVGPlugin } from 'gsap/all';
gsap.registerPlugin(MorphSVGPlugin, DrawSVGPlugin);

export function rocketLaunchAnimation() {
    const container = document.querySelector('.rocket-container');
    if (!container) return;
    var spaceShuttle = document.querySelector('.spaceShuttle');

    //Speed lines
    var speedLineGroup = document.querySelector('.speedLineGroup');
    var speedLines = speedLineGroup.getElementsByTagName('line');

    //Jet smoke
    var jetSmokeGroup = document.querySelector('.jetSmokeGroup');
    var jetBubbles = jetSmokeGroup.getElementsByTagName('circle');
    jetBubbles = shuffle(Array.from(jetBubbles));

    var jetSmokeScaleGroup = document.querySelector('.jetSmokeScaleGroup');

    var jetBubbleRadiusArray = [];
    var jetBubblePosYArray = [];

    for (var i = 0; i < jetBubbles.length; i++) {
        jetBubbleRadiusArray.push(jetBubbles[i].getAttribute('r'));
        jetBubblePosYArray.push(jetBubbles[i].getAttribute('cy'));
    }

    //Flames
    var flameSVG = document.querySelector('.flameSVG');
    var flames = flameSVG.getElementsByTagName('path');

    // DOM selections
    const launcherSVG = document.querySelector('.launcherSVG');
    const launcherArm = document.querySelector('.launcherArm');
    const launcherBodyGroup = document.querySelector('.launcherBodyGroup');
    const launcherBody = document.querySelector('.launcherBody');
    const launcherRivets = document.querySelector('.launcherRivets');
    const launcherPaths = launcherSVG.getElementsByTagName('path');

    gsap.set(container, {
        position: 'absolute',
        bottom: 0,
        left: '50%',
        xPercent: -50,
        yPercent: 0
    });


    gsap.set(speedLineGroup, {
        attr: {
            y: 380
        }
    });

    gsap.set(speedLines, {
        drawSVG: '100% 100%'
    });

    speedLines = shuffle(Array.from(speedLines));

    const speedLineLoop = gsap.timeline({
        repeat: 4,
        paused: true
    }).timeScale(4);
    createSpeedLines();

    const smokeLoop = gsap.timeline();
    smokeLoop.to(jetBubbles, {
        duration: 0.23,
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    }, 0.05);

    const flameLoop = gsap.timeline();
    flameLoop.to(flames, {
        duration: 0.051,
        transformOrigin: '50% 0%',
        scale: 1.1,
        repeat: -1,
        yoyo: true
    }, 0.05);

    const tl = gsap.timeline({
        repeat: -1,
        onRepeat: resetJetBubbles
    }).timeScale(2);

    tl.set(jetSmokeScaleGroup, {
        scale: 1,
        transformOrigin: '50% 50%'
    })

    .from([ground], {
        duration: 1.1,
        drawSVG: '50% 50%',
        ease: 'power2.inOut'
    })

    .to(spaceShuttle, {
        duration: 1,
        opacity: 1
    })

    .set(flameGroup, {
        opacity: 1
    })

    .from(launcherBodyGroup, {
        duration: 1,
        scaleY: 0,
        transformOrigin: '50% 100%',
        ease: 'back.out'
    })

    .from(launcherArm, {
        duration: 2,
        rotation: -81,
        transformOrigin: '100% 50%',
        ease: 'power1.out'
    })

    .from(flameSVG, {
        duration: 6,
        attr: {
            y: '-=70'
        }
    })

    .to(launcherArm, {
        duration: 3,
        rotation: -81,
        transformOrigin: '100% 50%',
        ease: 'bounce.out'
    })

    .from(jetBubbles, {
        duration: 1,
        attr: {
            r: 0,
            cy: 550
        }
    }, '-=2')

    .to([spaceShuttle, flameSVG, speedLineGroup], {
        duration: 14,
        attr: {
            y: '-=1000'
        },
        ease: 'expo.in'
    }, '-=0.5')

    .to(flameGroup, {
        duration: 6,
        scaleY: 4,
        scaleX: 0.6,
        ease: 'expo.in'
    }, '-=7')

    .to('.jetBubbleL', {
        duration: 9,
        attr: {
            cx: '-=30'
        }
    }, '-=9')

    .to('.jetBubbleR', {
        duration: 9,
        attr: {
            cx: '+=30'
        }
    }, '-=9')

    .to(jetSmokeScaleGroup, {
        duration: 8,
        scale: 2
    }, '-=14')

    .to(jetBubbles, {
        duration: 8,
        attr: {
            r: '+=30'
        }
    }, '-=8')

    .to(jetSmokeScaleGroup, {
        duration: 8,
        scale: 0.6,
        y: '+=100',
        transformOrigin: '50% 50%',
        ease: 'power3.inOut',
        onStart: () => {
            speedLineLoop.seek(0);
            speedLineLoop.play();
        }
    }, '-=4')

    .to(launcherBodyGroup, {
        duration: 1,
        scaleY: 0,
        transformOrigin: '50% 100%',
        ease: 'back.in'
    })

    .to([ground], {
        duration: 3,
        opacity: 0,
        ease: 'power3.out'
    }, '-=0.2')

    .set(jetSmokeScaleGroup, {
        scale: 1,
        y: '-=100'
    })

    .set('.jetBubbleL', {
        attr: {
            cx: '+=30'
        }
    })

    .set('.jetBubbleR', {
        attr: {
            cx: '-=30'
        }
    });

    // ───────────────────────────────────────────────
    // Support Functions
    // ───────────────────────────────────────────────

    function createSpeedLines() {
        for (let i = 0; i < speedLines.length; i++) {
            const sl = gsap.timeline();
            sl.to(speedLines[i], {
                duration: 0.4,
                drawSVG: '100% 60%',
                ease: 'none'
            }).to(speedLines[i], {
                duration: 1,
                drawSVG: '0% 0%',
                ease: 'none'
            });

            speedLineLoop.add(sl, i);
        }
    }

    function resetJetBubbles() {
        for (let i = 0; i < jetBubbleRadiusArray.length; i++) {
            jetBubbles[i].setAttribute('r', jetBubbleRadiusArray[i]);
            jetBubbles[i].setAttribute('cy', jetBubblePosYArray[i]);
        }
    }

    function shuffle(o) {
        for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
}