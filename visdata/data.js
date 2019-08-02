const data = {
  results:
    {
      gender: "female",
      name: { title: "mrs", first: "caroline", last: "henderson" },
      location: {
        street: "8701 boghall road",
        city: "carrick-on-suir",
        state: "galway city",
        postcode: 26909,
        coordinates: { latitude: "19.2626", longitude: "22.7397" },
        timezone: {
          offset: "-6:00",
          description: "Central Time (US & Canada), Mexico City"
        }
      },
      email: "caroline.henderson@example.com",
      login: {
        uuid: "36a3d025-331e-4f2b-aff9-d282f3832140",
        username: "organicsnake256",
        password: "watson",
        salt: "oh49iSx8",
        md5: "b304cdcc42a0959ff9e86207e4d60ae2",
        sha1: "abbee1dafdc57fe7c47b1488ba55d267824be738",
        sha256:
          "10137ad900fc1702714732ee80d8e5619744ba856bc3f376589c0b1b36b1c307"
      },
      dob: { date: "1973-03-26T23:46:16Z", age: 46 },
      registered: { date: "2005-03-08T09:18:37Z", age: 14 },
      phone: "021-511-1202",
      cell: "081-153-1078",
      id: { name: "PPS", value: "7946780T" },
      picture: {
        large: "https://randomuser.me/api/portraits/women/95.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/95.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/95.jpg"
      },
      nat: "IE"
    },
  info: { seed: "b577c09fcddc9293", results: 1, page: 1, version: "1.2" }
};
console.log(data.results.gender);
let propic = document.createElement("img");
propic.src = data.results.picture.large;
document.body.appendChild(propic);
let h = document.createElement("h1");
h.innerText = data.results.gender + " " + data.results.email
document.body.appendChild(h)
// h.appendChild(t);
