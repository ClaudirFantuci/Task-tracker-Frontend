import BaseService from "./BaseService";

class TaskService extends BaseService {
    constructor() {
        super("/tasks");
    }

    async getTasks(status) {
        const url = status && status !== "ALL" ? `${this.endPoint}?status=${status}` : this.endPoint;
        return await this.api.get(url);
    }

    async createTask(task) {
        return await this.insert(task);
    }

    async updateTask(id, task) {
        return await this.api.put(`${this.endPoint}/${id}`, task);
    }

    async deleteTask(id) {
        return await this.delete(id);
    }
}

export default TaskService;