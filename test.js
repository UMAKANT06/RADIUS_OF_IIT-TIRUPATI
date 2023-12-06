const createStudent = asyncHandler(async (req, res) => {
    const { rollNumber, name, password, location, phoneNumber, interest, rewards, projects, leaderBoardRank, clubs, roomNumber, ratings, appointments } = req.body;

    // Check if the student already exists
    const existingStudent = await Student.findOne({ rollNumber });

    if (existingStudent) {
        res.status(400);
        throw new Error('Student already exists');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new student
    const newStudent = await Student.create({
        rollNumber,
        name,
        password: hashedPassword,
        location,
        phoneNumber,
        interest,
        rewards,
        projects,
        leaderBoardRank,
        clubs,
        roomNumber,
        ratings,
        appointments,
    });

    res.status(201).json(newStudent);
});