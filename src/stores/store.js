import { defineStore } from "pinia";
export const crosswordStore = defineStore("crosswordStore", {
  state: () => ({
    isUserAuthorized: false,
    current_crossword: [],
    crossword_list: [],
    isfirstFetchReady: false,
    iscrosswordFetchReady: false,
  }),

  actions: {
    fetchCrossword_listFromDB() {
      fetch("http://localhost:5000/crosswords")
        .then((res) => res.json())
        .then((json) => (this.crossword_list = json))
        .then(() => {
          this.isfirstFetchReady = true;
        });
    },
    fetchCurrent_crosswordFromDB(id) {
      fetch("http://localhost:5000/crosswords/" + `${id}`)
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
    addClassToCurrentCell(id){
      document.getElementById(id).classList.add('currentcell');
    }
  },
});
