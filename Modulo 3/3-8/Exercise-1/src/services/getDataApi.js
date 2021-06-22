const getDataApi = () => {
  return fetch("https://randomuser.me/api/?results=50").then((response) =>
    response.json().then((data) => {
      return data.results.map((user) => {
        return {
          id: user.login.uuid,
          name: user.name.first + " " + user.name.last,
          gender: user.gender,
          city: user.location.city,
          country: user.location.country,
          age: user.dob.age,
          email: user.email,
          username: user.login.username,
          photo: user.picture.large,
        };
      });
    })
  );
};

export default getDataApi;
