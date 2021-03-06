import { AxiosResponse } from "axios";
import { IAddresses, IUser } from "../../features/auth/userSlice";
import { API } from "../index";

interface IUpdateUserProps {
  firstName: string;
  lastName: string;
}

interface IChangePasswordProps {
  oldPassword: string;
  newPassword: string;
  newConfirmPassword: string;
}

export function updateUser(data: IUpdateUserProps): Promise<AxiosResponse<IUser, any>> {
  return API.put("/user", data);
}

export function changePassword(data: IChangePasswordProps): Promise<AxiosResponse> {
  return API.patch("/user", data);
}

export function updateAddress(data: IAddresses): Promise<AxiosResponse<IAddresses[], any>> {
  return API.patch("/user/address", data);
}

export function addAddress(data: Omit<IAddresses, "id">): Promise<AxiosResponse<IAddresses[], any>> {
  return API.post("/user/address", data);
}
