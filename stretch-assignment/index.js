const red = document.getElementsByClassName('block--red')
const blue = document.getElementsByClassName('block--blue')
const green = document.getElementsByClassName('block--green')
const pink = document.getElementsByClassName('block--pink')
const gray = document.getElementsByClassName('block--gray')

const blockContainer = document.querySelector('.blocks')

const allBlocks = document.querySelectorAll('.block')

const blocksArray = Array.from(allBlocks)



blocksArray.forEach(block => {
    block.addEventListener('mousedown', (e => {
        gsap.to(e.target, {rotation: 0, x: 1200, duration: 10, paused: false });
    }))
})

// blocksArray.forEach((block, i) => {
//     block.addEventListener('click', (e) => {
//         console.log(e.target)
//         if(e.target === block) {
//         blocksArray.splice(i, 1)
//         const up = remove.unshift(block)
//         return up
        // let newBlock = e.target.cloneNode(true)
        // console.log(newBlock)
        // e.target.remove(block)
        // //document.getElementsByClassName('blocks').prepend(newBlock)
        // newBlock.insertBefore(newBlock, blockContainer.firstChild)
//     }})
// })
//error: document.getElementsByClassName(...).prepend is not a function
// at HTMLDivElement.<anonymous> (index.js:22)