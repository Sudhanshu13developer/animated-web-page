gsap.from(".navbar_part1,h3,.navbar_last",{
    y:-80,
    duration:2,
    delay:.5,
    opacity:1
})
gsap.to("h1",{
    opacity:0
})
gsap.from("h1",{
    y:100,
    duration:2,
    stagger:2,
    opacity:1
})
gsap.from("#image1,#image2,#image3",{
    scale:0,
    duration:2,
    stagger:2
})
gsap.from("h5",{
y:-50,
duration:2,
delaY:7,
repeat:-1,
stagger:7,
yoyo:true
})
