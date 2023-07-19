export interface LoginRequest {
  getUsername(): string;
  setUsername(value: string): void;
  getPassword(): string;
  setPassword(value: string): void;
}

export interface LoginResponse {
  getAccessToken(): string;
  setAccessToken(value: string): void;
}
