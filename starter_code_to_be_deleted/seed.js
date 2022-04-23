const connection = require("../config/connection");
const { User, Thought, Reaction } = require("../models");
const { getRandomName, getRandomAssignments } = require("./data");

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

  // Loop 20 times -- add students to the students array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const assignments = getRandomAssignments(20);

    const fullName = getRandomName();
    const first = fullName.split(" ")[0];
    const last = fullName.split(" ")[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    students.push({
      first,
      last,
      github,
      assignments,
    });
  }

  // Add students to the collection and await the results
  await Student.collection.insertMany(students);

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await Course.collection.insertOne({
    courseName: "UCLA",
    inPerson: false,
    students: [...students],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
