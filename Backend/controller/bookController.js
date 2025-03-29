import { BookModel } from "../models/books.js";

export const getBook = async (req, res) => {
  try {
    const { title, caption, image, rating } = req.body;

    if (!title || !caption || !image || !rating) {
      return res
        .status(400)
        .json({ message: "Please provide all the fields", success: false });
    }

    const book = new BookModel({
      title,
      caption,
      rating,
      image,
      user: req.user._id,
    });
    await book.save();
    res
      .status(201)
      .json({ message: "New book has been added!!", sucess: true, book });
  } catch (error) {}
};

export const displayBook = async(req,res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 5;
        const skip = (page -1 ) * limit

        const books = await BookModel.find()
        .sort({createdAt:-1})
        .skip(skip)
        .limit(limit)
        .poplate("user" , "name")

        const totalbooks = await BookModel.countDocuments()
    
        res.send({books,currentpage:page ,totalbooks,totalpages : Math.ceil(totalbooks / limit)})
        
    } catch (error) {
        return res.status(500).json({message : "Internal server Error", success : false , error : error.message})
        
    }


}
