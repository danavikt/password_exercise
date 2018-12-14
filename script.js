document.querySelector('#inputs button[name="add"]').addEventListener("click", (item) => {

  const render = () => {
    const output = document.querySelector("#output");
    const password = document.createElement("div");
    password.textContent = newPassword;
  
    output.appendChild(password);
  }

      const basicPassword = document.querySelector('#inputs input[name="basicPassword"]').value;
      const serviceName = document.querySelector('#inputs input[name="serviceName"]').value;

      const lastCharacter = serviceName.match(/.$/gm);

      const countVowels = ((serviceName).match(/[a,e,i,o,u,y]/gm)|| []).length;

      function vowelsf() {
        return countVowels > 0 ? serviceName[countVowels-1] : serviceName[0];
      }

      const firstVowel = vowelsf();

      const nonVowelCharacters = ((serviceName).match(/[^a,e,i,o,u,y]/gm)|| []).length;
 
      const firstCharacter = serviceName.match(/^./gm);

      const newPassword = lastCharacter.concat(firstVowel, basicPassword, nonVowelCharacters, firstCharacter).join("");
      render();

});
