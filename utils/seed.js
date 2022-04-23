const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing reactions
  await Reaction.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Array of users
  const users = [
    { username: "Thrall", email: "thrall@horde.com" },
    { username: "Illidan", email: "illidan@twistingnether.com" },
    { username: "Sylvanas", email: "banshee_queen@uc.com" },
    { username: "Voljin", email: "voljin_darkspear@troll.com" },
    { username: "Talanji", email: "talanji@zandalari.com" },
    { username: "Cairne", email: "cbloodhoof@thunderbluff.com" },
    { username: "Thalyssra", email: "thalyssra@suramar.com" },
    { username: "Rexxar", email: "rexxar@desolace.com" },
    { username: "Alexstrasza", email: "alexstrasza@dragon.com" },
    { username: "Garona", email: "garona@wow.com" },
    { username: "Voss", email: "lilian_voss@forsaken.com" },
    { username: "Mayla", email: "mayla@highmountain.com" },
    { username: "Chromie", email: "Chronormu@time.com" },
    { username: "Broxigar", email: "Broxigar@redaxe.com" },
    { username: "Saurfang", email: "varok@orgrimmar.com" },
  ];

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Array of thoughts
  const thoughts = [
    { thoughtText: "The beginning of wisdom is the statement 'I do not know.' The person who cannot make that statement is one who will never learn anything. And I have prided myself on my ability to learn.", username: "Thrall" },
    { thoughtText: "How easily the mind can be turned to hate from a place of fear - an instinctive, natural, protective response. Instead of focusing on the things that unite us, we focus on what divides us.", username: "Thrall" },
    { thoughtText: "Be bathed in my power! Drink in my might! Battle for the glory of the Horde!", username: "Thrall" },
    { thoughtText: "You are not prepared!", username: "Illidan" },
    { thoughtText: "I am my scars!", username: "Illidan" },
    { thoughtText: "Imprisoned for ten thousand years. Banished from my own homeland. And now you dare enter my realm?", username: "Illidan" },
  ];

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // console log that seeding is complete and exit
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
