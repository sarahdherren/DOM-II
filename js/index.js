// Your code goes here
const nav = document.querySelector('.nav');
nav.addEventListener('mouseover', (e) => {
    e.target.style.fontSize = '1.8rem';
});

nav.addEventListener('mouseout', (e) => {
    e.target.removeAttribute('style');
});

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(e => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
    })
});

const header = document.querySelector('.nav');
header.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = "#1D726D";
    e.target.style.color = "white";
}, true);

header.addEventListener('mouseleave', (e) => {
    e.target.removeAttribute('style');
});

const h1 = document.querySelector('.logo-heading');
h1.addEventListener('mouseenter', colorSwap)

h1.addEventListener('mouseleave', colorSwap)

const funBus = document.querySelectorAll('img');

function rgbNumber(num) {
    return Math.floor(Math.random() * (num + 1));
}
window.addEventListener('keydown', (e) => {
    console.log("funBus!");
    const flashColor = `rgb(${rgbNumber(255)}, ${rgbNumber(255)}, ${rgbNumber(255)}`;
    document.body.style.backgroundColor = flashColor;
})

const body = document.querySelector('body');
body.addEventListener('mouseenter', (e) => {
    e.target.style.cursor = "url('https://cvws.icloud-content.com/B/AbNPVkWP5_Ado6o222ub2qCvFdX8ATWKIttLcoY-IG72n0RQMocDSYmv/pointer.png?o=AuN2MQDoIxQgXGPokfKNcwTg-nGbZeFQFCyiWCAh0hpi&v=1&x=3&a=CAogmTO03-G3kSBIAN-oirt-8D9vaRKckEprOsNOYv29rKgSbRCj1-Ph8C4Yw86a4vAuIgEAUgSvFdX8WgQDSYmvaibxqSqCP8xOLhZuvYRDkr_2HgYspfy4SxE7mOEuVsmtY4xzC56XJnImZ2VfK3gO4MOoTWYE1jMxYU9NwMx2448Sk44TL7-dM-bUNRWHqZA&e=1610818692&fl=&r=2be94c6c-76f6-47f8-b051-c05039fc05fe-1&k=BT52Q419j0PGs4aLDIi7vA&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=11&s=9dbHr7lVaLieAs7ZWx6moWDUNNc&cd=i'), auto";
})
const btn = document.querySelectorAll('.btn');
const destination = document.querySelectorAll('p');
const h2 = document.querySelectorAll('h2');

destination.forEach(e => {
    e.addEventListener('mouseenter', colorSwap);
});

h2.forEach(e => {
    e.addEventListener('mouseenter', colorSwap);
});

destination.forEach(e => {
    e.addEventListener('mouseleave', colorSwap);
});

h2.forEach(e => {
    e.addEventListener('mouseleave', colorSwap);
});

btn.forEach(e => {
    e.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "#1D726D";

    })
});

btn.forEach(e => {
    e.addEventListener('mouseleave', (e) => {
        e.target.removeAttribute('style');
    })
})

function colorSwap(e) {
    if (e.type == 'mouseenter') {
        e.target.style.backgroundColor = "#1D726D";
        e.target.style.color = "white";

    }
    else if (e.type != 'mouseenter') {
        e.target.removeAttribute('style');
    }
};

function imageResize() {
    funBus.forEach(e => {
        if (e.type === 'scroll') { }
        e.style.borderRadius = '50%';
        e.style.transform = 'scale(1.2)';
        e.style.transition = '4s ease';
    })

}

function reset() {
    funBus.forEach(e => {
        e.removeAttribute('style');
    })
}

window.addEventListener('scroll', imageResize);
window.addEventListener('transitionend', reset);
