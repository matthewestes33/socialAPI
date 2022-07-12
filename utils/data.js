const users = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];
  
  const thoughts = [
    'This is fun!',
    'Did we go to high school together?',
    '+1',
    'LOL',
    'Howdy, friend!',
    'Nice picture!',
    'You look so happy!',
    'Where did you take that?',
    'Lets meet IRL sometime!',
    'OMG',
    'Love this.',
    'Reminds me of the old days.',
    'I dont see anything.',
    'We should go here @rando',
    'I disagree',
    'You think so?',
    'I just try to stay out of it.',
    'Im just here for the pictures of my grandbabies.',
    'Totally!',
    'Generic thought.',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random user
  const getRandomUser = () =>
    `${getRandomArrItem(users)}${getRandomArrItem(users)}`;
  
  // Function to generate random assignments that we can add to user object.
  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtName: getRandomArrItem(thoughts),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUser, getRandomThought };