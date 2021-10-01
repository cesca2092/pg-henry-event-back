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

// {"name":"Cirque du Soleil en México JOYA ",
//   "description":"JOYÀ el primer espectáculo permanente de Cirque du Soleil en México combina artes culinarias y escénicas en un teatro íntimo diseñado para envolver al público a través de los cinco sentidos JOYÀ habla de la aventura de una adolescente que es repentinamente catapultada al corazón de una jungla misteriosa que se encuentra dentro del universo de su abuelo un hombre extravagante amante de la naturaleza quien busca sin cesar el sentido de la vida No se pierdan la oportunidad de probar deliciosos platillos y vivir una noche inolvidable en el teatro Cirque du Soleil en Vidanta Riviera Maya JOYÀ un show en el que la felicidad la fuerza y la amistad conquistan todo",
//  "starring":"Varios",
//  "remote":false,
//  "location":[],
//  "address":"Benito Juarez 419 ",
//  "pictures":[
//    "https://i.ytimg.com/vi/BFUCMWHCfxk/hqdefault.jpg",
//    "https://www.nitu.mx/wp-content/uploads/2019/09/Vidanta-Cirque-du-Soleil-Joy%C3%A1.jpg",
//    "https://glits.mx/wp-content/uploads/2019/11/ea359c3e-fd4b-4f9a-9a51-a323a3096974.jpg",
//    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YPms9TT5f8hr9Y3o5_yhkQm1eG3oWyVpqQSpDE4J-kDN_NRt&s",
//    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6T6_YH5vLj5q3PEwRuYTStZAxLXSoWZ4pn24hTlbkq7taaEo&s"],
//  "start_date":"2021-10-5",
//  "finish_date":"2022-10-17",
//  "schedule":["16:00","18:00","20:00","22:00"],
//  "isrecurrent":false,
//  "weekdays":["Lunes","Martes","Miércoles","Jueves","Sábado"],
//  "tags":"Interiores",
//  "age_rating":"0+",
//  "price":"1,800",
//  "ticket_limit":100,
//  "seat_booking":"hola"}