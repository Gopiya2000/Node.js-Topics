count = 0
let clear = setInterval(() => {
    if (count < 4)
        console.log("Gopiya")
    else
        clearInterval(clear)
    count++
}, 2000)