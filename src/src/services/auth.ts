import apiClient from ".";

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

export { refreshAccessToken };
