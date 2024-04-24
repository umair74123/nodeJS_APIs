const db = require("../config/database");

// create product
const createProduct = async (req, res) => {
    try {
        const { p_name, p_price, p_quantity } = req.body;
        const p_image = req.file ? `http://localhost:2000/profile/${req.file.filename}` : null; // Assuming Multer saves the file path in req.file.path
        
        if (!p_name || !p_price || !p_quantity) {
            return res.status(500).send({
                success: false,
                message: "Please provide all fields",
            });
        }

        const query = `INSERT INTO nodejsapis(p_name, p_price, p_image, p_quantity) VALUES (?, ?, ?, ?)`;
        const data = await db.query(query, [p_name, p_price, p_image, p_quantity]);

        if (data[0].affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: "Data didn't insert",
            });
        }

        res.status(201).send({
            success: true,
            message: "New product inserted successfully",
        });

    } catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            message: "Error in creating product",
            error: err,
        });
    }
};

module.exports = { createProduct };
