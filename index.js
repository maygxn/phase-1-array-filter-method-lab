// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
// expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
// });


function findMatching(drivers, letters) {
    return drivers.filter(function (drivers) {
        return drivers.toLowerCase() === letters.toLowerCase()
    }
)}

const fuzzyMatch = (beginning, midend) => beginning.filter(beginning => beginning.startsWith(midend))

function matching(beginning, midend) {
    const matchLetter = [];
    for (const beginning of midend) {
        if (beginning.name === midend) {
            matchLetter.push(beginning);
        }
    }
    return matchLetter;
}

function matchName(drivers, data) {
    const matches = [];
    for (const car of drivers) {
        if (car.name === data) {
            matches.push(car)
        }
    }
    return matches;
}