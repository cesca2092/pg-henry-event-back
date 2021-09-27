////////////////////////// MODEL IMPORTS

// User types
const User = require('./models/User');
const Promoter = require('./models/Promoter');
// const Webmaster = require('./models/Webmaster');

// Other entities
const Event = require('./models/Event');
const Comment = require('./models/Comment');
// const Favorite = require('./models/Favorite');

// Event related models
const Location = require('./models/Location');
// const Schedule = require('./models/Schedule');
// const Tag = require('./models/Tag');
// const Guest = require('./models/Guest');

////////////////////////// E/R

//user - comment
User.hasMany(Comment);
Comment.belongsTo(User);



//event - comment
Event.hasMany(Comment);
Comment.belongsTo(Event);

//event-location
Location.hasMany(Event);
Event.belongsTo(Location);

//promoter-event
Promoter.hasMany(Event);
Event.belongsTo(Promoter);






// User.hasOne(Location);
// User.hasMany(Comment);
// User.hasMany(Favorite); ***** REVISAR.
// Favorite.belongsTo(User); ***** REVISAR.

/* User.belongsToMany(Event, {through: "attendees"});
??? No deja al modelo Favorite obsoleto? De algo me estoy perdiendo
O discriminar entre asistir y agregar a favoritos? Cómo exactamente? */

/* SI LOS hasMany NO FUNCIONAN, CAMBIAR POR:

    User.hasMany(Comment, {as: 'comment', foreignKey: "comment_id"})
    Comment.belongsTo(User, {as: 'user', foreignKey: "user_id"})

    Promoter.hasMany(Event,{as: 'event', foreignKey: "event_id"});
    Event.belongsTo(Promoter,{as: 'promoter' ,foreignKey: "promoter_id"});

*/




// User.belongsToMany(Promoter, {through: "following"});
// User.belongsToMany(User, {through: "friends"}); *** VER SI FUNCIONA.

// Webmaster.hasMany(Event);
// Webmaster.hasMany(Promoter);
// Webmaster.hasMany(Comment); // (¿Que el webmaster comente?)

// Promoter.belongsTo(Webmaster);
// Promoter.hasOne(Location);
// Promoter.hasMany(Event);
// Promoter.hasMany(Comment);
// Promoter.belongsToMany(User, {through: "following"});

// Event.belongsTo(Promoter);
// Event.belongsTo(Webmaster);
// Event.belongsToMany(User, {through: "attendees"});
// Event.belongsToMany(Location, {through: "event_location"});
// Location.belongsToMany(Event, {through: "event_location"});
// Event.belongsToMany(Schedule, {through: "event_schedule"});
// Schedule.belongsToMany(Event, {through: "event_schedule"});
// Event.belongsToMany(Tag, {through: "event_tags"});
// Tag.belongsToMany(Event, {through: "event_tags"});
// Event.belongsToMany(Guest, {through: "starring"});
// Guest.belongsToMany(Event, {through: "starring"});

// Comment.belongsTo(User);
// Comment.belongsTo(Promoter);
// Comment.belongsTo(Webmaster);

// Location.belongsTo(User);
// Location.belongsTo(Promoter);

// SEGÚN ANOTADOR. CHEQUEAR SI SE NECESITA AGREGAR

