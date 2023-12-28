import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../services/api";

export const getMyProfile = createAsyncThunk(
  "user/getUSerProfile",
  async () => {
    try {
      const response = await api.get("users/me/");
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log("errrr is ", error);
      throw error;
    }
  }
);

export const createCompany = createAsyncThunk(
  "user/createCompany",
  async (formData) => {
    try {
      const response = await api.post("company/", formData);
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log("errrr is ", error);
      throw error;
    }
  }
);

export const updateCompany = createAsyncThunk(
  "company/id",
  async ({ id, formData }) => {
    try {
      const response = await api.put(`company/${id}`, formData);
      if (response?.data) {
        return response.data;
      }
    } catch (error) {
      console.log("errrr is ", error);
      throw error;
    }
  }
);

export const getCompanies = createAsyncThunk("user/getCompany", async () => {
  try {
    const response = await api.get("company");
    if (response?.data) {
      return response.data;
    }
  } catch (error) {
    console.log("errrr is ", error);
    throw error;
  }
});
