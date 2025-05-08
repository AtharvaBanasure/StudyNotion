const mongoose = require("mongoose")

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
  courseName: { type: String },
  courseDescription: { type: String },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  whatYouWillLearn: {
    type: String,
  },
  courseContent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  ratingAndReviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RatingAndReview",
    },
  ],
  price: {
    type: Number,
  },
  thumbnail: {
    type: String,
  },
  tag: {
    type: [String],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "Category",
  },
  studentsEnroled: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  ],
  instructions: {
    type: [String],
  },
  status: {
    type: String,
    enum: ["Draft", "Published"],
  },
  createdAt: { type: Date, default: Date.now },
})

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema)



// select sum(price) from courses where status="Published" groupby(category);

// select cat.categoryName,sum(cou.price) from courses cou join categorgy cat on cou.categoryId=cat.categoryId groupby(cat.categoryID)

// select cat.categoryName,sum(cou.price) from courses cou join categorgy cat on cou.categoryId=cat.categoryId groupby(cat.categoryID,cou.status)



//[0,1,2,3,4,5,6]

//(n*(n+1))/2;


// 6=>  (6*7)/2==21

// 0=>  (0*1)/2==0
// sum=21

// int x=((arr[n-1]*(arr[n-1]+1)))/2

//6
//[-2,-1,0,1,2,3]

// int y=(-1*((-1*arr[0]*(-1*arr[0]+1))/2))

// 6-3==3