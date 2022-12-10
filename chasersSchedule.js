// A runner, who runs with base speed s with duration t will cover a distances d: d = s * t
// However, this runner can sprint for one unit of time with double speed s * 2
// After sprinting, base speed s will permanently reduced by 1, and for next one unit of time runner will enter recovery phase and can't sprint again.

// Your task, given base speed s and time t, is to find the maximum possible distance d.

const solution = (s, t) => {
    let distance = s * t
    let maxSprint = Math.ceil(t / 2)

    for(let i = 0; i < maxSprint; i++) {
        if (s - 3 * i > 0) {
            distance += s - 3 * i
        }
    }
    return distance
}