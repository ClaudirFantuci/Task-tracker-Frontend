import BaseService from "./BaseService";

class AuthenticationService extends BaseService {
    constructor() {
        super("/auth");
    }

    async login(data) {
        return await this.api.post(`${this.endPoint}/login`, data);
    }

    async register(data) {
        return await this.api.post(`${this.endPoint}/register`, data);
    }
}

export default AuthenticationService;