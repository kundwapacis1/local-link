import file from "../models/file.js";
export const uploadFile = async (req, res) =>{
    try {
        const file = new File({
            filename: req.file.originalname,
            path: req.file.path,
            size: req.file.size,
            mimetype: req.file.mimetype
        });
        await file.save();
        res.status(201).json({message: "file uploaded successfully", file});

    } catch(error) {
        res.status(500).json({ error: error.message});
    }  
};
export const getFiles = async (req, res) => {
    try {

    } catch (error){
        res.status(500).json({ error: error.message});

    }
};

export const downloadFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) return res.status(404).json({message: "File not found"});
        res.download(path.resolve(file.path), file.filename);
    } catch (error) {
        res.status(500).json( { error: error.message});

    }
};