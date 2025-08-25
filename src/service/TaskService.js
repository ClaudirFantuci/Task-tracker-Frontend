import BaseService from "./BaseService";

class TaskService extends BaseService {
    constructor() {
        super("/task");
    }

    async getTasks(status) {
        const query = status && status !== "ALL" ? `?status=${status}` : "";
        return await this.api.get(`${this.endPoint}${query}`);
    }

    async createTask(data) {
        return await this.api.post(this.endPoint, data);
    }

    async updateTask(id, data) {
        return await this.api.put(`${this.endPoint}/${id}`, data);
    }

    async deleteTask(id) {
        return await this.api.delete(`${this.endPoint}/${id}`);
    }
}

export default TaskService;