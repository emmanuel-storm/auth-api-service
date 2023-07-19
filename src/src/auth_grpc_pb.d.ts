// package: auth
// file: src/auth.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as src_auth_pb from "../src/auth_pb";

interface IAuthServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAuthServiceService_ILogin;
}

interface IAuthServiceService_ILogin extends grpc.MethodDefinition<src_auth_pb.LoginRequest, src_auth_pb.LoginResponse> {
    path: "/auth.AuthService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<src_auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<src_auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<src_auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<src_auth_pb.LoginResponse>;
}

export const AuthServiceService: IAuthServiceService;

export interface IAuthServiceServer {
    login: grpc.handleUnaryCall<src_auth_pb.LoginRequest, src_auth_pb.LoginResponse>;
}

export interface IAuthServiceClient {
    login(request: src_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: src_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: src_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: src_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}

export class AuthServiceClient extends grpc.Client implements IAuthServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public login(request: src_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: src_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: src_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: src_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: src_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: src_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
}
