export interface AuthRequest {
  getUsername(): string;
  setUsername(value: string): void;
  getPassword(): string;
  setPassword(value: string): void;
}

export interface AuthResponse {
  getAccessToken(): string;
  setAccessToken(value: string): void;
}
