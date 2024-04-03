// import React, { useState } from "react";
// import useSession from "../../hooks/useSession";
// import AxiosClient from "../../client/client";

// const SignupForm = () => {
//   const session = useSession();
//   const [signupFormData, setSignUpFormData] = useState({});

//   const onChangeInput = (e) => {
//     const { name, value } = e.target;
//     setSignUpFormData({
//       ...signupFormData,
//       [name]: value,
//     });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `${process.env.REACT_APP_SERVER_BASE_URL}/createUsers`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(signupFormData),
//         }
//       );
//       if (response.ok) {
//         console.log("User created successfully");
//       } else {
//         console.error("Error creating user");
//       }
//     } catch (error) {
//       console.error("Error creating user:", error.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <input onChange={onChangeInput} type="text" name="firstName" />
//       <input onChange={onChangeInput} type="text" name="lastName" />
//       <input onChange={onChangeInput} type="email" name="email" />
//       <input onChange={onChangeInput} type="password" name="password" />
//       <input onChange={onChangeInput} type="text" name="age" />
//       <button type="submit" className="btn btn-primary">
//         Registrati
//       </button>
//     </form>
//   );
// };

// export default SignupForm;
