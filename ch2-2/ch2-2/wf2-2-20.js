/**
 * wf2-2-20.js
 */

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .then((user) => {
      // 생략
    })
    .catch((err) => {
      console.error(err);
    });
}

// findOne과 save 메서드가 내부적으로 프로미스 객체를 가지고 있다고 가정
// new Promise가 함수 내부에 구현되어 있어야 함
