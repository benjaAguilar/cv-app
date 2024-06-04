import { v4 as uuidv4 } from "uuid";

export const userData = {
    name: "Gordon",
    surename: "Freeman",
    email: "headcrap@example.com",
    phone: "3339991299",
    city: "Ravenholm",
    state: "Barsov",
    zipCode: "1923",
    summary: "A native of Seattle, Washington, Freeman harbors an early interest in theoretical physics, such as quantum mechanics and relativity. His earliest heroes are Albert Einstein, Stephen Hawking, and Richard Feynman.",
    skills: [
        {name: "TeamWork", id: uuidv4()},
        {name: "Alien killer", id: uuidv4()},
        {name: "Active learning", id: uuidv4()},
        {name: "Computer skills", id: uuidv4()},
        {name: "Leadership", id: uuidv4()},
        {name: "Managment", id: uuidv4()},
        {name: "Problem solving", id: uuidv4()},
    ],
    work: [
        {
            job: 'Dr. theoretical physics',
            employer: 'Black mesa',
            jobDescription: ' assigned to the Anomalous Materials department doing nuclear, subatomic, and quantum research. Despite having obtained a Ph.D. from the prestigious MIT, the laboratory work that the player does as Freeman (pressing a button and pushing a cart) does not require any intellectual expertise at all (Though a possibility is all of his intellectual expenses happened before the events of the game).', 
            startDate: 'May 1 2010',
            endDate: 'Apr 7 2017',
            id: uuidv4(),
        }
    ],
    education: [{
        degree: 'Ph.D.',
        field: 'Theoretical physics',
        school: 'MIT',
        schoolLoc: 'Seattle',
        graduation: 'Dec 5 2007',
        id: uuidv4(),
    }],
};