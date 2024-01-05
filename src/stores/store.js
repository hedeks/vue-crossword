import { defineStore } from "pinia";
export const crosswordStore = defineStore("crosswordStore", {
  state: () => ({
    fetchConfig: {
      headers: {
        "Content-Type": "application/json",
      },
    },
    isUserAuthorized: localStorage.getItem("token"),
    current_crossword: [],
    crossword_list: [],
    isfirstFetchReady: false,
    iscrosswordFetchReady: false,
    currentUsername: "",
    currentUserEmail: "",
    url: "http://localhost:5000",
    previous_word: {},
    current_word: {},
    currentCell: {},
    current_array_with_words: [],
    previousCell: {},
    currentCellID: "",
    previousCellID: "",
    secondclick: false,
    frominput: false,
    needed_input: {},
    right_words: [],
  }),

  actions: {
    async fetchCrossword_listFromDB() {
      await fetch(this.url + "/crosswords")
        .then((res) => res.json())
        .then((json) => (this.crossword_list = json))
        .then(() => {
          this.isfirstFetchReady = true;
        });
    },
    async fetchCurrent_crosswordFromDB(id) {
      await fetch(this.url + "/crosswords/" + `${id}`)
        .then((res) => res.json())
        .then((json) => (this.current_crossword = json))
        .then(() => {
          this.iscrosswordFetchReady = true;
          this.addIconsToCrossword();
        });
    },
    addIconsToCrossword() {
      let words = this.current_crossword.words;
      for (let word of words) {
        let img = "../src/assets/" + `${Number(word.id) + 1}` + ".svg";
        let element = document.getElementById(`${word.coordinates[0]}`);
        if (element != null) {
          element.style.backgroundSize = "9.8px 9.8px";
          element.style.backgroundRepeat = "no-repeat";
          element.style.backgroundPositionY = "10%";
          element.style.backgroundPositionX = "10%";
          element.style.backgroundBlendMode = "multiply";
          element.style.backgroundImage = `url(${img})`;
        }
      }
    },
    getCurrentCrossword() {
      if (this.current_crossword) {
        return this.current_crossword;
      } else {
        return false;
      }
    },
    checkResult() {
      this.needed_input.blur();
      let expected_word_array = this.current_word.value.split("");
      let isRight = false;

      for (let i = 0; i < this.current_word.coordinates.length; i++) {
        let letter_coordinate = this.current_word.coordinates[i];
        let letter = document.getElementById(letter_coordinate).textContent;
        let expected_letter = expected_word_array[i];

        if (expected_letter === letter) {
          isRight = true;
        } else {
          isRight = false;
        }
      }

      if (isRight) {

        if (!this.right_words.includes(this.current_word)){
          this.right_words.push(this.current_word);
        }

        for (let item in this.current_word.coordinates) {
          let cell = document.getElementById(
            this.current_word.coordinates[item]
          );
          cell.classList.remove("correct");
          cell.classList.remove("incorrect");
          cell.classList.add("correct");
        }
      } else {
        for (let item in this.current_word.coordinates) {
          let cell = document.getElementById(
            this.current_word.coordinates[item]
          );
          cell.classList.remove("correct");
          cell.classList.remove("incorrect");
          cell.classList.add("incorrect");
          this.clearTheCells()
        }
        return new Promise((resolve) =>
          setTimeout(() => {
            for (let item in this.current_word.coordinates) {
              let cell = document.getElementById(
                this.current_word.coordinates[item]
              );
              cell.classList.remove("incorrect");
            }
            resolve();
          }, 400)
        );
      }
    },
    doStepToNextCell() {
      let nextCellID = "";

      for (let cell in this.current_word.coordinates) {
        if (this.current_word.coordinates[cell] === this.currentCellID) {
          nextCellID = this.current_word.coordinates[Number(cell) + 1];
        }
      }

      let nextCell = document.getElementById(nextCellID);

      if (nextCell === null) {
        this.checkResult();
        return;
      }

      nextCell.click();
    },
    input() {
      this.currentCell.textContent = this.needed_input.value;
      this.clearTheInput();
      this.doStepToNextCell();
    },
    addClassesToLi() {
      let li = document.getElementById("li" + this.current_word.id);
      li.classList.add("currentli");
    },
    removeClassesFromLi() {
      for (let item of document.getElementsByClassName("li")) {
        item.classList.remove("currentli");
      }
    },
    removeClassesFromCells() {
      let arr = document.getElementsByClassName("cell");

      for (let item of arr) {
        item.classList.remove("picked_cell");
        item.classList.remove("currentcell");
      }
    },
    calculateCurrentWord() {
      if (this.current_array_with_words.length === 1) {
        this.current_word = this.current_array_with_words[0];
        return;
      }

      if (this.current_array_with_words.length === 2) {
        if (
          this.previous_word === this.current_array_with_words[0] &&
          !this.secondclick
        ) {
          this.current_word = this.previous_word;
          return;
        }

        if (
          this.previous_word === this.current_array_with_words[1] &&
          !this.secondclick
        ) {
          this.current_word = this.previous_word;
          return;
        }

        if (this.frominput) {
          if (this.previous_word === this.current_array_with_words[0]) {
            this.current_word = this.current_array_with_words[0];
            return;
          } else {
            this.current_word = this.current_array_with_words[1];
            return;
          }
        }

        if (!this.frominput && this.secondclick) {
          if (this.previous_word === this.current_array_with_words[0]) {
            this.current_word = this.current_array_with_words[1];
            return;
          } else {
            this.current_word = this.current_array_with_words[0];
            return;
          }
        }
        this.current_word = this.current_array_with_words[0];
      }
    },
    clearTheCells(){
      for (let item in this.current_word.coordinates) {
        let cell = document.getElementById(
          this.current_word.coordinates[item]
        );
        cell.textContent = "";
      }
    },
    clearTheInput() {
      this.needed_input.value = "";
    },
    blur() {
      this.clearTheInput();
      this.removeClassesFromCells();
      this.removeClassesFromLi();
    },
    calculateCurrentArrayWithWords() {
      let arr = new Array();
      for (let word of this.current_crossword.words) {
        if (word.coordinates.includes(this.currentCellID)) {
          arr.push(word);
        }
      }
      this.current_array_with_words = arr;
    },
    addClassesToCurrentWordCells() {
      for (let cell of this.current_word.coordinates) {
        document.getElementById(cell).classList.add("currentcell");
      }
    },
    clickToLi(index) {
      this.current_word = this.current_crossword.words[index];
      this.previous_word = this.current_word;
      this.previousCellID = this.current_word.coordinates[1];
      document
        .getElementById(this.current_word.coordinates[0])
        .click();
    },
    addClassToCurrentCell(id) {
      if (!document.getElementById(id).classList.contains("blackcell")) {
        this.currentCellID = id;
        this.currentCell = document.getElementById(this.currentCellID);

        if (this.previousCellID === this.currentCellID) {
          this.secondclick = true;
        } else {
          this.secondclick = false;
        }
        if (Object.keys(this.previousCell).length === 0) {
          this.previousCell = this.currentCell;
          this.previousCellID = this.currentCellID;
        }
        this.needed_input.focus();
        this.removeClassesFromCells();
        this.currentCell.classList.add("picked_cell");
        this.calculateCurrentArrayWithWords();
        this.calculateCurrentWord();
        this.addClassesToCurrentWordCells();
        this.addClassesToLi();
        this.previous_word = this.current_word;
      }
    },
    async register(email, password, login) {
      try {
        const response = await fetch(this.url + "/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
            name: login,
          }),
        });
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    async login(email, password) {
      try {
        const response = await fetch(this.url + "/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        const data = await response.json();
        this.isUserAuthorized = true;
        localStorage.setItem("token", data.token);
        this.fetchConfig.headers.Authorization = data.token;

        return true;
      } catch (error) {
        return error;
      }
    },
    async fetchUser() {
      if (!localStorage.getItem("token")) {
        console.error("Token not found");

        return false;
      }
      const response = await fetch(this.url + "/api/user", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (!response.ok) {
        return false;
      }
      const data = await response.json();
      this.currentUserEmail = data[0].email;
      this.currentUsername = data[0].name;
      return true;
    },
    async checkEmail(email) {
      const response = await fetch(this.url + "/api/search?q=" + `${email}`);
      if (!response.ok) {
        return false;
      }
      return true;
    },
  },
});
