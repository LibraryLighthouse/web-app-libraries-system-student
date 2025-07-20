interface ApiResponse {
  name: string;
  age: number;
  email?: string;
  readonly id: number;
  greet(): void;
}

interface ApiGateway {
  getUserData(userId: number): Promise<ApiResponse>;
  updateUserData(userId: number, data: Partial<ApiResponse>): Promise<ApiResponse>;
  deleteUser(userId: number): Promise<void>;
}

class ApiService implements ApiGateway {
  async getUserData(userId: number): Promise<ApiResponse> {
    // Simulate fetching user data
    return {
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      id: userId,
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      },
    };
  }

  async updateUserData(userId: number, data: Partial<ApiResponse>): Promise<ApiResponse> {
    // Simulate updating user data
    return {
      name: data.name || "John Doe",
      age: data.age || 30,
      email: data.email || "john.doe@example.com",
      id: userId,
      greet() {
        console.log(`Hello, my name is ${this.name}`);
      },
    };
  }

  async deleteUser(userId: number): Promise<void> {
    // Simulate deleting a user
    console.log(`User with ID ${userId} deleted`);
  }
}
export { ApiResponse, ApiGateway, ApiService };
