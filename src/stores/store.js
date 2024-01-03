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
    currentCell: {},
    previousCell: {},
    currentCellID: "",
    previousCellID: "",
    secondClick: false,
    frominput: false,
    needed_input: {},
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
        });
    },
    getCurrentCrossword() {
      if (this.current_crossword) {
        return this.current_crossword;
      } else {
        return false;
      }
    },
    removeClassesFromCells() {
      let arr = document.getElementsByClassName("cell");
      for (let item of arr) {
        item.classList.remove("picked_cell");
        item.classList.remove("currentcell");
      }
    },
    addClassesToCurrentCells() {},
    addClassToCurrentCell(id) {
      if (!document.getElementById(id).classList.contains("blackcell")) {
        this.currentCellID = id;
        this.currentCell = document.getElementById(this.currentCellID);

        if (Object.keys(this.previousCell).length === 0) {
          this.previousCell = this.currentCell;
          this.previousCellID = this.currentCellID;
        }
        this.needed_input.focus()
        this.removeClassesFromCells();
        this.currentCell.classList.add("picked_cell");
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
