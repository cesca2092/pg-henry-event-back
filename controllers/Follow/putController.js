const User = require("../../database/models/User");
const Promoter = require("../../database/models/Promoter");

exports.followUnfollow = async (req, res) => {
  const f = req.body;
  console.log("PROMOTER ID: ", f.id_promoter, "USER ID:", f.id_user);
  console.log("REQ.BODY: ", req.body);
  try {
    const followingList = await User.findAll({
      where: { id: f.id_user },
      attributes: ["following"],
    });
console.log("FOLLOWING LIST 1: ", followingList);
    const followerList = await Promoter.findAll({
      where: { id: f.id_promoter },
      attributes: ["followed_by"],
    });
console.log('FOLLOWER LIST 1: ', followerList);
    let f_ing = followingList[0]?.following;
    let f_ers = followerList[0]?.followed_by;
    if (f_ing?.includes(f.id_promoter)) {
        f_ing.filter(el => el !== f.id_promoter);
     } else {
         f_ing?.push(f.id_promoter);
     }
    if(f_ers?.includes(f.id_user)) {
        f_ers.filter(el => el !== f.id_user);
     } else {
         f_ers?.push(f.id_user);
        };
    console.log("FOLLOWING LIST 2: ", f_ing);
    console.log("FOLLOWER LIST 2: ", f_ers);
    await User.update(
      { following: f_ing },
      { where: { id: f.id_user } }
    );
    await Promoter.update(
    { followed_by: f_ers },
    { where: { id: f.id_promoter } }
    );

    res.json("ok");
  } catch (error) {
    console.log(error);
    res.json({ msg: "error" });
  }
};
