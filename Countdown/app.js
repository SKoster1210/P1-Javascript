// Oude countDate = new Date(2023,3,29,00,00,0)
function countdown() {
    let countDate = new Date(2023,3,29,00,00,0).getTime()
    const now = new Date().getTime()
    const gap = countDate - now
    
    const second = 1000
    const minute = 60000
    const hour = 3600000
    const day = 86400000

    let fixedHours = (Math.floor(gap / hour)) - (Math.floor(gap / day) * 24)
    let fixedMinutes = Math.floor((gap % (1000 * 60 * 60)) / (1000*60))
    let fixedSeconds = Math.floor((gap % (1000 * 60)) / 1000)
    
    const textDay = Math.floor(gap / day)
    const textHour = fixedHours
    const textMinute = fixedMinutes
    const textSecond = fixedSeconds
    document.querySelector(".day").innerText = textDay
    document.querySelector(".hour").innerText = textHour
    document.querySelector(".minute").innerText = textMinute
    document.querySelector(".second").innerText = textSecond
}
function update() {
    countdown()
    setInterval(countdown, 1000);
}
update()