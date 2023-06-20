const Post=require('../models/posts')
const Comments=require('../models/comments')

module.exports.createPost=async (req,res)=>{
    await Post.create({
        content:req.body.content,
        user:req.user._id
    }).catch(err=>{
        console.error(err);
    })
    res.redirect('/')
}
module.exports.editPost=async (req,res)=>{
    await Post.findOneAndUpdate(
        { _id: req.body.id },
        { content: req.body.content},
        // If `new` isn't true, `findOneAndUpdate()` will return the
        // document as it was _before_ it was updated.
        { new: true }
      ).catch((err) => {
        console.log(err);
      });
    res.redirect('/users/profile');
}
module.exports.commentPost=async (req,res)=>{
    await Comments.create({
        content:req.body.content,
        user:req.body.user_id,
        post:req.body.post_id
    })
    res.redirect('/users/profile')
}
module.exports.loadComments=async (req,res)=>{
    let val=await Comments.find({});
    res.redirect('user_profil',{postComments:val});

}
