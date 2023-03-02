const getCharacterDetails = async () => {
  try {
    const character = await fetch(
      `${BASE_URL}/person/${getRandomCharacterId}?api_key=bafa95475f72b2ff248b2271b0dc6f0e&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    console.log("ERROR", error);
  }
};

const getPopularCharacter = async () => {
  try {
    const popular = await fetch(
      `${BASE_URL}/person/popular?api_key=bafa95475f72b2ff248b2271b0dc6f0e&language=es-ES`
    )
      .then((response) => response.json())
      .then((data) => data);

    console.log("1", {
      deathday: character.deathday,
      profile_path: character.profile_path,
    });
    // if (character.deathday || !character.profile_path) {
    //   console.log("2");
    //   getCharacterDetails();
    // }
  } catch (error) {
    console.log("ERROR", error);
  }
};
