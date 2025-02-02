export const fetchData = (path, data = null, method = "POST", token = null) => {
  let url = `${import.meta.env.SERVER_URL}/${path}`;
  let body = method == "GET" ? null : JSON.stringify(data ? { ...data } : "");

  let content = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // "client-id": import.meta.env.CLIENT_ID,
    },
    body: body,
  };

  // Additional for auth
  if (token) {
    content.headers = {
      ...content.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  // console.log({ path, method, data });
  // console.log(data);
  console.log(path);
  return fetch(url, content)
    .then(async (result) => {
      if (result.status === 404) {
        console.trace("404", path);
      }
      //console.log("fetch: " + path, { result });
      if (result.ok) {
        return result.json();
      } else {
        // console.log(result);
        // console.log(path);
        let type = result.headers.get("content-type");
        if (type && type.includes("application/json")) {
          // console.log("json");
          return result.json();
        } else {
          // console.log("text-----------------", text);
          let text = await result.text();
          throw new Error(text);
        }
      }
    })
    .then((parsed) => {
      return parsed ? parsed : { success: false };
    })
    .catch((err) => {
      console.log({ err });
      return { success: false };
    });
};

export async function fetchDatAuth(path, data, method = "POST", token = null) {
  let url = `${import.meta.env.SERVER_URL}/${path}`;
  let body = method === "GET" ? null : JSON.stringify(data || {});

  let content = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "client-id": import.meta.env.CLIENT_ID,
    },
    body: body,
  };

  if (token) {
    content.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const result = await fetch(url, content);

    if (result.ok) {
      return await result.json();
    } else {
      const type = result.headers.get("content-type");
      if (type && type.includes("application/json")) {
        return await result.json();
      } else {
        const text = await result.text();
        console.error(`Error response: ${text}`);
        return { success: false, message: text };
      }
    }
  } catch (error) {
    console.error("Error in fetchDatAuth:", error);
    return { success: false, message: error.message };
  }
}
