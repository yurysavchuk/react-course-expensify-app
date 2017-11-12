import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

  //child_removed
//   database.ref('expenses').on('child_removed', (snapshot) => {
//       console.log(snapshot.key, snapshot.val());
//   });

  //child_changed
//   database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//   database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 2342352223
// });


//   database.ref('notes/-Kygb_ZwizSLJUomxY95').remove();

//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//   });

// database.ref('notes').set(notes);
// database.ref('notes/12')

//   database.ref().on('value', (snapshot) => {
//       const val = snapshot.val();
//       console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
//   })

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e);
//     });

//   database.ref()
//   .remove()
//   .then(() => {
//       console.log('Remove succeeded.');
//   }).catch((error) => {
//       console.log('Remove failed', error);
//   });

//   database.ref().set({
//       name: 'Yury Sauchuk',
//       age: 22,
//       stressLevel: 6,
//       job: {
//           title: 'Software developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'Minsk',
//           country: 'Belarus'
//       }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });

//   database.ref().update({
//      stressLevel: 9,
//      'job/company': 'Amazon',
//      'location/city': 'Seattle'
//   });
