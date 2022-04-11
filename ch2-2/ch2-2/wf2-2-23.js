/**
 * wf2-2-23.js
 */

async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({});
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
    // 생략
  } catch (error) {
    console.error(error);
  }
}

// 각각의 promise 에러 처리를 위해서 각각을 try ~ catch로 구성
