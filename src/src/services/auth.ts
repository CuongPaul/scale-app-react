import apiClient from ".";

const signOut = async () => {
  const { data } = await apiClient({ method: "POST", endpoint: "sign-out" });

  window.location.href = "/";
  localStorage.removeItem("accessToken");

  return data;
};

const refreshAccessToken = async () => {
  try {
    const { data } = await apiClient({
      method: "POST",
      allowRefresh: false,
      endpoint: "refresh-access-token",
    });

    if (data?.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
    }

    return data;
  } catch (err) {
    window.location.href = "/";
    localStorage.removeItem("accessToken");
  }
};

export { signOut, refreshAccessToken };
