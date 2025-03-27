var express = require("express");
var router = express.Router();

const students = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com", phone: "123-456-7890" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com", phone: "987-654-3210" },
    { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com", phone: "555-666-7777" }
];

// Відповідь зі списком студентів
router.get("/users", (req, res) => {
    res.json(students);
});

// Відповідь з конкретним студентом за ID
router.get("/users/:id", (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    
    if (!student) {
        return res.status(404).json({ error: "Student not found" });
    }

    res.json(student);
});

module.exports = router;
    