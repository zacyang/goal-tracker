import axois from '../../node_modules/axios';

export default class GoalService {
    constructor(apiUrl) {
        this.store = window.localStorage;
        this.apiUrl = apiUrl;
        //this.store.removeItem("goals");
    }

    updateGoals(newGoal) {
        let goals =         JSON.parse(this.store.getItem("goals")) || [];
        this.store.setItem("goals", JSON.stringify([...goals, newGoal]));

    }

    getGoals() {
        return JSON.parse(this.store.getItem("goals")) || [];
    }

}
